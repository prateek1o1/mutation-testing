// test/myModule.test.js
const assert = require('assert');
const add = require('../src/myModule');

describe('add function', () => {
  it('should add two numbers', () => {
    assert.strictEqual(add(3, 2), 5);
  });
});
