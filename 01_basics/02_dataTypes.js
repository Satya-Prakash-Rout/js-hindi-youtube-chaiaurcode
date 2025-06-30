"use steict"; // treat all JS code as newer version

// alert("Hello World!"); // we are using nodejs , not browser

//primitive data types - 7 types
let name = "John"; // string
let age = 30; // number
let isLoggedIn = true; // boolean
let und; // undefined
let temperature = null; // null
let sym = Symbol("symbol"); // symbol , unique identifier
let bigIntValue = BigInt(1234567890123456789012345678901234567890n); // bigint

console.table([name, age, isLoggedIn, und, temperature, sym, bigIntValue]);


console.log(typeof name); // string
console.log(typeof null); // object (this is a known bug in JS)
