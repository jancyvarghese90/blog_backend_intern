const { ApolloServer } = require('apollo-server');
const typeDefs = require('./src/graphql/typeDefs');
const resolvers = require('./src/graphql/resolvers');
const { connectToMongo } = require('./src/db/db');
require('dotenv').config();

async function startServer() {
  await connectToMongo();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    cors: {
      origin: 'https://blog-one-kappa-27.vercel.app/', // your frontend
      credentials: true,
    },
  });

  const { url } = await server.listen({ port: process.env.PORT || 4000 });
  console.log(`🚀 Server ready at ${url}`);
}

startServer();
