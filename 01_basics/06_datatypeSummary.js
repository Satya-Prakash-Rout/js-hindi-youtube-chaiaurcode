// primitive data types

// non-primitive data types
//Array,Objects,Functions

let arr = [1, "satya" , 3, 4, 5];
let obj = {
    name: "satya",
    age: 25,
    isStudent: true
};
let func = function() {
    console.log("Hello, World!");
};

console.table([arr, obj, func]);


// +++++++++++++++++++++++++++++++++++++++++++++

//stack(Primitive) vs heap(Non-Primitive ) memory

let myYoutubename = "satya";
let myName = myYoutubename;
myName = "om";
console.log(myYoutubename); // "satya"

let satya = {
    name: "satya",
    age: 25,
    isStudent: true
};
let om = satya;

om.age = 26;

console.log(satya.age); // 26


