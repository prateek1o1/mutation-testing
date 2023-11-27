const { expect } = require("chai");
const Animal = require("../core/animal");
const Cat = require("../core/cat");

describe("Mutation Integration Testing", () => {
  it("should create an Animal and make a generic sound", () => {
    const animal = new Animal("Generic Animal");
    expect(animal.makeSound()).to.equal("Generic animal sound");
  });

  it("should create a Cat, make a meow sound, and introduce itself", () => {
    const cat = new Cat("Whiskers", "Tabby");
    expect(cat.makeSound()).to.equal("Meow");
    expect(cat.introduce()).to.equal("I am a Tabby cat named Whiskers");
  });

  // Additional tests as needed
});
