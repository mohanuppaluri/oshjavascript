// Constructor Function to create an Object

// Camel Notation : oneTwoThreeFour
// Pascal Notation : OneTwoThreeFour

function  Circle(radius){
  this.radius = radius;

  this.draw = function(){
    console.log('Draw');
  }
}


const circle = new Circle(1);

console.log(circle);

circle.draw();



// Factory Function for reference

function createCircle(radius){
  return {
    radius,

    draw(){
      console.log('draw');
    }
  };

}

const ccircle = createCircle(10);
