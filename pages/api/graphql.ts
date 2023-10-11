import { createYoga, createSchema } from 'graphql-yoga'
import { gql } from 'graphql-tag';
import axios from 'axios'; 

const typeDefs = gql`
  type Query {
    
  }

  type Mutation {
    
  }
`;

const resolvers = {
    Query: {
      hello: () => 'Hello, world!',
    },
    Mutation: {

    },
  };

const schema = createSchema({
    typeDefs,
    resolvers,
  });