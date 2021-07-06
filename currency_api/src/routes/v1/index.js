const express = require('express');

// import all the routes here
const exchangeRoute = require('./exchange.route');

const router = express.Router();

router.use('/convert', exchangeRoute);

module.exports = router;