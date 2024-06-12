const express = require('express');
const bodyParser = require('body-parser');
const {sequelize} = require('./models/index')
const routes = require('./routes');
const logger = require('./utils/logger');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use(routes);


// Start the server
app.listen(PORT, async () => {
  logger.info(`Server is running on port ${PORT}`);

  try {
    // Test database connection
    await sequelize.authenticate();
    logger.info('Database connection has been established successfully.');
  } catch (error) {
    logger.error('Unable to connect to the database:', error);
  }
});
