const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.get('/', (req, res) => {
  const now = new Date();
  const repo = 'https://github.com/Sn0wF1re/HNGx_backend.git';
  const file = 'https://github.com/Sn0wF1re/HNGx_backend/blob/main/stage_one/server.js';

  const payload = {
    'slack_name': req.params.slack_name,
    'current_day': now.toLocaleString('en-us', { weekday: 'long' }),
    'utc_time': now.toISOString(),
    'track': req.params.track,
    'github_file_url': file,
    'github_repo_url': repo,
    'status_code': 200
  };
  
  res.send(payload);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});