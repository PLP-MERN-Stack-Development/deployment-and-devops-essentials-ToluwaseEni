import dotenv from "dotenv"; 
dotenv.config();

import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';
import winston from 'winston';
import cors from 'cors';
import * as Sentry from '@sentry/node';

// Initialize Sentry
Sentry.init({ dsn: process.env.SENTRY_DSN });

const app = express();
app.use(Sentry.Handlers.requestHandler());
app.use(helmet());
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_ORIGIN }));

// Logger
const logger = winston.createLogger({ transports: [new winston.transports.Console()] });
app.use(morgan('combined', { stream: { write: msg => logger.info(msg.trim()) } }));

// --- Basic route ---
app.get('/', (req, res) => res.send('Backend is running ✅'));

// --- Health & ready endpoints ---
app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.get('/ready', (req, res) => {
  const ready = mongoose.connection.readyState === 1;
  res.status(ready ? 200 : 503).json({ ready });
});

// --- DB connection ---
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  minPoolSize: 5,
  maxPoolSize: 50,
})
.then(() => logger.info('Mongo connected'))
.catch(e => { logger.error(e); process.exit(1); });

// --- Error handling ---
app.use(Sentry.Handlers.errorHandler());
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

// --- Start server ---
const port = process.env.PORT || 5000;
app.listen(port, () => logger.info(`Server running on port ${port}`));
