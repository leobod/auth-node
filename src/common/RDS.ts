import {createClient} from 'redis';

// @ts-ignore
const client = createClient({host: "127.0.0.1", port: 6379});

client.on('error', (err) => console.log('Redis Client Error', err));

export {
  client
}

// await client.connect();
//
// await client.set('key', 'value');
// const value = await client.get('key');
