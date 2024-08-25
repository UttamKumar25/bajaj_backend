const express = require('express');
const bodyParser = require('body-parser');
const bfhlRoutes = require('./routes/bfhl');

// Create an instance of express
const app = express();
const PORT = 5000; // You can change this port if needed

// Middleware
app.use(bodyParser.json());
app.use('/bfhl', bfhlRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
