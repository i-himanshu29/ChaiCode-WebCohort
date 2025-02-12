const arr = [1,2,4]
// arr. 
arr.fill()
console.log('Array.__proto__', Array.__proto__)
const str = "Himanshu"

// str. 
str.length
console.log('str.length', str.length)

const obj = {x:1}
obj.x
//Dot operator object ke properties ko access karne me help karta hai

// how editor/javascript know function - prototype 


// Anonymous attendee 09:02 PM 
// A shallow copy with Object.assign() should not carry over changes made to the original objects after the copy is created, except for nested objects, where the references are copied ye toh gpt bol raha hee
// Mukul Padwal 09:05 PM 
// Haan, Object.assign() sirf shallow copy banata hai, matlab top-level properties alag hoti hain, par agar koi nested object hai, toh uska reference copy hota hai. Isliye agar nested object me change karoge, toh dono jagah reflect hoga.

// Ranjan Pal . 09:05 PM 
// Matlab...array, object, string, number, etc k liye pahyle se kuch function already prototype k andar add kar k rakha hai. Or jab arr.__proto__ ek mother of all prototype hai jab arr.__prototype__ ko bolunga tab wo Array.prototype k andar se wo sab function call karega or khud bhi kuch function add karunga tab...Array.prototype k through arr.__prototype__ iddhar bhi avaibalbe hai or wo use kar pata hu.

// Am i right TA?
// Mukul Padwal 09:07 PM 
// Haan, bilkul sahi samjha!

// shaikh sirajuddin . 09:06 PM 
// what does exactly callback means
// Mukul Padwal 09:07 PM 
// A callback is a function passed as an argument to another function, which gets executed later.



if(!Array.prototype.fill){
    //Fallback - polyfill - backup function
    Array.function()
}
