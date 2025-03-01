//PART-1..........................................
// // what to say - return function inside function 

// // Higher order function- Map , Filter , Reduce , ForEach , Find  , Some , Agree
// Takes another function as an argument.
// Returns another function as its result.

// - Tiffin Concept - jo function return hota hai usko capability milti hai ki jo bhi ghar/Scope me ho wo sab pack kar ke le ja sakte ho

// // it is not a clousure - closure is concept to be study

// //lexical scoping

// function ptaNhi(fn,delay){
//     // console.log(args); //args is not defined
//     console.log(arguments); // [Arguments] { '0': 'Himanshu', '1': 2 }
//     let myId;
//     return function(){

//     };
// }

// ptaNhi("Himanshu",2);



//PART-2...................................

// // lexical scope and closure
// // A closure is the combination of a function bundled together (enclosed) 
// // with references to its surrounding state (the lexical environment). 
// // In other words, a closure gives a function access to its outer scope.
// //  In JavaScript, closures are created every time a function is created, at function creation time.

// //OR
// // LexicalScope : The Scope in JavaScript refers to the context or environment in which a variable
// //  or function is declared and can be accessed. 
// //  JavaScript uses function-based scope meaning variables declared inside a 
// //  function are locally scoped in while variables declared outside any function have global scope.


// //closure: a closure allows a function to access variables from its containing 
// // function and even after the containing function has finished executing.
// function ptaNhi(fn,delay){
//     // console.log(args); //args is not defined
//     console.log(arguments); // [Arguments] { '0': 'Himanshu', '1': 2 }
//     let myId;
//     return function(){// but ye function jo paas ho raha hai ye sabhi variable ka refernce le sakta hai

//     };
// }
// myId = 3;//ye par agar myId ko acces karu aur update karna chahu toh ye update nhi hoga
// ptaNhi("Himanshu",2);




// PART-3.........................................................
// function ptaNhi(fn,delay){
//     console.log(arguments);
//     let myId;
//     return function(){



//         //variable (myId) is used -  clearTimeout kar ke ek callback hota hai agar bychance settimeout
//         //  ko clear karna ho ya stop karna ho in between toh hum kar payenge

//         // hawaa me chord nhi sakte kyuki wo bhi memory me gye honge 
//         // toh uss memory ka refernce lene ke kaam aata hai

//         // myId = setTimeout(()=>{
//         //
//         // },delay);


//         // suppose bahut saare hai toh kaise pata hoga kaun sa 
//         // settimeout kiska hai aur kise ko beech me rookna pad gya toh
//         myId = setTimeout(()=>{ 
//             fn()// give them context
//         },delay);
//         // setTimeout(()=>{
            
//         // },delay);
//         // setTimeout(()=>{
            
//         // },delay);
//         // setTimeout(()=>{
            
//         // },delay);
//     };
// }
// myId = 3;

// ptaNhi("Himanshu",2);




// PART-4...................................................
// function ptaNhi(fn,delay){
//     console.log(arguments);
//     let myId;
//     return function(){

//         // suppose bahut saare hai toh kaise pata hoga kaun sa 
//         // settimeout kiska hai aur kise ko beech me rookna pad gya toh
//         myId = setTimeout(()=>{ 
//             fn()//fn toh call kar sakte hai but is context ka gyan nhi hai toh give them context
//             // toh ise .call , .bind ya .apply kare ?
//         },delay);
//         // setTimeout(()=>{
            
//         // },delay);
//         // setTimeout(()=>{
            
//         // },delay);
//         // setTimeout(()=>{
            
//         // },delay);
//     };
// }

// myId = 3;

// ptaNhi("Himanshu",2);



// PART-5 ..........................
// // call - use when we don,t have context and and fn ko call karna ho toh .call 
// //The Call() Method calls the function directly and sets this to the first argument
// //  passed to the call method and if any other sequences of arguments preceding 
// // the first argument are passed to the call method then they are passed as an argument to the function.

// // bind - ek new function return karta hai
// //The Bind() Method creates a new function and when that new function is called 
// // it set this keyword to the first argument which is passed to the bind method, 
// // and if any other sequences of arguments preceding the first argument are passed 
// // to the bind method then they are passed as an argument to the new function when the new function is called.

// //  apply - 
// // The Apply() Method calls the function directly and sets this to the first argument passed to the apply
// //  method and if any other arguments provided as an array are passed to the call method then they are passed
// //  as an argument to the function.

