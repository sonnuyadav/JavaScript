//use bigInt in Javascript
const maxNumber = Number.MAX_SAFE_INTEGER;
console.log(maxNumber); //9007199254740991
console.log(maxNumber + 1); //9007199254740992
console.log(maxNumber + 2); //9007199254740992
//Main issues with Number.MAX_SAFE_INTEGER same value repeated above

//So we are using BigINT

let bigNumber = 1n;

console.log("=BigInt=",bigNumber);

//OR
let letBigInt = BigInt('1');
console.log("=bigInt=",letBigInt);