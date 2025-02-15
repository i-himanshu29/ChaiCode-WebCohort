# Summary of the class

# Objects -
- Real world entites ko represent karta hai
- which has some properties and functionalities/methods
- properties - Color , Weight
- Methods - Action , Functions

- Method basically objects ke context me kaha jata hai
- function standalone hota hai without object

- Javascript - {} , class 


- JavaScript is unplaned becoz its history is different from other 
- JavaScript is made for cross plateform
- To make the attractive browser
-
- After nodejs implemented ,  JavaScript is a Standalone language
- You can do anything using javaScript like web, engine , etc.
- Backword Compatibility

- Object can be made from two methods
- First
const obj = {
    //prop , method
}
It has some problem if you want to make two object which has the same structure then u have to written all the properties one by one
- Kuch toh mistake ho sakti hai while creating two object
- person1= {fname ,lname , age}
- person2= {dfname, lname , age}
toh hum structure same nhi rakh sakte then 
- ES6 aya aur class ke saath

- where you can define schema in a class
- class Person(){
    ...Schema
}
const p1 = new Person()
const p2 = new Person()

- Ab ye object ka structue same hoga schema ka 
- mtlb single source of truth bnn gya

- While creating object we use Heap memory
- new keyword tell that we want the memory location in heap

- p1 and p2 variable stack me hoga
- aur stack me address hoga

## classes
- Blueprint
- make a object of class
- class ke object ko construct kar sakta hu
- toh Constructor chahiye hota hai

class Person {

}
- then make a default coonstructor 

constructor(){

}

class Person{
    constructor(){

    }
}
- Ab iska object ban sakta hai
const p = new Person()

- Perameterized Constructor
- Object banne ke liye kuch input chahiye
- class Person{
    constructor(pehlaName){
        this.xyz = pehlaName
    }
}
const p = new Person('Piyush')
p.xyz


## Why in JS everything is in object
- do in browser
const obj = {}
obj.__proto__
obj.__proto__.__proto__

const arr = [1,2,3,4,5];
arr.__proto__ // array properties
arr.__proto__.__proto__ //object

const s = "Piyush"
s.__proto__ // string Properties
s.__proto__.__proto__ //object

- JavaScript me Object ke ander se hi nhikala hai
- mtlb sabka last prototype object hi hota  hai

- BluePrint - Prototype
- Object - __proto__ blueprint ke proto ka

const p1 = new Person()
p1.__proto__= Person.prototype

## Inheritance Prototype
class A{
    funInsideA(){
        
    }
}
class B{
    funInsideB(){

    }
}
A.funInsideA();
B.funInsideB();

B.funInsideA() // How
How can you access

B.__proto__ : A;

class B extend A{
    funInsideB()
}
B.funInsideA();
- No Duplicate constructor

- Interview Question - Inheritance without using extends keyword

## Function
- function name(){

}

let x = function(){

}

const y=()=>{

}
- Arrow function
const something = (x,y) => {
    return x+y
}
const something = (x,y) =>  x+y

- with arrow function
arr.map((val)=>val*3)

- without arrow
arr.map(function(val){
    return val*3
})



## Q&A 
- new keyword is used to create an instance of an object from a constructor function or class
- new keyword in JavaScript allocates memory on the heap for the new object instance

