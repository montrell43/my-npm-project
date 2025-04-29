const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Root route - Responds with 'Jane Doe'
app.get('/', (req, res) => {
  res.send('montrel tee');
});

// Route to serve package.json content
app.get('/package.json', (req, res) => {
  fs.readFile(path.join(__dirname, 'package.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to load package.json' });
    }
    res.type('application/json').send(data);
  });
});

// Set port based on environment or default to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
