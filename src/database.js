
const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'your_username',
  password: '1208',
  database: 'postgresql://postgres:1208@127.0.0.1:5432/vinylspotify'
});

client.connect();