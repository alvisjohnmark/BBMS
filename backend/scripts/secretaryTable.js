import pool from '../database/db.js';

const createTable = async () => {
  await pool.query(`
    CREATE SCHEMA IF NOT EXISTS "BBMS";
    CREATE TABLE IF NOT EXISTS "BBMS".secretaries (
      id SERIAL PRIMARY KEY,
      full_name VARCHAR(100) NOT NULL,
      username VARCHAR(50) UNIQUE NOT NULL,
      password TEXT NOT NULL,
      barangay_id INTEGER UNIQUE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      CONSTRAINT fk_barangay
        FOREIGN KEY (barangay_id)
        REFERENCES "BBMS".barangays(id)
        ON DELETE SET NULL
    );
  `);

  console.log('Secretary table created successfully in BBMS schema');
};

createTable();
