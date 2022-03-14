const path = require('path');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolvers'));

const schema = makeExecutableSchema ({
    typeDefs: typesArray,
    resolvers: resolversArray,
});

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,   
    graphiql: true,
}));

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Running GraphQL server...on port ${PORT}` );
});