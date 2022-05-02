import type { Handler } from '@netlify/functions';

const handler: Handler = async (event) => {
  const { headers } = event;

  return {
    statusCode: 200,
    body: JSON.stringify({ headers }),
  };
};

export { handler };
