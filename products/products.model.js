const products = [
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
]; 

function getAllProducts() {
    return products;
}

module.exports = {
    getAllProducts,
}