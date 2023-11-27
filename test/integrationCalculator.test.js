// integration.test.js

const assert = require('assert');
const calculator = require('../core/calculator');

describe('Integration Test - Calculator', () => {
  it('should correctly perform multiple operations', () => {
    const result = calculator.performMultipleOperations(3, 5, 2, 4);

    // Assuming performMultipleOperations internally calls add, subtract, multiply, square
    assert.equal(result, 256);
  });

  it('should handle integration scenario with negative numbers', () => {
    const result = calculator.performMultipleOperations(-3, 5, -2, 4);

    // Assuming performMultipleOperations internally calls add, subtract, multiply, square
    assert.equal(result, 144);
  });

  // Additional integration test cases for mutation coverage

  // Add more integration tests as needed
});
