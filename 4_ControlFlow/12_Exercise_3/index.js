// Divisible by 3 ==> Fizz
// Divisible by 5 ==> Buzz
// Divisible by both ==> FizzBuzz
// Not divisble by both ==> input
// Not a number ==> 'Not a number'


const output = fizzBuss(false);
console.log(output);

function fizzBuss(input){

  if(typeof input !== 'number')
    return NaN;

  if((input%3 === 0) && (input%5 === 0))
    return 'FizzBuzz'; 

  if(input%3 === 0) 
    return 'Fizz';

  if(input%5 === 0)
    return 'Buzz'; 

  return input;
  
}