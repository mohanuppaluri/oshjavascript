// Primitive type -> String , Number, Boolean,undefined,null
// Reference type -> Object , Array , Function


//let name ='Mohan'
// let age = 30;
let person = {
  name:'Mohan',
  age: 30
}

//Dot Notation
person.name = 'Nirvita'


//Bracket Notation
let selection = 'name';
person[selection] = 'Jyothsna';

console.log(person.name); // Dot Notation access
console.log(person['name']); // Bracket Notation access 