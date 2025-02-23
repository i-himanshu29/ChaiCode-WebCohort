Function.prototype.describe = function(){
    console.log(`Function name is ${this.name}`);
}

function greet(name){// parameter
    return `Hello ${name}`;
}

//greet("Himanshu").describe;//bugs becoz describe fn ko call nhi kiya hai
// greet("Himanshu").describe();

greet.describe('Himanshu') //argument
// greet.describe();// output - Function name is greet
// this keyword always understand context
// Captital F Function is for - kahi par bhi Function bnega toh har function ke saath .describe aayega aaj selike .reduce,.map,etc.

//this indicate - kis function ko bulana hai
// describe ek entity hai..toh wo copy ho kar jayegi masalachai par aur gingerChai par 
//toh kaun si copy ginger ki hai aur kaun si masala ki 
// so kaun sa function bula raha hai pata kaise chalega
// toh jisne bulaya "this" usi ka 
// function masalaChai(){}
// function gingerChai(){}

//toh yaha function ka naam aata hai
// masalaChai.describe() // function naam aata hai
// gingerChai.describe()


greet(); 

greet.describe('hitesh');// argumnet
masalaChai.describe()
/*************** */

function add(a,b){ //function declaration 
    return a+b
}

const substract = function(a,b){ //function  expression
    return a-b
}

const multiply = (a,b) =>a*b // arrow function

// behaviour of JS 

// First class Function

// Number and Function treated as same way in  JS
// Ek function  parameter me paas ho ke ja bhi sakta hai
//aur ekk function function se return ho ke bhi aa sakta hai

function applyOperation(a,b,operation){
    return operation(a,b)
}
// First class Function
const result = applyOperation(5,4, (x,y) => x/y)


//**************************** */

function createCounter(){
    let count = 0;
    return function(){//anynoumus function
        count++;
        return count
    }
}//tiffin concept - 
// mtlb ek function jab bhi return hota hai toh ek tiffin le kar jaat hai
// mtlb child parent ka varible access kar sakta hai 
const counter = createCounter() // function hoga - jo bhi function ke ander hoga sab aaccess hai
console.log(counter());




function onef(){
    let myName = "Himanshu"
}

console.log(myName);// out of scope


//****************************** */

// IIFE******************************
// Immediately innvoked function expression 
// ()() 
(function(){
    console.log("hitesh");
})()

// Eg . Suppose we make function for db Connect 
// so that function is called only one time while connecting
//so their can be used of IIFE