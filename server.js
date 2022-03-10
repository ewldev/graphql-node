const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');


const schema = buildSchema(`
    type Query {
        description: String
        price: Float
    }
`);

const root = {
    description: 'Blue T-Shirt',
    price: 30.12,
};

const app = express();

app.use(graphqlHTTP({
    schema: schema,
    rootValue:
}))

app.listen(3000, () => {
    console.log('Running GraphQL server...');
});