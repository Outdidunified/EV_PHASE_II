const express = require('express');
const app = express();
const http = require('http');
const dotenv = require('dotenv');
const logger = require('./logger');

// Load environment variables from .env file
dotenv.config();

const SupertAdminRouter = require('./router/Super_Admin_Router.js');
app.use(express.json());


app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

app.use('/superadmin', SupertAdminRouter);

// Create an HTTP server using Express app
const httpServer = http.createServer(app);

// Define HTTP server port
const HTTP_PORT = process.env.HTTP_PORT || 3000;    

// Start the HTTP server
httpServer.listen(HTTP_PORT, () => {
    console.log(`HTTP Server listening on port ${HTTP_PORT}`);
    logger.info(`HTTP Server listening on port ${HTTP_PORT}`);
});
