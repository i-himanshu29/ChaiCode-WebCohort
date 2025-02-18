Function.prototype.describe = function(){
    console.log(`Function name is ${this.name}`);
}

function greet(name){// parameter
    return `Hello ${name}`;
}

// greet("Himanshu").describe();
greet.describe('Himanshu') //argument
// greet.describe();
greet(); 
// function masalaChai(){}
// masalaChai.describe()

/*************** */

function add(a,b){ //function expression
    return a+b
}

const substract = function(a,b){ //function declaration 
    return a-b
}

const multiply = (a,b) =>a*b
function applyOperation(a,b,operation){
    return operation(a,b)
}

const result = applyOperation(5,4, (x,y) => x/y)

//**************************** */

function createCounter(){
    let count = 0;
    return function(){
        count++;
        return count
    }
}//tiffin concept - 
const counter = createCounter() // function hoga - jo bhi function ke ander hoga sab aaccess hai
console.log(counter());





function onef(){
    let myName = "Himanshu"
}

console.log(myName);// out of scope


//****************************** */

// IIFE******************************
(function(){
    console.log("hitesh");
})()

()()