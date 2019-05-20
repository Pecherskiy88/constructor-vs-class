"use strict";

// Написать класс Dog, который наследуется от класcа Animal. Класс Animal имеет метод getName (name можно передать в конструктор). Класс Dog имеет метод bark (возвращает строку «Dog {dogname} is barking».

//     Пример использования:

//     var dog = new Dog ('Aban');

//     dog.getName () === 'Aban'; // true

//     dog.bark () === 'Dog Aban is barking'; // true

//     Задание необходимо сделать в двух вариантах: на ES5 и ES6.

//=================ES5==============================

// function Animal(name) {
//   this.name = name;
// }
// Animal.prototype.getName = function() {
//   console.log(this.name);
// };

// function Dog(name) {
//   Animal.call(this, name);
// }
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.bark = function() {
//   console.log("Dog ", this.name, "is barking");
// };

// const mango = new Dog("Mango");

// console.log(mango);
// mango.getName();
// mango.bark();

//=================ES6==============================
class Animal {
  constructor(name) {
    this.name = name;
  }

  getName() {
    console.log(this.name);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  bark() {
    console.log(`Dog ${this.name} is barking`);
  }
}

const mango = new Dog("Mango");
mango.getName();
mango.bark();
