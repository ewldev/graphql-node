const path = require('path');
const express = require('express');

const { AppolloServer} = require('apollo-server-express');

const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'));

async function startApolloServer() {
  const app = express();

  const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray,
  });

  const server = new ApolloServer({
    schema
  });

  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });
}  

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Running GraphQL server...on port ${PORT}` );
});