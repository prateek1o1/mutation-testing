// stringOperations.test.js

const assert = require('assert');
const stringOperations = require('../core/stringOperations');

describe('Unit Test - String Operations', () => {
  it('should concatenate two strings', () => {
    assert.equal(stringOperations.concatenateStrings('Hello', 'World'), 'HelloWorld');
  });

  it('should get the length of a string', () => {
    assert.equal(stringOperations.getStringLength('TestString'), 10);
  });

  it('should convert a string to uppercase', () => {
    assert.equal(stringOperations.convertToUppercase('uppercase'), 'UPPERCASE');
  });

  // Additional test cases for mutation coverage
  it('should handle concatenation with an empty string', () => {
    assert.equal(stringOperations.concatenateStrings('Hello', ''), 'Hello');
  });

  it('should handle getting the length of an empty string', () => {
    assert.equal(stringOperations.getStringLength(''), 0);
  });

  it('should handle converting an already uppercase string', () => {
    assert.equal(stringOperations.convertToUppercase('UPPERCASE'), 'UPPERCASE');
  });

  // Add more unit tests as needed
});
