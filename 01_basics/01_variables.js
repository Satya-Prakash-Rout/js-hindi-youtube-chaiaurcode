const accountId = 144553;
let accountEmail = "satya@1117";
var accountPassword = "1234";
accountCity ="Bangalore"; // Implicit global variable not recommended
let accountState; // accountState is declared but not initialized, it will be undefined

// accountId = 1; // This will throw an error because accountId is a constant
accountEmail = "satya@1";
console.log("Account Email:", accountEmail);

console.table([ accountId , accountEmail, accountPassword, accountCity, accountState]);

/*not use var in modern JavaScript, prefer let and const*/




