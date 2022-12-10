const express = require('express'); // import the express module

const app = express(); // create an express app

const animals = ['dog', 'cat', 'bird', 'tiger']; // array of animals

// create an endpoint for the animals array
app.get('/animals', (req, res) => {
  res.json({animals: animals}); // return the animals array as JSON
});

// start the server on port 3000
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
