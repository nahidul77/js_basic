/*
////////////////////////////////////
// Linking a JavaScript File
let js = "amazing";
console.log(40 + 8 + 23 - 10);
////////////////////////////////////
// Values and Variables
console.log("Jonas");
console.log(23);
let firstName = "Matilda"; // camelcase would be naming convention
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;
let person = "jonas";
let PI = 3.1415; //constant name will uppercase

// Descriptive name
let myFirstJob = "Coder";
let myCurrentJob = "Teacher";
let job1 = "programmer";
let job2 = "teacher";
console.log(myFirstJob);

////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);
// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun); // string
let year;
console.log(year);
console.log(typeof year); // undefined
year = 1991;
console.log(typeof year); // number
console.log(typeof null); // object , which is js bug

////////////////////////////////////
// let, const and var
let age = 30;
age = 31;
const birthYear = 1991; // cannot be changed
// birthYear = 1990;
// const job;
var job = 'programmer'; // calling the variable old way.
job = 'teacher'
lastName = 'Schmedtmann'; // it doesnt create a scope rather create global properties.
console.log(lastName);


////////////////////////////////////
// Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);
// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);
// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);


*/