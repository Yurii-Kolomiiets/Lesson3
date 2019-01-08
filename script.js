'use strict';

var leftBorderWidth = 1;
let second = 2;
const pi = 3.14;

console.log(second);
console.log(4 / 0);
console.log('string' * 9);

let something;
console.log(something);

let person = {
    name: 'John',
    age: 25,
    isMarried: false
};

console.dir(person);
console.log(person.name);
console.log(person['name']);

let img = ['apple.jpg', 'plum.png', 'orange.bmp'];
console.log(img[2]);

//alert('Hello, World!');

// let answer = confirm('Are you here?');
// console.log(answer);

// let answer = prompt('Есть ли Вам 18 лет?', 'Да');
// console.log(answer);
// console.log(typeof(answer));
// console.log(typeof(img));

// console.log("array" + " - " + "object");
// console.log(5 + " - " + "number");

let incr = 10,
    decr = 10;

// incr++;
// decr--;

console.log(incr++);
console.log(decr--);
console.log(incr);
console.log(decr);

console.log(5 % 2);
console.log(2 == "2");

console.log(2 === "2");

let isChecked = true,
    isClosed = false;

console.log(isChecked && isClosed);
console.log(isChecked || isClosed);
