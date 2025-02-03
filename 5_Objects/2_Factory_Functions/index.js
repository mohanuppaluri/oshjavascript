

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
    console.log('draw');
  }
};


// Factory Function to create Objects

function createCircle(radius){
  return {
    radius,

    draw(){
      console.log('draw');
    }
  };

}

const ccircle = createCircle(10);

console.log(ccircle);

//ccircle.draw();