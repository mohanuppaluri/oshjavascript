// 1 = 00000001
// 2 = 00000010
// OR = 00000011
// AND = 00000000

// Read , Write or Execute
//  00000100
//  00000110
//  00000111

console.log( 1 | 2); // Bitwise OR
console.log( 6 & 4); // Bitwise AND

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;

myPermission = myPermission | readPermission | writePermission;

console.log('Permission :' + myPermission); // Value would be 6

let message = (myPermission & readPermission) ? 'yes' : 'no'; // Value would be 4
//console.log(myPermission & readPermission)

console.log(message)
