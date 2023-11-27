const Animal = require("./animal");

class Cat extends Animal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }

  makeSound() {
    return "Meow";
  }

  introduce() {
    return `I am a ${this.color} cat named ${this.name}`;
  }
}

module.exports = Cat;
