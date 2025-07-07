// console.log('Hello from Js')

// const a = 1;
// const b =2;
// console.log('Sum', a+b);
// console.log('Bye Bye')

//SETTIMEOUT - used to delay anything

// point-1..............................
// // setTimeout call after 5s

// // setTimeout(function(){
// //     console.log('Hello from setTimeout and i am delayed')
// // },1000*5); // run  after how much second - 5s || takes in milisecond

// output--- after 5s
// Hello from setTimeout and i am delayed


//point-2...................................
// // We want output instantly but aisa nhi hua

// console.log('Hello from Js')
// setTimeout(()=>{
//     console.log('i am delayed')
// },0);//but aisa nhi hua
// console.log('Bye Bye')

// // i thought output look like
// // Hello from js
// // i am delayed
// // bye Bye

// // but the actual output is 
// // Hello from Js
// // Bye Bye
// // i am delayed

//point-3................................
// // i want to call function after 2s

// const obj = {
//     personName:"Himanshu",
//     greet:function(){
//         console.log(`Hello ${this.personName}`);
//     },
// };

// console.log('Hello from Js')
// setTimeout(obj.greet,2*1000);// call after 2s
// console.log('Bye Bye')

// //Expected output is
// // Hello from Js
// // Bye Bye
// // Hello Himanshu

// // actual is 
// // Hello from Js
// // Bye Bye
// // Hello undefined


//point-4.......
// // browser ( timer in browser ) -> callback queue ->  Event loop -> call stack
// // call stack - it waits for nothing
// // there is no such thing like setTimeout in js 
// //setTimeout - It is part of browser
// console.log("Hello from js");
// // setTimeout(()=>console.log('A 2 S'),0)

// // we can write such code which can go in call stack after 2s from browser
// // background timer run inside browser
// // just hitting the 2s then it put the console.log in call Stack
// setTimeout(()=>console.log('A 2 S'),2*1000)// Min wait time is 2s
// console.log("Bye Bye");

// // for putting/pushing console.log into call stack there is a call back queue , through which console.log('A 2 S') pass
// // after that browser's work finish
// // then after call back queue it push into call stack throught event loop
// // Event loop - callback queue me kuch hona chahiye aur call stack khali ho tabhi callback queue se call stack me jayega

// //output is
// // Hello from JS
// // Bye Bye
// // A 2 S 

// // Now if we want to run console.log immediately
// // setTimeout(()=>console.log('A 2 S'),0) // but also it give same output as above 


// Point-5......... Interview Question
// console.log('A 2 S') kitne second baad run hoga 
console.log("Hello from js");
setTimeout(()=>console.log('A 2 S'),10*1000)// Min wait time is 10s  - max has no garuntee
console.log("Bye Bye Bye");
// while(true){
//     console.log('I am inside loop') // aab hamara call stack kabhi free hi nhi hoga
// }

console.log('Bye Bye')
console.log('Bye Bye')
console.log('Bye Bye')
// 100 Millions(suppose it takes 3h to execute)
// means it runs after 3 hour when the callstack are free




