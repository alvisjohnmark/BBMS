import pool from '../database/db.js'


export const createSecretary = async ({ full_name, username, password, barangay_id }) => {
  const query = `
    INSERT INTO secretaries (full_name, username, password, barangay_id, created_at, updated_at)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;
  const values = [full_name, username, password, barangay_id, new Date(), new Date()];
  const { rows } = await pool.query(query, values);

  // Optionally update barangays.secretary_id
  await pool.query(
    `UPDATE barangays SET secretary_id = $1, updated_at = $2 WHERE id = $3`,
    [rows[0].id, new Date(), barangay_id]
  );

  return rows[0];
};

export const findSecretaryByUsername = async (username) => {
  const result = await pool.query(`SELECT * FROM secretaries WHERE username = $1`, [username]);
  return result.rows[0];
}