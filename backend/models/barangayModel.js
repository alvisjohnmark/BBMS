import pool from '../database/db.js'

export const createBarangay = async ({ name, location }) => {
    const query = `
        INSERT INTO "BBMS".barangays (name, location, created_at, updated_at)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
    `;
    const values = [name, location, new Date(), new Date()];
    const { rows } = await pool.query(query, values);
    return rows[0];
};

export const findBarangayByName = async (name) => {
    const result = await pool.query(`SELECT * FROM "BBMS".barangays WHERE name = $1`, [name]);
    return result.rows[0];
}
