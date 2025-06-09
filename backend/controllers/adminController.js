import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "../database/db.js";

export const registerAdmin = async (req, res) => {
  const { full_name, username, password } = req.body;

  if (!full_name || !username || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const existing = await pool.query(
      `SELECT id FROM "BBMS".admins WHERE username = $1`,
      [username]
    );
    if (existing.rows.length > 0) {
      return res.status(409).json({ error: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const now = new Date();
    const result = await pool.query(
      `INSERT INTO "BBMS".admins (full_name, username, password, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5) RETURNING id`,
      [full_name, username, hashedPassword, now, now]
    );

    const adminId = result.rows[0].id;

    const token = jwt.sign(
      { id: adminId, role: "admin" },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 1000, 
    });

    res
      .status(201)
      .json({ message: "Admin registered successfully", role: "admin" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await pool.query(
      `SELECT * FROM "BBMS".admins WHERE username = $1`,
      [username]
    );

    const admin = result.rows[0];
    if (!admin) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const match = await bcrypt.compare(password, admin.password);
    if (!match) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: admin.id, role: 'admin' },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 60 * 60 * 1000, 
    });

    res.json({ message: 'Logged in successfully', role: 'admin' });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const logoutAdmin = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });
  res.status(200).json({ message: "Logged out successfully" });
};
