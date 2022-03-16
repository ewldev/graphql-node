{
  product(id: "greypant") {
    description
    reviews {
      comment
      rating
    }
  }
  productsByPrice(min: 10, max: 50) {
    description
    price
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


{
  productsByPrice(min: 10, max: 50) {
    description
    price
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
