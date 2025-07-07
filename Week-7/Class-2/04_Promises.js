//Part-1.......................Scope

// function xyz(){
//     //create 
//     const abc = 1;
//     //
//     //

//     // destroy here
// }


// //Tell me the scope of below object
// // ans is - Jab tak code chal raha hai
// const obj = {
//     personName:"Himanshu",
//     greet:function(){
//         console.log(`Hello ${this.personName}`);
//     },
// };
// // obj.greet();// its work

// console.log('Hi')
// // setTimeout(obj.greet,5*1000);//undefined
// setTimeout(obj.greet.bind(obj),5*1000); // Hello Himanshu - bind method is used to bind the function of another object means call the new function - thats why we want to context
// // because something code is run on some other context that,s why we use .bind
// console.log('Bye')


//Part-2...........................
// Promise - wada 
// jab kise case me value readily available nhi hai toh uss case me promise return kar dete hai
// If promise not giving the value values - reject  or  if give resolve 

// console.log('Hi')
// setTimeout(()=>console.log('Hello after 2s'),2*1000);
// Promise.resolve().then(()=>console.log('Promise Resolve Hogya'));
// console.log('Bye..')
// // output 
// // Hi
// // Bye..
// // Promise Resolve Hogya
// // Hello after 2s

// Part-3..............................
// if we will set 0 
// console.log('Hi')
// setTimeout(()=>console.log('Hello after 2s'),0);
// Promise.resolve().then(()=>console.log('Promise Resolve Hogya'));
// setTimeout(()=>console.log('Hello after 2s'),0);
// console.log('Bye..')

// // output - 
// // Hi
// // Bye..
// // Promise Resolve Hogya
// // Hello after 2s
// // Hello after 2s

// // why lets see
// // What are the things which run on background 
// // Timer
// // Promise 
// //mtlb aap ke paas two different queue hoti hai
// // 1.microtask queue  - Promises ,small and short lived tasks , Mutation observation are used in this queue
// // 2.Task Queue - setTimeout , event Handler and I/O operation  is used in this queue
// // give the priority to microtask queue over task queue / callback queue
// // means agar microtask queue khaali hai toh hi event loop task queue/ callback queue ko uthayegi


// Part -4 ..................

// //Interview Question
// //Starvation in js - Event loop - callback queue me kuch hona chahiye aur call stack khali ho tabhi callback queue se call stack me jayega
// // Micro Task Queue  

// console.log('Hi');
// setTimeout(()=>console.log('Hello after 0s'),0);
// Promise.resolve().then(()=>console.log('Promise Resolve Hogya'));
// console.log('Bye');
// // output-
// // Hi
// // Bye
// // Promise Resolve Hogya
// // Hello after 0s


// Part-5...................
//Starvation - ek promise exectute hua useke baad doosra daal diya and so on.
// mtlb callback Queue/Task Queue me jo rakhha hai uski baari kabhi ayegi hi nhi
// mtlb jab tak micro task queue khaaali nhi hoga tab tak callback queue pickup hi nhi hogi

// in eng.
// Now imagine this , if micro tasks keep popping up without allowing other
// tasks a chance to run , what happens next? Well , in this scenario , the callback Queue won,t
// get an opportunity to execute its tasks . This situation is what we call the starvation of
// tasks in the callback queue.
// console.log('Hi');
// setTimeout(()=>console.log('Hello after 0s'),0);
// Promise.resolve().then(()=>{
//     console.log('1.Promise resolved');
//     Promise.resolve().then(()=>{
//         console.log('2.Promise Resolve hogya ')
//         Promise.resolve().then(()=>{
//             console.log('3.Promise Resolve Hogya');
//             Promise.resolve().then(()=>{
//                 console.log('4.Promise Resolve Hogya');
//             })
//         })
//     });
// });
// console.log('Bye')



//Part - 6....................
// check on js visiualizer website
// => js visiualizer website open and see the real time task execution

console.log('Hi');
setTimeout(function timeFn(){
    console.log('Hello after 0s');
},0);
Promise.resolve().then(function p1(){
    console.log('1.Promise Resolve Hogya');
    Promise.resolve().then(function p2(){
        console.log('2.Promise Resolve Hogya');
        Promise.resolve().then(function p3(){
            console.log('3.Promise Resolve Hogya');
            Promise.resolve().then(function p4(){
                console.log('4.Promise Resolve Hogya');
            });
        });
    });
});
console.log('Bye bye');
//Interview Question 
// Suppose event Loop ddoes not exist , Create a your own Event Loop whichs works
//Suppose Promises bne hi nhi hai toh create your own Promise which works(promises polyfills)

// interviewer asked from fresher
// know browsers
// Quize app
// todo app
// teach them - understand the interviewer


// const apiResult = fetch('https://jsonplaceholder.typicode.com/todos/1')
