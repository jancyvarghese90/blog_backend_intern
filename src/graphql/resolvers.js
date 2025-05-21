const { ObjectId } = require('mongodb');
const { getDb } = require('../db/db'); // Adjust the path to your db module

const resolvers = {
  Query: {
    posts: async () => {
      const db = getDb();
      return await db.collection('posts').find().toArray();
    },
    post: async (_, { id }) => {
      const db = getDb();
      return await db.collection('posts').findOne({ _id: new ObjectId(id) });
    },
  },
  Mutation: {
    createPost: async (_, { title, content, author }) => {
      if (!title || !content || !author) {
        throw new Error("All fields are required");
      }

      const newPost = { title, content, author };
      const db = getDb();
      const result = await db.collection('posts').insertOne({newPost});
      return { _id: result.insertedId, ...newPost };
    },
  },
};

module.exports = resolvers;
