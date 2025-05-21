require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
let db;
console.log("✅ db.js loaded");
async function connectToMongo() {
  await client.connect();
  db = client.db(); // Will use "Blogdb" from the URI
  console.log("✅ Connected to MongoDB");
}

function getDb() {
  return db;
}

module.exports = { connectToMongo, getDb };
