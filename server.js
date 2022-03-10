const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');


const schema = buildSchema(`
    type Query {
        products: [Product]
        orders: [Order]
    }

    type Product {
        id: ID!
        description: String!
        reviews: [Review]
        price: Float!        
    }

    type Review {
        rating: Int!
        comment: String
    }

    type Order {
        date: String!
        subtotal: Float!
        items: [OrderItem]
    }

    type OrderItem {
        product: Product!
        quantity: Int!
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

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Running GraphQL server...on port ${PORT}` );
});