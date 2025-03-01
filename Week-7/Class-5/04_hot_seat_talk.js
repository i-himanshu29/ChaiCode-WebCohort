
//PART-1....................................................
// const ptaNhi = (fn, delay) => {
//   let myId = null;
//   return (...args) => {
//     setTimeout(()=>{
//         fn(...args)// ye turant hi excute ho jayega
//     },delay);
//   };
// };

//PART-2........................................
// const ptaNhi = (fn, delay) => {
//   let myId = null;
//   return (...args) => {
//     fn(...args)// ye kise queue me nhi jayega , seedha execute ho jayega
//     myId = setTimeout(()=>{
//     },delay);
//   };
// };

//PART-3......................................

// const ptaNhi = (fn, delay) => {
//   let myId = null;
//   return (...args) => {
//     if(myId === null){
//       fn(...args)
//       myId = setTimeout(()=>{
//         myId = null;
//       },delay);
//     }
//   };
// };
// ptaNhi()
// ptaNhi()
// ptaNhi()



//PART-4............................................

// Throttling is a technique used to limit the number of times a function can be executed in a given time frame. 
// It’s extremely useful when dealing with performance-heavy operations, such as resizing the window
//  or scrolling events, where repeated triggers can lead to performance issues.

//Story- Ek chooti si bacchi hai jise choclate bahot pasand hai
// Wo apni mamaa ke paas jaati hai aur she want a choclate
// Mamma says 3 o'clock par milegi 
// Abb wo chahe 1 o'clock par maange , 2o'clock par , chahe wo 2 baar ya 5 baar ya 10 baar maange choclate
// lekin use 3'clock par milega , hum doobara time nhi badhayenge . 

// Called throttling - INTERVIEW QUESTION/
// agar baar baar call karte jaooge toh pichli call ko remove karte jaynge
// Eg. Jaise class 9 bje hi join kar paooge  chaahe jitni baar hi join ki button daba do

// const ptaNhi = (fn, delay) => {
//     let myId = null;
//     return (...args) => {
//       if(myId === null){
//         fn(...args);
//         setTimeout(()=>{
//             myId = null
//         },delay);
//       }
//     };
// };

// ptaNhi()
// ptaNhi()
// ptaNhi()

//concept called throtlling...


//PART-5............................................
const ptaNhi = (fn, delay) => {
  let myId = null;
  console.log(myId)
  // console.log(agrs)//agrs is not defined
  // console.log(arguments)
  // console.log(parameters)//parameters is not defined
  return (...args) => {
    if(myId === null){
      fn(...args);
      myId =setTimeout(()=>{
          myId = null
      },delay);
    }
  };
};

ptaNhi()
ptaNhi()
ptaNhi()




// - These two are very important and most asked in interviews pov (so keep some personal notes)


// js- 2 cheeje aati hai toh aapko js aati hai
// 1.kaun si memory situation me ho - heap ya kaha par ho
// 
//2. jab mai kise code ki baat kar raha hu 1st instane par 2nd instance par toh jo mera call hai
//ya function hai wo kaha baitha hai , kaun si Queue me hoga 
//  kaha se aa raha hoga , kya uska refernce hoga , kya mai usko kuch context de sakta hu 


// test this function how it execute