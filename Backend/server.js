import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import leadRoutes from './routes/leadRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Root route (health check)
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Test POST route
app.post('/test', (req, res) => {
  res.json({ message: "The server is receiving POST requests!" });
});

// Main API routes
app.use('/api/leads', leadRoutes);

// Run local server in development; Vercel uses the default export.
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

// IMPORTANT: export app for Vercel (no app.listen)
export default app;