const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.get('/', (req, res) => {
  const now = new Date();
  const day = now.getDay();
  const utcTime = now.toISOString;
  const { slack_name, track } = req.params;
  const repo = 'https://github.com/Sn0wF1re/HNGx_backend.git';
  const file = 'https://github.com/Sn0wF1re/HNGx_backend/stage_one/server.js.git';
  
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});