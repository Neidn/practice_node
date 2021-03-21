const today = new Date();
const date1 = new Date(2020, 12-1, 19);
const date2 = new Date(2020, 11, 19);
const date3 = new Date(2020, 11, 19, 18);
const date4 = new Date(2020, 11, 19, 18, 50);
const date5 = new Date(2020, 11, 19, 18, 50, 30);

console.log(today.toLocaleString());
console.log(date1.toLocaleString());
console.log(date2.toLocaleString());
console.log(date3.toLocaleString());
console.log(date4.toLocaleString());
console.log(date5.toLocaleString());