CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert initial data
INSERT INTO users (username, email) VALUES
    ('user1', 'user1@example.com'),
    ('user2', 'user2@example.com');

create table if not exists schedule_updates (
    

        measurement_id SERIAL,
        trip_id VARCHAR(100) NOT NULL,
        begin_time TIMESTAMP,
        end_time TIMESTAMP,
        agency VARCHAR(50),
        number_of_updates NUMERIC,
        service_date TIMESTAMP

    );
    
    
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
                    