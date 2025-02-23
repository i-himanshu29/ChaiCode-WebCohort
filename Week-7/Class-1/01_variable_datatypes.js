// DataType in JavaScript

let name="Himanshu"
const pi = 3.14

let Number = 10 // Number
// let number = 10.5 // Number
let text = "Hello World" // String
let isTrue = true  // Boolean
let nothing = null // Object || Null
let undefinedVar = undefined // Undefined
let symbol = Symbol('symbol') // Symbol

console.log('typeof nothing', typeof nothing)
console.log('typeof undefined', typeof undefinedVar);
console.log('typeof symbol', typeof symbol);

// Object
let person = {
    name: 'Himanshu',
    age: 25,
    isMarried: false
}

// let num = "42"
let num = "42abc"
// let convertedNum = Number(num)//standard way
// let convertedNum = +num
let convertedNum = parseInt(num)
console.log('convertedNum', convertedNum)
console.log('typeof convertedNumber',typeof convertedNum)

let str = 42
let convertedString = String(str)

let a = 10
let b = 3

let sum = a + b // 13
let difference = a - b // 7
let product = a * b // 30
let quotient = a / b // 3.3333333333333335
let remainder = a % b // 1
let power = a ** b // 1000

let x = 5;
let y = 10;
console.log('x==y', x==y)
console.log('x===y', x===y)
console.log('x!=y', x!=y) // not equal to  // true
console.log('x>y', x>y)
console.log('x<y', x<y)
console.log('x<=y', x<=y)
console.log('x>=y', x>=y)

console.log('Math.max', Math.max(1, 2, 3, 4, 5))
console.log('Math.min', Math.min(1, 2, 3, 4, 5))
console.log('Math.random', Math.random())
console.log('Math.random...', Math.random()*10)
console.log('Math.floor', Math.floor)
console.log('Math.ceil', Math.ceil)
console.log('Math.round', Math.round)

let firstName = "Hello"
let lastName = "World"
// let fullName = firstName + lastName
let fullName = firstName + " " + lastName

// H.W - write a article about String Methods
let message = "Hello World"
console.log('message.length', message.length)

console.log('message.toLowerCase()', message.toLowerCase())
console.log('message.toUpperCase()', message.toUpperCase())
console.log('message.indexOf', message.indexOf('World'))    
console.log('message.slice', message.slice(0,5));    

let myName = "Himanshu"

let greeting = `Hello ${myName}, from Chaicode`