const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Render!');
});

// Add this:
app.get('/package.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'package.json'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
