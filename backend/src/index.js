// let's go!
require('dotenv').config();
const createServer = require('./createServer');
// const db = require('./db');

const server = createServer();

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  ({ port }) => console.log(`Server is now running on port ${port}`)
);
