import express from 'express';
import swaggerUi from 'swagger-ui-express';
import pizzas from './routes/pizzas.js';
import specification from './openapi.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();
app.use(express.json({ limit: '100kb' }));
app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.get('/openapi.json', (req, res) => res.json(specification));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specification));
app.use('/api/pizzas', pizzas);
app.use((req, res) => res.status(404).json({ error: 'Route introuvable.' }));
app.use(errorHandler);
export default app;
