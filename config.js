require('dotenv').config(); // Load .env variables

const config = {
  port: process.env.PORT || 3000,
  mongoURI: process.env.MONGODB_URI || 'mongodb://localhost:27017/defaultdb',
  jwtSecret: process.env.JWT_SECRET || 'defaultsecret',
};

module.exports = config;
