
// Part-1............................

// function test(){
//     console.log("I am inside test functions ");
// }
// test();

//Part-2...................

// test();
// function test(){
//     console.log("I am inside test functions ");
// }

// age = 3000;
// console.log('Age is',age);
// let age = 24;

// GEC - Global Execution Context - 
// 1- Memory Phase
// 2- Code Phase

// Part - 3 ......................
// console.log('Age is', age);
// var age = 25;
// console.log('Age is',age);

//output
// Age is undefined
// Age is 25

// Memory Phase - variable aur function ko sabse phle memory phase me load karenge
// memory phase me sabhi variable ki value undefined hoti hai

// then code phase me execute hoga - aur code line by line execute hoga
// console.log('Age is ', age); ko load karega code phase me aur 
// age - memory phase me execute hoga aur uski value undefined aa jayegi

// code phase me age ki value 25 update kar denge 
// code phase me value assignment ki jaati hai 

// pahle age ki value undefined hogi memory phase me then age = 25 after code phase 

// part-4.......................
// debugger 
// Hoisting - Ek aise technique jisme hum variable ko pahle hi load kar leta hu

// Hoisting in JavaScript is a behavior where variable and function declarations are moved
//  to the top of their containing scope during the compile phase, before the code is executed. 
//  This means you can use variables and functions before they are declared in the code,
//   but it can lead to unexpected results if not used carefully.

// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration
//  of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

// test();
// console.log('Age is',age);
// var age = 25;
// function test(){
//     console.log('Testing')
// }
// console.log('Age is',age);

// //output
// // Testing
// // Age is undefined
// // Age is 25

// part-5......................................
// test();
// console.log('Age is',age);
// var age = 25;
// var test = function (){
//     console.log('Testing')
// }
// console.log('Age is',age);
// //output
// // test is not a function   

// now 

// console.log('Age is',age);
// var age = 25;
// var test = function (){
//     console.log('Testing')
// }
// console.log('Age is',age);
// test();
// //output
// // Age is undefined
// // Age is 25
// // Testing

//Influencer story.
// Interview question - hoist
// console.log('Age is ',age);
// let age = 25;
// // Let- hoist hota hai but it has TDZ
// // var - hoist hota hai
// ReferenceError: Cannot access 'age' before initialization


// console.log('Age is ',age);
// // Dead Zone 
// let age = 25;

// let and const ke case me hoist hota hai but wo use nhi kar sakte
// temporal deadzone- ek dead zone hota hai agar uske neeche variable access karoge to error ayega
// The Temporal Dead Zone (TDZ) is a behavior in JavaScript where variables declared using let and
//  const cannot be accessed before their declaration in the code. The TDZ starts from the beginning
//  of the block scope where the variable is defined and ends when the variable is declared.

// => let hoist hota hai but use access nhi kar sakte because of Temporal deadzone 


// links Erasor ..........

// HTML - https://app.eraser.io/workspace/aqaTC9ma4qmZ9CDuSriU
// Intro to CSS - https://app.eraser.io/workspace/iZgXlFx51QbosAoxqrUQ
// CSS Grids - https://app.eraser.io/workspace/pjz1SKuhQJ43kxOr63Hr
// Polyfill - https://app.eraser.io/workspace/fvOzneJ3s0olaYoetMru
// Object Proptype - https://app.eraser.io/workspace/MSKrHtmZxpvUgZqn5qGq
