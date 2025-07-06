// singleton

//object literal

const mySymbol = Symbol();

const person = {
  name: 'John',
  age: 30,
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  },
  [mySymbol] : "mykey1"
};

console.log(person);
console.log(person.name); // Accessing property
console.log(person['age']); // Accessing property using bracket notation
person.greet(); // Calling method   
console.log(person[mySymbol]); // Accessing property using symbol

person.name = 'Jane'; // Modifying property
Object.freeze(person); // Freezing the object to prevent further modifications
person.age = 25;
console.log(person); // Check the object after modifications

console.log(person.greet); // Accessing method