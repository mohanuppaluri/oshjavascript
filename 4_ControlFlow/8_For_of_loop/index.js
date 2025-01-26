// For...of loop introduced from ECMA6

const person = {
  name: 'Mohan',
  age: 30
};

for(let key in person){
  console.log(key,person[key]);
}

const colors = ['red','green','blue'];  // Array

// for(let index in colors){
//   console.log(index,colors[index]);
// }

for(let color of colors){
  console.log(color);
}
