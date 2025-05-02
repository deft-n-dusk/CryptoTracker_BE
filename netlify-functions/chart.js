const axios = require('axios');

exports.handler = async function (event) {
  const id = event.queryStringParameters.id;
  const days = event.queryStringParameters.days;

  if (!id || !days) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing 'id' or 'days' query parameter" })
    };
  }

  try {
    const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart`;
    const response = await axios.get(url, {
      params: {
        vs_currency: 'usd',
        days,
        interval: 'daily',
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch chart data' })
    };
  }
};
