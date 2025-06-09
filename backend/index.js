import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cors from 'cors'; 
import adminRoutes from './routes/adminRoutes.js';
import { requireAuth } from './middleware/middleware.js';
import pool from './database/db.js'

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
  app.use(cors({
       origin: 'http://localhost:5173',
       credentials: true, 
   }));

// Routes
app.use('/api/admin', adminRoutes);

// Protected route
app.get('/api/protected', requireAuth, (req, res) => {
    res.json({ message: `Hello admin #${req.user.id}` });
});

// DB Test
async function testConnection() {
    try {
        const res = await pool.query('SELECT NOW()');
        console.log('Connected to Neon:', res.rows[0]);
    } catch (err) {
        console.error('Connection error', err);
    }
}

testConnection();

// Server start
app.listen(5000, () => console.log('Server running on port 5000'));
