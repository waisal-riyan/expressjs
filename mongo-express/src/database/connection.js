import {
  MongoClient
} from "mongodb";

import redis from 'redis'
let redisClient = redis.createClient();
let mongodb;
redisClient.on('connect', () => {
  console.log("Connected successfully to redis");
})
const conns = {
  createMongoConnection(callback) {
    const host = process.env.MONGO_HOST;
    const username = process.env.MONGO_USERNAME;
    const password = process.env.MONGO_PASSWORD;
    const dbs = process.env.MONGO_DBS;
    const client = new MongoClient(`mongodb+srv://${username}:${password}@${host}`, {
      useUnifiedTopology: true
    });

    client.connect(function () {
      console.log("Connected successfully to database");
      mongodb = client.db(dbs);
      callback();
    });
  },
  getDb() {
    return mongodb;
  },
  getRedisClient() {
    return redisClient;
  }
};

export default conns;