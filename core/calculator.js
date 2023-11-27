// calculator.js

module.exports = {
    add: function (a, b) {
      return a + b;
    },
  
    subtract: function (a, b) {
      return a - b;
    },
  
    multiply: function (a, b) {
      return a * b;
    },
  
    divide: function (a, b) {
      if (b !== 0) {
        return a / b;
      } else {
        throw new Error("Cannot divide by zero");
      }
    },
  
    square: function (a) {
      return a * a;
    },
  
    power: function (base, exponent) {
      return Math.pow(base, exponent);
    },
  
    // A sample function for integration testing
    performMultipleOperations: function (a, b, c, d) {
      const sum = this.add(a, b);
      const difference = this.subtract(c, d);
      const product = this.multiply(sum, difference);
      return this.square(product);
    },
  };
  