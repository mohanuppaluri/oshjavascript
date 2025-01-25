// Falsy (false)
// Undefined , null,0,false,'',NaN

// Anything that is not Falsy is Truthy


// console.log(false || true);
// console.log(false || 'Nirvi');
// console.log(false || 1);

console.log(false || 1 || 2); // Returns 1 know as shortcircuiting


let userColor = 'red';
let defaultColor = 'blue';
let demoColor = undefined;

let currentColor = userColor || defaultColor;
let currentColor1 = demoColor || defaultColor;

console.log(currentColor);
console.log(currentColor1);