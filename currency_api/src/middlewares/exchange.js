const fetch = require("node-fetch");
const NodeCache = require("node-cache");
const cache = new NodeCache();

const convertEndpoint = process.env.FIXER_ENDPOINT;
const apiKey = process.env.FIXER_API_KEY;

const fetchRates = async (req, res, next) => {
  const fromCurrency = req.body.fromCurrency;
  const toCurrency = req.body.toCurrency;
  let rate = cache.get(`${fromCurrency}-${toCurrency}`);
  console.log(`Cache ${rate}`);
  if (!rate) {
    try {
      const data = await fetch(
        `${convertEndpoint}?` +
          new URLSearchParams({
            access_key: apiKey,
            base: fromCurrency,
            symbols: toCurrency,
          })
      );
      const dataStr = await data.text();
      const dataObj = JSON.parse(dataStr);
      if (dataObj.success) {
        rate = dataObj.rates[toCurrency];
        success = cache.set(
          `${fromCurrency}-${toCurrency}`,
          rate,
          60 * 60 * 24
        );
        req.body.rate = rate;
        next();
      } else {
        res.status(500).send({ error: dataObj.error.type });
      }
    } catch (error) {
      res.status(500).send({ error: error.toString() });
    }
  } else {
    req.body.rate = rate;
    next();
  }
};

module.exports = { fetchRates };
