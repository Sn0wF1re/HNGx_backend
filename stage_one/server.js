const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const uri = '/api';

app.get(uri, (req, res) => {
  const now = new Date();
  const utc_time = now.toISOString().slice(0, -5) + 'Z';
  const repo = 'https://github.com/Sn0wF1re/HNGx_backend.git';
  const file = 'https://github.com/Sn0wF1re/HNGx_backend/blob/main/stage_one/server.js';
  const { slack_name, track } = req.query;

  const payload = {
    slack_name: slack_name,
    current_day: now.toLocaleString('en-us', { weekday: 'long' }),
    utc_time: utc_time,
    track: track,
    github_file_url: file,
    github_repo_url: repo,
    status_code: 200
  };
  
  res.json(payload);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});