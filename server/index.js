// import express from 'express';
// const app = express();

// app.get('/', (req, res) => {
//   const name = process.env.NAME || 'World';
//   res.send(`Hello ${name}!`);
// });

// const port = parseInt(process.env.PORT) || 3000;
// app.listen(port, () => {
//   console.log(`listening on port ${port}`);
// });

import 'dotenv/config';
import app from './src/app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});