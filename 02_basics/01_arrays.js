let myArr = [1,2,3,4,'satya prakash',true];
console.log(myArr[0]);

let myHeros =new Array("captain","ironman","thor","hulk");

//Arrays methods

myArr.push("swagat");
console.log(myArr);
myArr.pop();
console.log(myArr);

myArr.unshift(1); //inserted at first
myArr.shift(); // remove the first element
console.log(myArr);


//
console.log(myArr.includes(1)); //return true if 1 is present in array
console.log(myArr.indexOf(1)); //return the index of 1 in array if present, otherwise -1
console.log(myArr.lastIndexOf(1)); //return the last index of 1 in array

console.log(myArr.toString()); //convert array to string

console.log(myArr.join(" ")); //join array elements with space

console.log(myArr.slice(1, 3)); //return a new array with elements from index 1 to 2
console.log(myArr.splice(1, 2)); //remove 2 elements from index 1 and return them

console.log(myArr.reverse()); //reverse the array
console.log(myArr.sort()); //sort the array in ascending order
console.log(myArr.sort((a, b) => a - b)); //sort the array numerically in ascending order
console.log(myArr.sort((a, b) => b - a)); //sort the array numerically in descending order  


let arr2 = [1, 2, 3, 6, 5];
let arr3 = arr2.map((value) => value * 2); //multiply each element by 2
console.log(arr3); // [2, 4, 6, 8, 10]


console.log(arr2.slice(1, 3)); //return a new array with elements from index 1 to 2
console.log(arr2); //check the original array after slice
console.log(arr2.splice(2, 4)); //remove 2 elements from index 1 to index 4 and return them
console.log(arr2); //check the original array after splice 