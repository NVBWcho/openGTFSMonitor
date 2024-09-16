import os
import psycopg2

import pandas as pd
import json
import requests
from datetime import datetime,time
import psycopg2
from google.transit import gtfs_realtime_pb2
from google.protobuf.json_format import MessageToDict

import os
import pickle
import smtplib,ssl
import traceback
import io
import pandas as pd
import psycopg2
import pickle
from datetime import datetime,timedelta
from getrootdirectory import getRootDirectory
import os

def get_db_connection():
    conn = psycopg2.connect(
        host=os.getenv('DATABASE_HOST', 'db'),
        port=os.getenv('DATABASE_PORT', 5432),
        database=os.getenv('DATABASE_NAME', 'mydatabase'),
        user=os.getenv('DATABASE_USER', 'myuser'),
        password=os.getenv('DATABASE_PASSWORD', 'mypassword')
    )
    return conn

def create_new_user(numOfcurrentUsers):
    userId='user'+str(numOfcurrentUsers+1)
    userEmail=userId+'@'+'example.com'
    return {'userId':userId,'userEmail':userEmail}
    

def initialize_db():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS test_table (
            id SERIAL PRIMARY KEY,
            data TEXT NOT NULL
        )
    ''')
    
    cursor.execute('''create table if not exists schedule_updates
        (

            measurement_id SERIAL,
            trip_id VARCHAR(100) NOT NULL,
            begin_time TIMESTAMP,
            end_time TIMESTAMP,
            agency VARCHAR(50),
            number_of_updates NUMERIC

        )''')
    
    plpgsql_block = """
                    DO $$
                    BEGIN
                        IF NOT EXISTS (
                            SELECT 1 
                            FROM pg_class c 
                            JOIN pg_namespace n ON n.oid = c.relnamespace 
                            WHERE c.relname = 'idx_trip_id' 
                            AND n.nspname = 'public'
                        ) THEN
                            CREATE INDEX idx_trip_id ON schedule_updates (trip_id);
                        END IF;
                    END $$;
                    """

    
    cursor.execute(plpgsql_block)
    conn.commit()
    cursor.close()
    conn.close()

def write_data(userId,email):
    print(os.getcwd())
    conn = get_db_connection()
    cursor = conn.cursor()
    #cursor.execute('INSERT INTO test_table (data) VALUES (%s)', (data,))
    cursor.execute('INSERT INTO users (username,email) VALUES (%s, %s)',(userId,email))
    conn.commit()
    cursor.close()
    conn.close()

def read_data():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM users')
    rows = cursor.fetchall()
    cursor.close()
    conn.close()
    return rows

if __name__ == '__main__':
    print(os.getcwd())
    print(getRootDirectory())
    print(os.path.join(os.getcwd(),"data","calendar.txt"))
    try: 
        df=pd.read_csv(os.path.join(os.getcwd(),"python_files","data","calendar.txt"))
        print(len(df))
    except:
        print("no file found")    
    initialize_db()
    #write_data('Hello, world!')
    records = read_data()
    newUser=create_new_user(len(records))
    print(newUser)
    write_data(newUser['userId'],newUser['userEmail'])
    for record in records:
        print(f'id: {record[0]}, data: {record[1]}')
