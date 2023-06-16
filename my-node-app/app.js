const express = require('express');
const app = express();
const port = 3000;

// Define a route for the root URL
const path = require('path');

// Define a route for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

