const express =  require('express');
const bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express')

const config = require('../config');
const pair = require('./components/pair/network');
const errors = require('../network/errors');

const app = express();

app.use(bodyParser.json());

const contextService = require('request-context');
app.use(contextService.middleware('request'));

const swaggerDoc = require('./swagger.json')

//Router
app.use('/api/pair', pair);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(errors);

app.listen(config.api.port, () => {
    console.log('Listening ', config.api.port);
})

