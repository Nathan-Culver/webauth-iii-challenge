const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const port = require('../index.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  res.send(port, `Welcome to ${port}!`);
});

module.exports = server;