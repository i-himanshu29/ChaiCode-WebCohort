// const obj1 = {
//     fname:'Himanshu',
//     lname:'Garg'
// };

// console.log(obj1);

// Two ways 

// const obj1 = {
//     fname:'Himanshu',
//     lname:'Garg',
//     getFullname:function(){
//         return  `${this.name} ${this.lname}`;
//     }
// };
// const obj2 = {
//     fname:'Himanshu',
//     lname:'Garg'
// };

// console.log(obj1.getFullname());
// console.log(obj2.getFullname());

// ********************************************
const obj1 = {
    fname:'Himanshu',
    lname:'Garg',
    getFullname:function(){
        return  `${this.fname} ${this.lname}`;
    }
};
const obj2 = {
    fname:'Himanshu',
    lname:'Garg',
    getFullname:function(){
        return  `${this.fname} ${this.lname}`;
    }
};

console.log(obj1.getFullname());
console.log(obj2.getFullname());

// Suppose obj2 me getFullname na likha hota toh object me kya aata
//  Toh fir ye __proto__ me check karega 

const obj3 = {
    fname:'Himanshu',
    lname:'Garg',
};

obj3.__proto__= obj1;
// obj1.__proto__ = null
console.log(obj1.getFullname());
console.log(obj3.getFullname());
console.log(obj3.toString())
//called Prototype Chaining
// this will keep going
// __proto__ me jaata rahega until it reaches null 

// voilating DRY Principle 
// then this case - we make a class
// refer class.js file