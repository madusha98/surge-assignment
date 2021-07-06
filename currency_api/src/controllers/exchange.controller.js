const convert = (req, res, next) => {
  try {
    const converted = req.body.rate * req.body.amount;
    res.send({ amount: converted.toFixed(2), currency: req.body.toCurrency });
  } catch (error) {
    res.status(500).send({ error: error.toString() });
  }
};

module.exports = { convert };
