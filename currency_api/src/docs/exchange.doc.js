const exchangeSwagger = (req, res, next) => {
  // #swagger.description = 'Endpoint to convert currency.'
  /*  #swagger.parameters['body'] = {
            in: 'body',
            description: '',
            schema: { 
                $fromCurrency: 'EUR',
                $toCurrency: 'LKR',
                $amount: 500
            }
    } */
  next();
};

module.exports = exchangeSwagger;
