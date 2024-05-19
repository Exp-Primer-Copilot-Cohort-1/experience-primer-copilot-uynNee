// Create web server
const express = require('express');
const app = express();

// Set up the server to listen on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// Serve static files from the public folder
app.use(express.static('public'));

// Define a route for comments
app.get('/comments', (req, res) => {
  // For now, just return a simple response
  res.send('Comments API');
});

// Define a route to handle errors
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Error occurred');
});