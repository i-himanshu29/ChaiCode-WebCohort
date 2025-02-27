// Part-1..................................................

// // Read the file

// const fs = require('fs');
// console.log('Starting Program')

// const contents = fs.readFileSync('./Hello.txt','utf-8')//utf-8 = eng lang
// console.log('File Reading Success',contents);

// console.log('End of Program');
// // the above code is sync
// // Blocking code - run as syncronus but when u run on server jab tak user ka pahle ke code complete nhi  honge tab tak 
// //kise dusre ke user ki request ko run nhi kiya jayega







// Part-2........................................................
// const fs = require('fs');
// console.log('Starting Program');

// fs.readFile('./Hello.txt','utf-8',function (err,contents){
//     if(err){
//         console.log('Error in the file reading',err);
//     }else{
//         console.log('File Reading Success',contents);
//     }
// });

// const result = sum(2,5);
// console.log("Result" , result);
// console.log('End of Program');
// // Earlier every developers relay on callback 
// // because of not present promise

// function sum(a,b){
//     return a+b;
// }

// // above code is blocking - sync





// Part -3 .....................................................
//Here you understand how async js || non-blocking js works withou promises
// its work with the help of callbacks concept
// every function jo bhi async ki tarh kaam karta tha uska last parameter callback hota tha
// callback me ek standard hota tha ki , pahla parameter error ka hoga and second parameter actual data ka hoga
//old way 
// getWeather('city',(temp)=>{
//     // 
// })


// const fs = require('fs');
// console.log('Starting Program');

// // fs.readFile('./Hello.txt','utf-8',function (err,contents){
// //     if(err){
// //         console.log('Error in the file reading',err);
// //     }else{
// //         console.log('File Reading Success',contents);
// //     }
// // });

// sum(2,5,(result) => {
//     console.log('Result is',result);
// });
// console.log('End of Program');
// //10 Million

// function sum(a,b,cb){
//     setTimeout(()=>{
//         cb(a+b);
//     },5*1000);
// }
// // Now the above code async






//PART-4 ...........................................................
// But callback case me ek problem tha 

// 1.Read the contents of the file from Hello.txt 
// 2.Then create a new file named as backup.txt
// 3.Copy the contents of hello file to backup file
// 4.delete the Hello file 

// if this code write in blocking - sync code so write in the following way 

// const file = fs.readFileSync(Hello)
// fs.createFile(backup)
// fs.writeFile(backup,file)
// fs.delete(Hello)
// suppose all line takes 10s to execute then this code will execute in 40s 

// Now code it into Non-blocking code - async


// const fs = require('fs');
// console.log('Starting Program');

// fs.readFile('./Hello.txt','utf-8',function (err,contents){
//     if(err){
//         console.log('Error in the file reading',err);
//     }else{
//         console.log('File Reading Success',contents);
//         fs.writeFile('backup.txt',contents,function(err){
//             if(err){
//                 console.log(`Error in writing backup.txt`,err);
//             }else{
//                 fs.unlink('./Hello.txt',function(e){
//                     if(e){
//                         console.log('Error deleting file',e);
//                     }else{
//                         console.log('File delete success');
//                     }
//                 });
//             }
//         });
//     }
// });


// after executing the above code the Hello.txt will delete and the 
//content of this file is copy to the backup.txt file which is create same time

//In the above code the callbacks is called one to another or sa that nested callbacks
//because ek ka output doosre ka input tha that's why hame callbacks nesting karn padi

// that concept is called callback hell 

// Callback hell - is a situation in JavaScript where callbacks are nested within other callbacks,
//  making the code hard to read and debug. It's also known as the "pyramid of doom" because the indentation resembles a pyramid on its side. 

// the problem is readablity
// interview question - callback hell





// PART - 5....................................................................................
// another package of node js


// const fs = require('fs');
// const fsv2 = require('fs/promises');

// console.log('Starting Program');

// // const result = fsv2.readFile('./Hello.txt','utf-8')// no return becoz it is a promise
// // result.then((s)=>{})

// //--------------------------Modern code-------------------------
// // this one is more readable 
// // no callback-hell
// // both code is -async
// fsv2
//     .readFile('./Hello.txt','utf-8')
//     .then((contents)=>fsv2.writelFile('backup.txt',contents))
//     .then(()=>fsv2.unlink('./Hello.txt'))
//     .catch((e)=>console.log('Error',e));


// //--------------OR--------legacy code--------------------------
// fs.readFile('./Hello.txt','utf-8',function (err,contents){
//     if(err){
//         console.log('Error in the file reading',err);
//     }else{
//         console.log('File Reading Success',contents);
//         fs.writeFile('backup.txt',contents,function(err){
//             if(err){
//                 console.log(`Error in writing backup.txt`,err);
//             }else{
//                 fs.unlink('./Hello.txt',function(e){
//                     if(e){
//                         console.log('Error deleting file',e);
//                     }else{
//                         console.log('File delete success');
//                     }
//                 });
//             }
//         });
//     }
// });







//PART-6 .....................................................
// legacy Code to Modern Promises
// Now the question is if nodejs walo ne promises na bnaya hota to kya hum
// apna custom promises bna paate
// CB Supported -> Custom Promises

//lagac code use three function 
// 1.readFile
// 2.WriteFile
// 3.unlink

// now convert it into Promisified Version
// First function - readFile-----------
const fs = require('fs');

// function readFileWithPromise(filepath,encoding){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(filepath,encoding,(err,contents)=>{ // paas 3 things in read file - filepath , encoding and callback (callback- error and contents)
//             // resolve(contents);
//             resolve('Piyush')// signal do-user ke then functions ko execute kar do
//             // jaise hi resolve karta hu jo bhi is promise ko use kar raha hai uska .then  call ho jayegi
//         });
//     });
// }

function readFileWithPromise(filepath,encoding){
    return new Promise((resolve,reject)=>{
        fs.readFile(filepath,encoding,(err,contents)=>{ // paas 3 things in read file - filepath , encoding and callback (callback- error and contents)
           if(err){
            reject(err);
           }else{
            resolve(contents)
           }
        });
    });
}
// const result = readFileWithPromise('./Hello.txt','utf-8');
// result.then((e)=>{}).catch((e)=>{});
// console.log('starting program')
// aap ne ek legacy code ko promisified code me convert kar diya

// second function -writeFile------------------------
function writeFileWithPromise(filepath,contents){
    return new Promise((resolve,reject)=>{
        fs.writeFile('backup.txt',contents,function(err){
            if(err){
                reject(err)
            }else{
                resolve();// resolve with nothing
            }
        })
    })
}
// const result = readFileWithPromise('./Hello.txt','utf-8');
// result.then((e)=>{}).catch((e)=>{});
// console.log('starting program')


// third function - unlink ----------------------------
function unlinkWithPromise(filepath){
    return new Promise((resolve,reject)=>{
        fs.unlink(filepath, function(err){
            if(err){
                reject(err)
            }else{
                resolve();// resolve with nothing
            }
        });
    });
}
readFileWithPromise('./Hello.txt','utf-8')
    .then(contents => writeFileWithPromise('./backup.txt',contents))
    .then(()=>unlinkWithPromise('./Hello.txt'))
    .catch(e => console.log('Error',e))
    .finally(()=>console.log('All Done'))


console.log('starting program')

// that technique called Promisification 