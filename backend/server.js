// backend/server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello, School Management System!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
