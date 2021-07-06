const express = require('express');

const exchangeRoute = require('./exchange.route');

const router = express.Router();

router.use('/convert', exchangeRoute);

module.exports = router;