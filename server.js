const path = require('path');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));

const schema = makeExecutableSchema ({
    typeDefs: typesArray,
    resolvers: {
      Query: {
        products: (parent) => {
          console.log('Getting the products...');
          return parent.products;
        },
        orders: (parent) => {
          console.log('Getting orders...');
          return parent.orders;
        }
      }
    }
});

const root = {
    products: require('./products/products.model'),
    orders: require('./orders/orders.model'),
};

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Running GraphQL server...on port ${PORT}` );
});