// PART:1 ****************************************

// const fs = require('fs');

// setTimeout(()=>console.log("set timeout"),0);
// setImmediate(()=>console.log("set Immidaite"));

// console.log('Hello')




// PART-2 **********************************************************
// const fs = require('fs');

// setTimeout(()=>console.log("set timeout"),0);
// setImmediate(()=>console.log("set Immidaite"));




// PART-3 **********************************************

// const fs = require('fs');

// setTimeout(()=>console.log("set timeout"),0);
// setImmediate(()=>console.log("set Immidaite"));

// fs.readFile('sample.txt','utf-8',function (err,data){
//     setTimeout(()=>console.log('set Timeout inside FS'),0);
//     setImmediate(()=>console.log('Immediate inside FS 1'))
// });

// console.log('Hello')



// PART-4 ****************************************************************

// const fs = require('fs');
// const crypto = require('crypto')
// setTimeout(()=>console.log("set timeout"),0);
// setImmediate(()=>console.log("set Immidaite"));

// fs.readFile('sample.txt','utf-8',function (err,data){
//     setTimeout(()=>console.log('set Timeout inside FS'),0);
//     setImmediate(()=>console.log('Immediate inside FS 1'))

//     const start = Date.now()
//     crypto.pbkdf2('password','salt1',100000, 1024 , 'sha512',(err,data)=>{
//         console.log(`[${Date.now() - start}ms] : password 1 hashed`);
//     });

//     crypto.pbkdf2('password','salt1',100000, 1024 , 'sha512',(err,data)=>{
//         console.log(`[${Date.now() - start}ms] : password 2 hashed`);
//     });

//     crypto.pbkdf2('password','salt1',100000, 1024 , 'sha512',(err,data)=>{
//         console.log(`[${Date.now() - start}ms] : password 3 hashed`);
//     });

//     crypto.pbkdf2('password','salt1',100000, 1024 , 'sha512',(err,data)=>{
//         console.log(`[${Date.now() - start}ms] : password 4 hashed`);
//     });

// });

// console.log('Hello')

// all the time are same for every password 

// what happend if one more is come 

// PART-5******************************************************


// const fs = require('fs');
// const crypto = require('crypto')
// setTimeout(()=>console.log("set timeout"),0);
// setImmediate(()=>console.log("set Immidaite"));

// fs.readFile('sample.txt','utf-8',function (err,data){
//     setTimeout(()=>console.log('set Timeout inside FS'),0);
//     setImmediate(()=>console.log('Immediate inside FS 1'))

//     const start = Date.now()
//     crypto.pbkdf2('password','salt1',100000, 1024 , 'sha512',(err,data)=>{
//         console.log(`[${Date.now() - start}ms] : password 1 hashed`);
//     });

//     crypto.pbkdf2('password','salt1',100000, 1024 , 'sha512',(err,data)=>{
//         console.log(`[${Date.now() - start}ms] : password 2 hashed`);
//     });

//     crypto.pbkdf2('password','salt1',100000, 1024 , 'sha512',(err,data)=>{
//         console.log(`[${Date.now() - start}ms] : password 3 hashed`);
//     });

//     crypto.pbkdf2('password','salt1',100000, 1024 , 'sha512',(err,data)=>{
//         console.log(`[${Date.now() - start}ms] : password 4 hashed`);
//     });

//     crypto.pbkdf2('password','salt1',100000, 1024 , 'sha512',(err,data)=>{
//         console.log(`[${Date.now() - start}ms] : password 5 hashed`);
//     });

// });

// console.log('Hello')
// Why the last crypto takes the more time ?? because all 4 are busy
// means all 4 are busy fist if anyone free then it take the action on 5th callback
// agar ek aur le ayenge toh bhi wo 5th wale ke barabar time lega mtlb 5th and 6th are run parallelly

// Now the question is kya hum workers ka size increase decrease kar sakte hai ?



// PART -6*********************************************************************************


const fs = require('fs');
const crypto = require('crypto')
setTimeout(()=>console.log("set timeout"),0);
setImmediate(()=>console.log("set Immidaite"));

// process.env.UV_THREADPOOL_SIZE = 1;
// process.env.UV_THREADPOOL_SIZE = 2;
process.env.UV_THREADPOOL_SIZE = 10;
// means we have only one workers as of now  , lets try it

fs.readFile('sample.txt','utf-8',function (err,data){
    setTimeout(()=>console.log('set Timeout inside FS'),0);
    setImmediate(()=>console.log('Immediate inside FS 1'))

    const start = Date.now()
    crypto.pbkdf2('password','salt1',100000, 1024 , 'sha512',(err,data)=>{
        console.log(`[${Date.now() - start}ms] : password 1 hashed`);
    });

    crypto.pbkdf2('password','salt1',100000, 1024 , 'sha512',(err,data)=>{
        console.log(`[${Date.now() - start}ms] : password 2 hashed`);
    });

    crypto.pbkdf2('password','salt1',100000, 1024 , 'sha512',(err,data)=>{
        console.log(`[${Date.now() - start}ms] : password 3 hashed`);
    });

    crypto.pbkdf2('password','salt1',100000, 1024 , 'sha512',(err,data)=>{
        console.log(`[${Date.now() - start}ms] : password 4 hashed`);
    });

    crypto.pbkdf2('password','salt1',100000, 1024 , 'sha512',(err,data)=>{
        console.log(`[${Date.now() - start}ms] : password 5 hashed`);
    });

    crypto.pbkdf2('password','salt1',100000, 1024 , 'sha512',(err,data)=>{
        console.log(`[${Date.now() - start}ms] : password 6 hashed`);
    });

});

console.log('Hello')

// So , Nodejs use the resources efficently and for the CPU
// intensive tasks it uses thread pool so it act as hybrid
// that's the reason Nodejs is so powerfull run time environment for the backend