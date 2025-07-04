const marvelHeroes = ["thor", "ironman", "hulk", "spiderman", "captain"];
const dc = ["batman", "superman", "flash", "aquaman", "wonderwoman"];

// marvelHeroes.push(dc)
// console.log(marvelHeroes); // ["thor", "ironman", "hulk", "spiderman", "captain", ["batman", "superman", "flash", "aquaman", "wonderwoman"]]
// console.log(marvelHeroes[5][2]); // "flash" - accessing the nested array

// const allHeros = marvelHeroes.concat(dc); // combines two arrays into one
// console.log(marvelHeroes); // original array is not modified
// console.log(allHeros); // ["thor", "ironman", "hulk", "spiderman", "captain", "batman", "superman

// const all = [...marvelHeroes, ...dc]; // spread operator to combine arrays 
// console.log(all); // ["thor", "ironman", "hulk", "spiderman", "captain", "batman", "superman", "flash", "aquaman", "wonderwoman"]


const nestedArr = [1, 2, [3, 4, [5, 6]]]; // nested array
const flatArr = nestedArr.flat(1); // flattens the array to a depth of 1
console.log(flatArr); // [1, 2, 3, 4, 5, 6]


console.log(Array.isArray("satya"));
console.log(Array.from("satya")); // converts a string to an array of characters
console.log(Array.from({name: "hitesh", age: 20})); // converts an object to an array of key-value pairs


let scr1 = 100;
let scr2 = 200;
let scr3 = 300;

console.log(Array.of(scr1, scr2, scr3)); // creates an array from the arguments passed
