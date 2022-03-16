mutation {
  addNewProduct(id: "blackjacket", description: "Black Jacket", price: 99.50 ) {
    id
    reviews {
      rating
    }
  }
 shirtReview: addNewProductReview(id: "bluetshirt", rating: 5, comment: "Nice pattern and design!") {
    rating
  }
 jacketReview: addNewProductReview(id: "blackjacket", rating: 4, comment: "Stylish and comfortable!") {
    rating
  }
}


mutation {
  addNewProduct(id: "blackjacket", description: "Black Jacket", price: 99.50 ) {
    id
    reviews {
      rating
    }
  }
}