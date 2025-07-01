const score = 400;
console.log(score); 

const balance = new Number( 1000.50); // Number object
console.log(balance);

console.log(balance.toFixed(2)); // Format number to 2 decimal places
console.log(balance.toString().length); // Get length of the number as string
const otherNumber = 1234.676;
console.log(otherNumber.toPrecision(4)); // Format number to 4 significant digits

const hundred = 10000000;
console.log(hundred.toLocaleString('en-IN')); // Format number with commas


//+++++++++++++++++++++++++++++++++++++++++Math++++++++++++++++++++++++++++++++++++
console.log(Math.PI); // Get value of PI
console.log(Math.E); // Get value of E
console.log(Math.round(4.5)); // Round to nearest integer
console.log(Math.ceil(4.1)); // Round up to nearest integer
console.log(Math.floor(4.9)); // Round down to nearest integer
console.log(Math.trunc(4.9)); // Remove decimal part
console.log(Math.sign(-4.9)); // Get sign of number (-1, 0  or 1)
console.log(Math.abs(-4.9)); // Get absolute value
console.log(Math.sqrt(16)); // Get square root
console.log(Math.pow(2, 3)); // Get power of number (2^3)
console.log(Math.min(1, 2, 3, 4, 5)); // Get minimum value
console.log(Math.max(1, 2, 3, 4, 5)); // Get maximum value
console.log((Math.random()*10)+1); // Get random number between

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Get random number between 2 and 
