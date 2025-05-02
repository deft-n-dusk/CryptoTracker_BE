const axios = require('axios');

exports.handler = async function(event, context) {
  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets',
      {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 100,
          page: 1,
          sparkline: false
        }
      }
    );
    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    };
  } catch (error) {// netlify-functions/coins.js
    const axios = require('axios');
    
    exports.handler = async function (event) {
      // CORS headers to allow frontend to call the backend
      const headers = {
        'Access-Control-Allow-Origin': '*',  // Allows any origin, change to your frontend URL for extra security
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', // Allow these HTTP methods
        'Access-Control-Allow-Headers': 'Content-Type', // Allow content-type header
      };
    
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 100,
            page: 1,
            sparkline: false
          }
        });
    
        return {
          statusCode: 200,
          body: JSON.stringify(response.data),
          headers: headers // Add the CORS headers to the response
        };
      } catch (error) {
        return {
          statusCode: 500,
          body: JSON.stringify({ error: 'Failed to fetch data' }),
          headers: headers // Add the CORS headers even in case of an error
        };
      }
    };
    
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch data from CoinGecko' })
    };
  }
};
