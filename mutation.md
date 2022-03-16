mutation {
  addNewProduct(id: "blackjacket", description: "Black Jacket", price: 99.50 ) {
    id
    reviews {
      rating
    }
  }
}