import pool from '../database/db.js'

export const createAdmin = async ({ full_name, username, password }) => {
    const query = `
        INSERT INTO "BBMS".admins (full_name, username, password, created_at, updated_at)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;
    `;
    const values = [full_name, username, password, new Date(), new Date()];
    const { rows } = await pool.query(query, values);
    return rows[0];
};

export const findAdminByUsername = async (username) => {
    const result = await pool.query(`SELECT * FROM "BBMS".admins WHERE username = $1`, [username]);
    return result.rows[0];
};
