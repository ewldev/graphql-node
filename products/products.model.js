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

function getProductsByPrice(min, max) {
    return products.filter((product) => {
      return product.price >= min && product.price <= max;
    });
  }

module.exports = {
    getAllProducts,
    getProductsByPrice,
}