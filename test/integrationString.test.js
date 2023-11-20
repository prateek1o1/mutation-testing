// integrationString.test.js

const assert = require('assert');
const stringOperations = require('../src/stringOperations');

describe('Integration Test - String Operations', () => {
  it('should handle integration with concatenated and uppercase strings', () => {
    const result = {
      concatenated: stringOperations.concatenateStrings('Hello', 'World'),
      length: stringOperations.getStringLength('TestString'),
      uppercase: stringOperations.convertToUppercase('integration'),
    };

    assert.deepStrictEqual(result, {
      concatenated: 'HelloWorld',
      length: 10,
      uppercase: 'INTEGRATION',
    });
  });

  it('should handle integration with empty strings', () => {
    const result = {
      concatenated: stringOperations.concatenateStrings('', ''),
      length: stringOperations.getStringLength(''),
      uppercase: stringOperations.convertToUppercase(''),
    };

    assert.deepStrictEqual(result, {
      concatenated: '',
      length: 0,
      uppercase: '',
    });
  });

  // Additional integration test cases for mutation coverage
  // Add more integration tests as needed
});
