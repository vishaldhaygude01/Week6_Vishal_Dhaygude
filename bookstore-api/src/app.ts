import express from 'express';
import routes from './routes';
import logger from './utils/logger';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use(routes);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  logger.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

export default app;
