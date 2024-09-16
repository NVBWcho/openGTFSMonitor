import psycopg2
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
            number_of_updates NUMERIC,
            service_date TIMESTAMP

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