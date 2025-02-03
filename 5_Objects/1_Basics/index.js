
let radius = 1;
let x = 1;
let y = 1;

//Object Oriented Programming
const circle = {
  radius: 1,
  location:{
    x:1,
    y:1
  },
  isVisible: true,
  draw: function(){
    console.log('Draw Circle');
  }
};

const square = {
  perimeter: 2,

  area:{
    length:5,
    breadth:5
  },
  isVisible: true,
  draw: function(){
    console.log('Draw Square');
  }


}

circle.draw(); // Method
square.draw();

