import pool from "../database/db.js";

const createTable = async () => {
  await pool.query(`
    CREATE SCHEMA IF NOT EXISTS "BBMS";

    CREATE TABLE IF NOT EXISTS "BBMS".barangays (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) UNIQUE NOT NULL,
      location TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      secretary_id INTEGER UNIQUE,
      CONSTRAINT fk_secretary
        FOREIGN KEY (secretary_id)
        REFERENCES "BBMS".secretaries(id)
        ON DELETE SET NULL
    );

  `);

  console.log(
    "Barangay table created successfully in BBMS schema"
  );
};

createTable();
