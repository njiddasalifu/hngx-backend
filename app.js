const express = require('express');
const app = express();

app.get('/salif/api', (req, res) => {
  const slackName = req.query.slack_name;
  const track = req.query.track;
  //defining the current day using the date format method 
  const options = { weekday: 'long' };
  const currentDay = new Date().toLocaleDateString('en-US', options);
  const utcTime = new Date().toISOString();
  const githubFileUrl = req.query.github_file_url;
  const githubRepoUrl = req.query.github_repo_url;

  const response = {
    slack_name: "HNGx",
    track: "Backend",
    current_day: currentDay,
    utc_time: utcTime,
    github_file_url: "https://github.com/njiddasalifu/hngx-backend/blob/main/app.js",
    github_repo_url: "https://github.com/njiddasalifu/hngx-backend",
    status_code: 200
  };

  res.json(response);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});