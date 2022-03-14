{
  products {
    description
  }
  orders {
    subtotal
    items {
      quantity
      product {
        id
        price
        reviews {
          comment
          rating
        }
      }
    }
  }
}