const axios = require('axios');

exports.handler = async function (event) {
  const id = event.queryStringParameters.id;

  if (!id) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing coin ID" })
    };
  }

  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch coin data' })
    };
  }
};
