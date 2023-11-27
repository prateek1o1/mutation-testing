// integrationCart.test.js

const assert = require('assert');
const ShoppingCart = require('../core/cart');

describe('Integration Test - Shopping Cart Operations', () => {
  it('should add and remove items, and calculate total price', () => {
    const cart = new ShoppingCart();
    const item1 = { name: 'Product 1', price: 20 };
    const item2 = { name: 'Product 2', price: 30 };

    cart.addItem(item1);
    cart.addItem(item2);
    cart.removeItem(item1);

    const result = {
      items: cart.items,
      total: cart.calculateTotal(),
    };

    assert.deepStrictEqual(result, { items: [item2], total: 30 });
  });

  it('should handle integration with an empty cart', () => {
    const cart = new ShoppingCart();

    const result = {
      items: cart.items,
      total: cart.calculateTotal(),
    };

    assert.deepStrictEqual(result, { items: [], total: 0 });
  });

  // Additional integration test cases for mutation coverage
  // Add more integration tests as needed
});
