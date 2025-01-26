function maxOfTwo( firstNumber , secondNumber){

  if(firstNumber>secondNumber) console.log(firstNumber + ' is greatest number');
  else console.log(secondNumber + ' is the greatest number');

}

maxOfTwo(10,30);

//Second Implementation
function maxOfTwoNumbers( firstNumber , secondNumber){

  let result=0;
  if(firstNumber>secondNumber) {
    return result = firstNumber;
  } else return result = secondNumber;

}

//Third Implementation

function max(a,b){
  return (a>b)?a:b;
}

let i = max(101,200)
console.log(i);
console.log(maxOfTwoNumbers(10,43));