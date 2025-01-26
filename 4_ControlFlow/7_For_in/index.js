// For...in loop Always use bracket notation only

const person = {
  name: 'Mohan',
  age: 30
};

for(let key in person){
  console.log(key,person[key]);
}

const colors = ['red','green','blue'];  // Array

for(let index in colors){
  console.log(index,colors[index]);
}

//Dot Notation

person.name 

//Bracket Notation

person['name']