const fs = require('fs');

fs.writeFile('./test.txt','Hello World',()=>{});


// function execute(exports ,require , module , __filename , __dirname){

// }

// function require(moduleId){
//     //...
//     return;
// }

// execute(
//     exports , require
// );

console.log(__filename);// same file
console.log(__dirname);//same dir 

//import export toh pahle nhi tha node me to require use karte the
const math = require('./math');
console.log('math..', math)
console.log('math:', math.piyush)

// for second 

// console.log(math.add(3,9));
// function __require(id){
//     //...agar id . se suru hua to user ki directory me code ko dhundo
//     //..by default khud ke internal module me ddundo
// }

// for default wala case
// console.log("yoo",math());

// or 

const xyz = require('./math');
console.log("ji",xyz())

// in the fist addition fn we say only add right
// but now we can also write as 

console.log("haan ji sum kar raha hu " ,xyz(2,5));

// require('fs')- Node Built in 
// require('./math') - current dir mei math name ki file ko 
// require('../math') - Ek dir bahar jao aur parent mei math file ko

function __require(id){
    //...agar id . se suru hua to user ki directory me code ko dhundo
    //.. khud ke internal module me ddundo
    // .. agr toh mill gya toh well and good
    // .. nahi toh node_module mei dhundho
    // .. user ko error throw karo
}