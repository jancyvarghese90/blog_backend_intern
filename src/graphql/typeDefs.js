const { gql } = require('apollo-server');

const typeDefs = gql`
  type BlogPost {
    _id: ID!
    title: String!
    content: String!
    author: String!
  }

  type Query {
    posts: [BlogPost!]!
    post(id: ID!): BlogPost
  }

  type Mutation {
    createPost(title: String!, content: String!, author: String!): BlogPost
  }
`;

module.exports = typeDefs;
