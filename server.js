const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');


const schema = buildSchema(`
    type Query {
        products: [Product]
    }

    type Product {
        description: String!
        price: Float!
    }
`);

const root = {
    description: 'Blue T-Shirt',
    price: 30.12,
};

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(5000, () => {
    console.log('Running GraphQL server...');
});