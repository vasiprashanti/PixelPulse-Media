import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { connectToGoogleSheets } from './config/googleSheets.js';
import leadRoutes from './routes/leadRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.post('/test', (req, res) => {
  res.json({ message: "The server is receiving POST requests!" });
});

app.use('/api/leads', leadRoutes);

connectToGoogleSheets().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Failed to start server due to Google Sheets connection error.', err);
});