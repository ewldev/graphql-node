const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const { makeExecutableSchema } = require('@graphql-tools/schema');

const schemaText = `
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
`;

const schema = makeExecutableSchema ({
    typeDefs: [schemaText]
})

const root = {
    description: 'Blue T-Shirt',
    price: 30.12,
    products: [
        {
          id: 'bluetshirt',
          description: 'Blue T-Shirt',
          price: 30.95,
        },
        {
          id: 'greypant',
          description: 'Grey Pants',
          price: 79.85,
        }
      ],
      orders: [
        {
          date: '2021-3-20',
          subtotal: 51.00,
          items: [ 
            {
              product: {
                id: 'bluetshirt',
                description: 'Old Blue T-Shirt',
                price: 25.50,
              },
              quantity: 2,
            }
          ]
        }
      ]

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