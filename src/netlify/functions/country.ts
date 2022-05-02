import type { Handler } from '@netlify/functions';

const handler: Handler = async (event) => {
  const country = event.headers['x-country'];

  return {
    statusCode: 200,
    body: JSON.stringify({ country }),
  };
};

export { handler };
