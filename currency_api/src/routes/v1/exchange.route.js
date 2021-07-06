const express = require("express");

const { convert } = require("../../controllers/exchange.controller");
const { fetchRates } = require("../../middlewares/exchange");

const router = express.Router();

router.route("/").post(fetchRates, convert);

module.exports = router;