// function ptaNhi(fn,delay){
//     console.log(arguments);
//     let myId;
//     return function(...args){//toh spread args kar deta hu
//         myId = setTimeout(()=>{ 
//             fn.bind(this,args)//kaam toh bind se bhi ho jaata but mai arguments array bhi fn ko dena chahta hu
            
//         },delay);
//     };
// }

// myId = 3;

// ptaNhi("Himanshu",2);





//PART-6..............................................................
// Now the concept introduced after PARt-5 

// // debounce-  disturb kiya toh restart.
// //technique that is used to limit the number of times a function gets executed.
// //  Debouncing is useful when the event is frequently being triggered
// //  in a short interval of time like typing, scrolling, and resizing.
// function ptaNhi(fn,delay){
//     console.log(arguments);
//     let myId;
//     return function(...args){// agr copy of parent function
//         clearTimeout(myId) // after passing the id it remove settimeout into dustbin
//         myId = setTimeout(()=>{
//             // fn.bind(this,args)//ess line me bug hai
//             // fn.call(this,args)
//             fn.apply(this,args)
//         },delay);
//     };
// }

// ptaNhi()
// ptaNhi()
// ptaNhi()
// ptaNhi()//ye nhi likhte




// PART-7...................................................................
// understand with greet function 

// function ptaNhi(fn,delay){
//     console.log(arguments);
//     let myId;
//     return function(...args){// agr copy of parent function
//         clearTimeout(myId) // after passing the id it remove settimeout into dustbin
//         myId = setTimeout(()=>{
//             // fn.bind(this,args)//ess line me bug hai
//             // fn.call(this,args)
//             fn.apply(this,args)
//         },delay);
//     };
// }
// function greet(name){
//     console.log(`Hello ${name}`)
// }


// ptaNhi(greet("hitesh"),3)
// ptaNhi(greet("hitesh"),3)
// ptaNhi(greet("hitesh"),3)
// ptaNhi(greet("hitesh"),3)

// //Expected result - Ek hi baar console.log ayega..
// // Hello hitesh

// // OUTPUT - but ye toh 4 baar print kiya aur turant print kar diya
// // So How to correct ?





//PART-8..........................................................
//1. first delay will be 3000
//
// use arrow function as a callback 


// function ptaNhi(fn,delay){
//     console.log(arguments);
//     let myId;
//     return function(...args){
//         clearTimeout(myId)
//         myId = setTimeout(()=>{
//             // fn.bind(this,args)//ess line me bug hai
//             // fn.call(this,args)
//             fn.apply(this,args)
//         },delay);
//     };
// }
// function greet(name){
//     console.log(`Hello ${name}`)
// }


// ptaNhi(()=>greet("hitesh"),3000)
// ptaNhi(()=>greet("hitesh"),3000)
// ptaNhi(()=>greet("hitesh"),3000)
// ptaNhi(()=>greet("hitesh"),3000)

// // ptaNhi(greet("hitesh"),3000)
// // ptaNhi(greet("hitesh"),3000)
// // ptaNhi(greet("hitesh"),3000)

// // Aab bhi ye nhi chala toh kya karna hoga ?





//PART-9...................................................................
// mtlb aab ise ek variable me store karna padega

function ptaNhi(fn,delay){
    // console.log(arguments);
    let myId;
    return function(...args){
        clearTimeout(myId)
        myId = setTimeout(()=>{
            // fn.bind(this,args)//ess line me bug hai
            // fn.call(this,args)
            fn.apply(this,args)
        },delay);
    };
}
function greet(name){
    console.log(`Hello ${name}`)
}

const sachMeNhiPata = ptaNhi(()=>greet("hitesh"),3000)
sachMeNhiPata();
sachMeNhiPata();
sachMeNhiPata();
sachMeNhiPata();


//Story- Ek chooti si bacchi hai jise choclate bahot pasand hai
// Wo apni mamaa ke paas jaati hai aur she want a choclate
// Mamma says 5min wait karo fir milegi 
// Abhi 3 min hi hue the aur uss chooti bacchi ne doobara se choclate maanga
// toh fir uski counting doobara se start ho jayegi 
// usko choclate tab milegi jab 5min over ho jayega aur wo beech me disturb nhi karegi
// Called Debounce - INTERVIEW QUESTION/
// agar baar baar call karte jaooge toh pichli call ko remove karte jaynge




// remove past request => keep a refernce of it
// fire a new request
// userRequest() => debouncesUserRequest()

// These two are very important and most asked in interviews pov (so keep some personal notes)


