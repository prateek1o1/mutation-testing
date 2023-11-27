// cart.test.js

const assert = require('assert');
const ShoppingCart = require('../core/cart');

describe('Unit Test - Shopping Cart', () => {
  // ... (existing test cases)

  it('should handle removing an existing item from the cart', () => {
    const cart = new ShoppingCart();
    const item1 = { name: 'Product 1', price: 20 };
    const item2 = { name: 'Product 2', price: 30 };

    cart.addItem(item1);
    cart.addItem(item2);
    cart.removeItem(item1);

    assert.deepStrictEqual(cart.items, [item2]);
  });

  it('should handle removing the last item from the cart', () => {
    const cart = new ShoppingCart();
    const item = { name: 'Product', price: 25 };

    cart.addItem(item);
    cart.removeItem(item);

    assert.deepStrictEqual(cart.items, []);
  });

  it('should not modify the cart if the item to remove is not present', () => {
    const cart = new ShoppingCart();
    const item1 = { name: 'Product 1', price: 20 };
    const item2 = { name: 'Product 2', price: 30 };

    cart.addItem(item1);
    cart.removeItem(item2);

    assert.deepStrictEqual(cart.items, [item1]);
  });

  it('should handle removing an item with a negative price', () => {
    const cart = new ShoppingCart();
    const item = { name: 'Negative Product', price: -10 };

    cart.addItem(item);
    cart.removeItem(item);

    assert.deepStrictEqual(cart.items, []);
  });

  // Updated test cases for mutation coverage
  it('should handle removing an item with index not equal to -1', () => {
    const cart = new ShoppingCart();
    const item1 = { name: 'Product 1', price: 20 };
    const item2 = { name: 'Product 2', price: 30 };

    cart.addItem(item1);
    cart.addItem(item2);

    cart.removeItem(item1);

    assert.deepStrictEqual(cart.items, [item2]);
  });

  it('should handle removing an item with index not equal to +1', () => {
    const cart = new ShoppingCart();
    const item1 = { name: 'Product 1', price: 20 };
    const item2 = { name: 'Product 2', price: 30 };

    cart.addItem(item1);
    cart.addItem(item2);

    cart.removeItem(item1);

    assert.deepStrictEqual(cart.items, [item2]);
  });

  // Add more unit tests as needed
});
