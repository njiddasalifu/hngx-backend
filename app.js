const express = require('express');
const app = express();

app.get('/salif/api', (req, res) => {
  const slackName = req.query.slack_name;
  const currentDay = req.query.current_day;
  const utcTime = new Date().toISOString();
  const track = req.query.track;
  const githubFileUrl = req.query.github_file_url;
  const githubRepoUrl = req.query.github_repo_url;

  const response = {
    slack_name: "HNGx",
    current_day: "Thursday",
    utc_time: utcTime,
    track: "Backend",
    github_file_url: "No file yet",
    github_repo_url: "https://github.com/njiddasalifu/hngx-backend",
    status_code: 200
  };

  res.json(response);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});