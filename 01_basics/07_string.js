const name = "hitesh";
const repoCount = 50;

console.log(`${name} has ${repoCount} repositories`); // Template literals

const gameName = new String("Hades");
console.log(gameName); // String object

console.log(gameName.length); // Length of the string object

console.log(gameName.toUpperCase()); // Convert to uppercase
console.log(gameName.toLowerCase()); // Convert to lowercase
console.log(gameName.charAt(0)); // Get character at index 0

console.log(gameName.indexOf("d")); // Find index of character 'd'
console.log(gameName.lastIndexOf("e")); // Find last index of character 'e'

console.log(gameName.slice(0, 3)); // Slice the string from index 0 to 3 , 3 is not included
console.log(gameName.slice(-3)); // Slice the last 3 characters
console.log(gameName.substring(0, 3)); // Similar to slice but does not accept negative indices

console.log(gameName.split("a")); // Split the string by character  'a'

console.log(gameName.replace("Hades", "God of War")); // Replace 'Hades' with 'God of War'

console.log(gameName.includes("des")); // Check if 'des' is present in the string
console.log(gameName.startsWith("Had")); // Check if the string starts with 'Had'
console.log(gameName.endsWith("es")); // Check if the string ends with 'es'

console.log(gameName.trim()); // Trim whitespace from both ends of the string

console.log(gameName.repeat(2)); // Repeat the string twice

const url = "https://www.exam%20ple.com";
console.log(url.replace('%20', "_")); // Replace '%20' with _ using regex
