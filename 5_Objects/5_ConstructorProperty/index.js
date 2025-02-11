// Factory Function
function createCircle(radius){
  return {
    radius,
    draw: function(){
      console.log('Circle Draw');
    }
  };
}

const circle = createCircle(1);


// Constructor Function

function Circle(radius){

  this.radius = radius;

  this.draw = function(){
    console.log('Constrcutor Draw');
  }
}

const another = new Circle(10);

let x = {};

// Internally it uses let x = new Object();
// Other examples include 
// new String(); but its easier to use '' , "". ``
// new Boolean(); but its easier to use true or false
// new Number(); //1,2,3
