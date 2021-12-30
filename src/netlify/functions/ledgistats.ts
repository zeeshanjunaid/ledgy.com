import type { Handler } from '@netlify/functions';
import fetch, { RequestInit } from 'node-fetch';
import crypto from 'crypto';
import get from 'lodash.get';

const bobApiToken = process.env.BOB_API_TOKEN || '';
const ledgistatsToken = crypto.createHash('sha256').update(bobApiToken).digest('hex').slice(0, 32);

const bobApiUrl = 'https://api.hibob.com/v1/';
const options: RequestInit = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: bobApiToken,
  },
};

const fetchBob = async (endpoint: string) => {
  const res = await fetch(`${bobApiUrl}${endpoint}`, options);
  return res.json();
};

const customField = '.custom';

const getCustomList = (namedLists: UntypedObject, field: string) => {
  if (!field.includes(customField)) return null;

  const key = field.replace(customField, '');
  const values: UntypedObject[] = get(namedLists, key).values;
  return new Map<string, string>(values.map((v) => [v.id, v.name]));
};

const getAggregateField =
  (employees: UntypedObject[], namedLists: UntypedObject[]) => (field: string) => {
    const list = getCustomList(namedLists, field);
    const entries = employees
      .map((employee) => get(employee, field))
      .flat()
      .map((v) => (list ? list.get(v) : v));

    const words: Record<string, number> = {};
    entries.forEach((v) => {
      words[v] = (words[v] || 0) + 1;
    });
    return words;
  };

const handler: Handler = async (event) => {
  if (event.headers.authorization !== ledgistatsToken)
    return { statusCode: 401, body: 'not-authorized' };

  const { employees } = await fetchBob('profiles');
  const namedLists = await fetchBob('company/named-lists');
  const aggregateField = getAggregateField(employees, namedLists);

  const nationalities = aggregateField('personal.nationality');
  const activities = aggregateField('about.custom.field_1640868745323');
  const languages = aggregateField('personal.custom.field_1640782705253');
  const backgrounds = aggregateField('about.custom.field_1640792007488');

  return {
    statusCode: 200,
    body: JSON.stringify({ nationalities, activities, languages, backgrounds }),
  };
};

export { handler };
