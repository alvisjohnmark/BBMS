import pool from '../database/db.js';

const createTable = async () => {
  await pool.query(`
    CREATE SCHEMA IF NOT EXISTS "BBMS";

    CREATE TABLE IF NOT EXISTS "BBMS".admins (
      id SERIAL PRIMARY KEY,
      full_name VARCHAR(100) NOT NULL,
      username VARCHAR(50) UNIQUE NOT NULL,
      password TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

  console.log('Admins table created successfully in BBMS schema');
};

createTable();
