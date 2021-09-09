import { MongoClient } from "mongodb";

const database = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.ozw6w.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

export async function setMongoCxn() {
  const client = await MongoClient.connect(database);
  return client;
}

export async function insertOne(client, tableName, data) {
  const db = client.db();
  const result = await db.collection(tableName).insertOne(data);
  client.close();
  return result;
}
