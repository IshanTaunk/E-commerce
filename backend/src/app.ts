import express from 'express';
import cors from 'cors';
import productRoutes from './routes/productRoutes';
import hotelRoutes from './routes/hotelRoutes';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ message: 'Backend is running' });
});

app.use("/api/hotels", hotelRoutes);

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, message: "Server is running" });
});

app.use('/api/products', productRoutes);

export default app;