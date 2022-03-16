query ExampleQuery {
  orders {
    date
  }
  products {
    id
  }
}

mutation ExampleMutation {
  addNewProduct(id: "brownjacket", description: "Brown Jacket", price: 150.90) {
    description
  }
}