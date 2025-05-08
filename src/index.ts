import express from 'express';
import pizzaRoutes from './routes/pizzaRoutes';
import desertRoutes from './routes/desertRoutes';
import refreshmentRoutes from './routes/refreshmentRoutes';
import storeRoutes from './routes/storeRoutes';

const app = express();

app.use('/api', pizzaRoutes);
app.use('/api', desertRoutes);
app.use('/api', refreshmentRoutes);
app.use('/api', storeRoutes);

const PORT = process.env.PORT || 1008;
app.listen(PORT, () => console.log(`🚀 ~ Server running on port ${PORT}`));

export default app;