// Dates
let myDate = new Date(); // current date and time
console.log(myDate); // prints current date and time
console.log(myDate.toString()); // prints current date and time as string
console.log(myDate.toDateString()); // prints current date as string
console.log(myDate.toTimeString()); // prints current time as string
console.log(myDate.toISOString()); // prints current date and time in ISO format

console.log(myDate.toLocaleDateString()); // prints current date in local format
console.log(myDate.toLocaleTimeString()); // prints current time in local format

console.log(myDate.getFullYear()); // prints current year
console.log(myDate.getMonth()); // prints current month (0-11)
console.log(myDate.getDate()); // prints current date (1-31)
console.log(myDate.getDay()); // prints current day of the week (0-6)           

let time = new Date(2012, 11, 20, 3, 0, 0); // year, month (0-11), date, hours, minutes, seconds
console.log(time); // prints 2012-12-20T03:00:00


let myTimeStamp = Date.now(); // current timestamp in milliseconds
console.log(myTimeStamp); // prints current timestamp
console.log(time.getTime()); // time difference between Jan 1, 1970 UTC and time in miliseconds
console.log(Math.floor(myTimeStamp / 1000)); // current timestamp in seconds

//costumize date and time
newDate.toLocalString('default',{
    weekday: 'long', // long, short, narrow
    year: 'numeric', // numeric, 2-digit
    month: 'long', // numeric, 2-digit, long, short, narrow
    day: 'numeric', // numeric, 2-digit
    hour: '2-digit', // numeric, 2-digit
    minute: '2-digit', // numeric, 2-digit
    second: '2-digit', // numeric, 2-digit
    timeZoneName: 'short' // short, long
})


