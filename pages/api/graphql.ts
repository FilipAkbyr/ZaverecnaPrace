import { createYoga, createSchema } from 'graphql-yoga'
import { gql } from 'graphql-tag';
import { DecodedIdToken } from 'firebase-admin/auth';
import { verifyToken } from '../../server/verifyToken';
import { House } from '../../generated/graphql';
import { firestore } from '../../server/firebase-admin-config';


type Context = {
  user?: DecodedIdToken | undefined;
};

const typeDefs = gql`
  type Query {
    users: [User!]!
    property(propertyId: ID!): House!
    properties: [House!]!
  }
  
  type User {
    name: String!
  }

  type House {
    id: ID
    description: String!
    price: Int!
  }

  type Mutation {
      addHouse(id: ID, description: String!, price: Int!): House
      deleteHouse(id: ID!): House
  }
  
`;

const db = firestore();

const resolvers = {
      Query: {
        properties: async (_root: any, _args: any) => {
          const houseRef = db.collection('properties') as FirebaseFirestore.CollectionReference<House>;
          const docsRefs = await houseRef.listDocuments();
          const docsSnapshotPromises = docsRefs.map((doc) => doc.get());
          const docsSnapshots = await Promise.all(docsSnapshotPromises);
          const docs = docsSnapshots.map((doc) => ({...doc.data(), id: doc.id}));
          console.log(docs);
          return docs;
        },
        property: async (_root: any, args: any) => {
          console.log(args.propertyId);
          const houseRef = db.doc(`/properties/${args.propertyId}`) as FirebaseFirestore.DocumentReference<House>;
          const docSnapshot = await houseRef.get();
          const doc = docSnapshot.data();
          return {...doc, id: docSnapshot.id};
        },
      },
      Mutation: {
        addHouse: async (_: any, { description, price}: { description: string, price: number}, __: any) => {
          const projectRef = db.collection('properties').doc();
          const project = {description, price }; 
          await projectRef.set(project);
          return project;
        },
        deleteHouse: async (_: any, {id}: {id: string}, __: any) => {
          const projectRef = db.collection('properties').doc(id);
          const project = await projectRef.get();
          await projectRef.delete();
          return project.data();
        }
      },
  };

  const schema = createSchema({
    typeDefs,
    resolvers,
  });

  export default createYoga({
    schema,
    // Needed to be defined explicitly because our endpoint lives at a different path other than /graphql
    graphqlEndpoint: '/api/graphql',
    context: async (context) => {
      const auth = context.request.headers.get('authorization');
      console.log(auth);
      return {
        user: auth ? await verifyToken(auth) : undefined,
      } as Context;
    },
  });