import pool from '../database/db.js';

const checkAdmins = async () => {
  try {
    const res = await pool.query('SELECT * FROM admins');
    console.log(res.rows);
  } catch (err) {
    console.error('Error querying admins:', err);
  } finally {
    await pool.end();
  }
};

checkAdmins();
