// netlify-functions/coin.js
const axios = require('axios');

exports.handler = async function (event) {
  const headers = {
    'Access-Control-Allow-Origin': '*', // replace * with your frontend URL if needed
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle CORS preflight request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
    };
  }

  const { id } = event.queryStringParameters;

  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
      headers,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch coin data' }),
      headers,
    };
  }
};
