const express = require("express");

const { convert } = require("../../controllers/exchange.controller");
const exchangeSwagger = require("../../docs/exchange.doc");
const { fetchRates } = require("../../middlewares/exchange");

const router = express.Router();

router.route("/").post(exchangeSwagger, fetchRates, convert);

module.exports = router;
