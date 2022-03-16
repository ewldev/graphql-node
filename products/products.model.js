const products = [
  {
    id: 'bluetshirt',
    description: 'Blue T-Shirt',
    price: 30.95,
    reviews: [],
  },
  {
    id: 'greypant',
    description: 'Grey Pants',
    price: 79.85,
    reviews: [],
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
 
function getProductById(id) {
    return products.find((product) => {
      return product.id === id;
    });
} 

function addNewProduct(id, description, price) {
    const newProduct = {
      id,
      price,
      description,
      reviews: []
    };
  
    products.push(newProduct);
    return newProduct;
  }

module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductById,
    addNewProduct,
}