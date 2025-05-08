import express from 'express';
import pizzaRoutes from './routes/pizzaRoutes';
import desertRoutes from './routes/desertRoutes';
import refreshmentRoutes from './routes/refreshmentRoutes';

const app = express();

// Middleware and other routes...
app.use('/api', pizzaRoutes);
app.use('/api', desertRoutes);
app.use('/api', refreshmentRoutes);

const PORT = process.env.PORT || 1008;
app.listen(PORT, () => console.log(`🚀 ~ Server running on port ${PORT}`));

export default app;