
// Logical AND &&
// Logical OR ||
// Logical NOT !

//console.log(false && true);


let highIncome = true;
let goodCreditScore = true;

let eligibleForLoan = highIncome && goodCreditScore;
let eligibleForLoanOr = highIncome || goodCreditScore;

let applicationRefused = !eligibleForLoan;


console.log(eligibleForLoan);
console.log(applicationRefused);


