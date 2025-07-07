function greet(name){
    console.log(`Hello ${name}`);
}

greet("Himanshu"); // Hello Himanshu
greet("Jane"); // Hello Jane

let globalVar = "I am Global Variable";

function modifyGlobalVar(){
    globalVar = "I am Modified Global Variable";
    let blockScopedVar = "I am Block Scoped Variable";
    console.log(blockScopedVar);
}

modifyGlobalVar();

//IIFE - Immediately Invoked Function Expression - Executed once 
let config1 = function(){ }()
// or 
//   (()=>{})()
//or
let config = function(){
    console.log("I am Config");
}
config();
//or
let config2 = function(){
    let settings = {
        theme:"dark"
    }
    return settings;
}()

// ....
// this - always refers to the object that is executing the current function
//Interview Question 
//Person -2 call ho but properties person 1 ki aye
let person1={
    name:"Himanshu",
    greet:function(){
        console.log(`Hello ${this.name}`);
    }
}
// interview question
let person2 = {
    name:"Hitesh"
}

person1.greet.call(person2); // Hello Hitesh // call method is used to call the function of another object
console.log(person1.greet); // [Function: greet]
console.log(person1.greet()); // Hello Himanshu // undefined
// don,t use bind method
// person1.greet.bind(person2); // Hello Hitesh // bind method is used to bind the function of another object means call the new function

const bindGreet = person1.greet.bind(person2);
console.log(bindGreet); // [Function: bound greet]
console.log(bindGreet()); // undefined

person1.greet.apply(person2); // Hello Hitesh // apply method is used to call the function of another object    
console.log(person1.greet); // [Function: greet]
console.log(person1.greet()); // Hello Himanshu // undefined


//************************************ */
// let person3 ={
//     name:"Himanshu",
//     greet:function(){
//         console.log(`Hello ${this.name}`);
//     }
// }
// let person3 ={
//     personName:"Himanshu",
//     greet:function(){
//         console.log(`Hello ${personName}`);
//     },
// };
// person3.greet(); // Hello undefined - because personName is not defined in the greet function and not providing context to the personName (this keyword)

let person3 ={
    personName:"Himanshu",
    greet:function(){
        console.log(`Hello ${this.personName}`);
    },
};
person3.greet(); // Hello Himanshu - because personName is defined in the greet function and providing context to the personName (this keyword)


let person4 ={
    personName:"Hitesh"
}
person3.greet()// ye chalega  but mujhe context change nhi hoga
person3.greet.call({personName:"Mukul"});// call is used to change the context
person3.greet.call(person4);



