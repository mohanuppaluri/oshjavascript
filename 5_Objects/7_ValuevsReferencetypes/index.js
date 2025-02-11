// Value Types 
// Number String Boolean Symbol undefined null
// Reference Types
// Object Function Array

let x = 10; // Primitive Type
let y = x;

x = 20;


let i = {value: 10}; // Object Type
let j = i;

i.value = 20;

// Primitives are copied by their value
// Objects are copied by their reference

let number = 10;

function increase(number){
  number++;
}

increase(number);
console.log(number);

// Object form of representation

let obj = {value: 20};

function increase1(obj){
  obj.value++;
}

increase1(obj);
console.log(obj);