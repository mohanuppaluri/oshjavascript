const circle = {
  radius: 1,
  draw(){
    console.log('draw');
  }
};

for(let key in circle)
  console.log(key, circle[key]);

// for(let key of circle) => Error since Objects are not iterable only Arrays and Maps
for(let key of Object.keys(circle))
  console.log(key);

// Another way to access all the properties of an Object

for(let entry of Object.entries(circle))
  console.log(entry);