// cart.js

class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    removeItem(item) {
      const index = this.items.indexOf(item);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    }
  
    calculateTotal() {
      return this.items.reduce((total, item) => total + item.price, 0);
    }
  }
  
  module.exports = ShoppingCart;
  