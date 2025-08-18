
// PART-1.............................................
// let fname = 'Piyush';

// function sayName(){
//     console.log(`Inside sayName Fn the value of fname is`,fname);
// }
// console.log('Value of Fname is',fname);
// sayName();
// fname variable is accessible because it is in thie scope



// PART-2 .................................................
// let fname = 'Piyush';

// let fname = 'Hitesh';

// console.log('Value of Fname is',fname);

// // Cannot redeclare block-scoped variable 'fname'.
// // ye nhi chalega becoz same scope me doo baar same variable declare kar diya hai 




// PART-3.......................................
// let fname = 'Piyush';
// function sayName(){
//     //fname is fn ke scope me exist karta hai
//     // toh yaha sayName fn me fname nhi bna sakta
//     fname ="Hitesh";//x
//     console.log('In sayName',fname);// fname accessible
// }
// console.log('Value of fname is',fname);
// sayName();

// //Output-
// // Value of fname is Piyush
// // In sayName Hitesh

// // but output me toh In sayName Hitesh aa raha hai mtlb sayName wala variable chala hai
// // mtlb variable redeclare hua 
// GLobal Execution Context - 
// 1> memory phase 
// fname = undefined 
// variable and function are their
// 2> code phase
// fname="Piyush"
// console.log are their

// and Function Execution Context
//1> memory phase 
//fname - undefined

// 2> code phase 
// fname="Hitesh"

//FEC - ab delete ho jayega




// PART-3.................................................


//Function ke andar jab variable ko read karte ho toh sbse pahle
// - memory phase(local ) me check karta hai
// - Scope of parent  me check karega
// - Parent ke parent me pahunch jayega check karne

//Lexical Scope:
// Lexical Scope in js is a convention that determines how 
//variable are accessible in a block of code

//In js , a closure is a function that has access to the variables
// of its outer function, even after the outer function has finished executing

// A functtion returning a function with its lexical scope binded is known as closure fn.

// How It Lexical Scope Work ?

// - It's based on the physical location of variables and code blocks in the source code.
// - It's determined when the code is created , not when it's run.
// - Inner functions can use variables from the outer functions they are inside of

// let fname = 'Piyush';
// function sayName(){
//     let lname = 'Garg';

//     function inner(){
//         console.log('Fname is',fname,'lname is',lname);
//         return;
//     }

//     inner();
// }
// console.log('Value of Fname is',fname);
// sayName();




// PART-4.......................................................


let fname = 'Piyush';
function sayName(){
    let lname = 'Garg';

    function inner(){
        console.log('Fname is',fname,'lname is',lname);
        return;
    }

    inner();
}
console.log('Value of Fname is',fname);
sayName();



function test(){
    let obj = {value:10}// obj stored in heap //10 MB
    return function(){
        console.log(obj)
    }
}
// 0MB
// test() // 10MB

const innerFn = test() // 10MB
//10MB
innerFn()
innerFn()
