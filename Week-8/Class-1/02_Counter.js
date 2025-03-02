//  I should have a function increment()
// on call of the function it should increment the number
// and return the current count

// console.log(increment()) 1
// console.log(increment()) 2
// console.log(increment()) 3
// console.log(increment()) 4

//PART-1.Basic approach.............................
// let count =0;
// function increment(){
//     count++;
//     return count;
// }

// console.log(increment());
// console.log(increment());
// console.log(increment());


// count = 100// someone change the value in between then this code not work properly
// means count ko koi bhi change kar sakta hai because it is in global scope

// console.log(increment());
// console.log(increment());




//PART-2.......................................
// Suppose 3 developer works together and 
// requirement is to maintain their count individually
// so that any dev not able to change the variable
// function increment(){
//     let count = 0;
//     return function(){
//         count++;
//     };
// }
// console.log(increment()());
// console.log(increment()());
// //this approach was good
// // mtlb har baar count ko fir se 0 kar de rhe ho but ye nhi karna
// // if i store the function into some variable then their is no need to afraid
// // that somebody change it.





//PART-3........................................

// function createCounter(){
//     let count = 0;
//     // closure Function : Function binded by its lexical scope
//     return function(){
//         count++;
//         return count;
//     };
// }

// const x = createCounter();
// const y = createCounter();

// console.log(x());
// console.log(x());
// console.log(x());
// console.log(y());
// console.log(y());
// console.log(x());
// console.log(y());






// PART-4 Doubt of part 3 why it is not started with 0 after one function call..................................

// // function test(){
// //     let x =10;
// //     x++;
// //     // return 'Piyush'
// //     return x;
// // }
// // test()
// // test()
// // console.log(test())

// function test(){
//     let x =10;

// //     function increment(){
// //         x++;
// //         return x;
// //     }
// //    return increment;

// // this above increment function is written as
// // function closure
//       return function (){
//         x++;
//         return x;
//       };
// }


// // test()//test ka return type function hoga
// // test()
// // console.log(test())

// // const f = test();//10
// // f()//11
// // f()//12
// // f()//13

// // LET SAY 
// const f = test();//10
// const g = test(); // g fir se 10 se suru hoga
// f()//11
// f()//12
// f()//13
// g()//11
// g()//12


// PART-5.........with parameter...............................
// function createCounter(stepSize = 1, initialValue=0){
//     return function(){
//         initialValue = initialValue+stepSize;
//         return initialValue;
//     };
// }

// // const i1 = createCounter(2,0);
// const i1 = createCounter(3,10);
// console.log(i1())
// console.log(i1())
// console.log(i1())
// console.log(i1())





//PART-6... with debouncing.................................
function createCounter(stepSize = 1, initialValue=0){
    return function(){
        initialValue = initialValue+stepSize;
        return initialValue;
    };
}

// const i1 = createCounter(2,0);
const i1 = createCounter(3,10);
console.log(i1())
console.log(i1())
console.log(i1())
console.log(i1())

function createDebouncedVersion(fn,delay){
    let timerId = null;
    return function(){
        clearTimeout(timerId)
        timerId = setTimeout(fn,delay)
    }
}

function apiCall(){}

const apiCallDebounce = createDebouncedVersion(apiCall,5*1000)
apiCallDebounce()


// PART-6 Drawback of Closure - Memory Leak ........................................

function createInstance(){
    let store={
        value:100,
    };//100MB
    return function(){
        console.log(store);
    }
}

// createInstance()()
const logger = createInstance();

logger()
logger()
logger()
// iske baad kya mujhe store chahiye?

// agr aapko pata hai is particular time ke baad mai 
// logger run nhi karunga toh usko null kardo
logger = null;// refernce khatam toh garbage collector remove kar dega
// 1million LOC - run 20 Day


//This null things is very risky because agar koi use kar diya null ke baad
// toh code fat jayega
// logger();

//DOM 
// let e = document.getElementById()
// e.remove()//DOM se remove
// e=null // e ka refernce bhi null kardo memory se