// calculator.test.js

const assert = require('assert');
const calculator = require('../src/calculator');

describe('Unit Test - Calculator', () => {
  it('should add two numbers', () => {
    assert.equal(calculator.add(3, 5), 8);
  });

  it('should subtract two numbers', () => {
    assert.equal(calculator.subtract(8, 3), 5);
  });

  it('should multiply two numbers', () => {
    assert.equal(calculator.multiply(2, 4), 8);
  });

  it('should divide two numbers', () => {
    assert.equal(calculator.divide(8, 2), 4);
  });

  it('should handle division by zero', () => {
    assert.throws(() => calculator.divide(8, 0), /Cannot divide by zero/);
  });

  it('should calculate the square of a number', () => {
    assert.equal(calculator.square(4), 16);
  });

  it('should calculate the power of a number', () => {
    assert.equal(calculator.power(2, 3), 8);
  });

  it('should handle power with negative exponent', () => {
    assert.equal(calculator.power(2, -2), 0.25);
  });

  // Additional test cases for mutation coverage
  it('should handle addition with negative numbers', () => {
    assert.equal(calculator.add(-3, 5), 2);
  });

  it('should handle subtraction with negative result', () => {
    assert.equal(calculator.subtract(3, 5), -2);
  });

  // Add more unit tests as needed
});
