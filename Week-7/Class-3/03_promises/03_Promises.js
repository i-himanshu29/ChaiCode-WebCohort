// PART-1 .................................................
// // jO line instantlly chalti ha wo - sync
// // jO line instantlly nhi chalti ha wo - async
// // for tracking async task - use Promise


// // A Promise is in one of these states:

// // pending: initial state, neither fulfilled nor rejected.
// // fulfilled: meaning that the operation was completed successfully.
// // rejected: meaning that the operation failed.

// console.log('Hi')//run sync
// const data = fetch('https://api.freeapi.app/api/v1/public/randomproducts')// run async - means it take some time to run
// console.log(data)
// data.then((res)=>console.log('Data agya',res))

// // just for understand better 
// // Promise.prototype.then = function(cb){
// //     // jab bhi value available hogi mai 
// //     cb(value)
// // }

// // Promise.then(userFn => microTaskQueue(callFn))

// // NOTE : async operation ko karne ke liye promises chahiye hota hai
// console.log('Bye')//sync

// PART-2 ........................................................................
//for fullfilled .............
// .then(function)
 


// // console.log('Hi')//run sync
// // const data = fetch('https://apiiii.freeapi.app/api/v1/public/randomproducts')// run async - means it take some time to run
// // console.log(data)
// // data.then(function(){console.log('Lo ji, data aagya')})
// // console.log('Bye')
// // data.catch(function(){console.log('Areey Yaar')})
// output - Areey Yaar

// for rejected wrong api i am calling................
// .catch(function)

// // console.log('Hi')//run sync
// // const data = fetch('https://api.freeapi.app/api/v1/public/randomproducts')// run async - means it take some time to run
// // console.log(data)
// // data.then(function(){console.log('Lo ji, data aagya')})
// // console.log('Bye')
// // data.catch(function(){console.log('Areey Yaar')})
// output - 'Lo ji, data aagya'

//for .....................
// run rejected par
//.finally(function)
// console.log('Hi')//run sync
// const data = fetch('https://api.freeapi.app/api/v1/public/randomproducts')// run async - means it take some time to run
// console.log(data)
// data.then(function(){console.log('Lo ji, data aagya')})
// console.log('Bye')
// data.catch(function(){console.log('Areey Yaar')})
// data.finally(function(){console.log('Mujhe Fadak nhi padhta')})
// // output - 'Mujhe Fadak nhi padhta'


// now i want to use finally with wrong api
console.log('Hi')//run sync
const data = fetch('https://apiiiii.freeapi.app/api/v1/public/randomproducts')// run async - means it take some time to run
console.log(data)
data.then(function(){console.log('Lo ji, data aagya')})
console.log('Bye')
data.catch(function(){console.log('Areey Yaar')})
data.finally(function(){console.log('Mujhe Fadak nhi padhta')})
// output - 'Mujhe Fadak nhi padhta'

// SETTLED - mtlb kise na kise state me aa kar baith gye like (finally)


// PART-3 .................................................................

