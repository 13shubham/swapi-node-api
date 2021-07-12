const express = require('express');
const { errors } = require('celebrate');
const errorHandler = require('./src/middlewares/errorHandler');
const helmet = require('helmet')
const cors = require('cors');
//import routes
const routes = require('./src/routes');
const PORT = process.env.PORT || 8000;

//defining the Express app
const app = express();
// adding Helmet to enhance your API's security
app.use(helmet());
app.use(express.json());
app.use(cors());
//Routes
app.use('/', routes);

// Request validator error handling middleware
app.use(errors());

app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
});

module.exports = app;
