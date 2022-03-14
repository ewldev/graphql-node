const orders = [
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
];

function getAllOrders() {
    return orders;
}

module.exports = {
    getAllOrders,
}