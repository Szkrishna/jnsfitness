// const express = require('express');
// const cors = require('cors');

// const contactRoutes = require('./routes/contact.routes');

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use('/api', contactRoutes);

// module.exports = app;

import express from 'express';
import cors from 'cors';
import contactRoutes from './routes/contact.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', contactRoutes);

export default app;