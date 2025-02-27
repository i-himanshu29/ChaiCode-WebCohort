//Doubt - related to negative indexing in the proxy


// const arr = [1,2,3,4,5,6]

// function enableNegIndexing(targetArr){
//     return new Proxy(targetArr,{
//         set(target,prop,value){
//             target[prop] = `${value}🦜`;
//         },
//         get(target,prop){
//             return target[prop];
//         },
//     });
// }

// enableNegIndexing(arr);// question is this code is perfectlly valid ?
// console.log(enableNegIndexing(arr))

// console.log(`Original arr`,arr);
// arr[1]=111
// console.log(`Updated arr`,arr);




// PART-2 ...................................
// //As of now nothing will happened means my enableNegativeIndexing has no use
// // how can i access let'ssee

// const arr = [1,2,3,4,5,6]

// function enableNegIndexing(targetArr){
//     return new Proxy(targetArr,{
//         set(target,prop,value){
//             target[prop] = `${value}🦜`;
//         },
//         get(target,prop){
//             return target[prop];
//         },
//     });
// }

// // const proxyArr = enableNegIndexing(arr);// question is this code is perfectlly valid ?
// const proxyArr = enableNegIndexing([...arr]);// question is this code is perfectlly valid ?
// console.log(enableNegIndexing(arr))

// console.log(`Original arr`,arr);
// console.log(`ProxyAr Updated arr`,proxyArr);

// proxyArr[1]=111

// console.log(`Updated arr`,arr);
// console.log(`ProxyAr Updated arr`,proxyArr);
// //after updateing the proxyArr the updated Arr and Proxy Arr changed (same output)
// //reason - array are stored in heap memory so target array par address paas hua hai
// //so jo hum get and set me target use kar rahe hai parameter me wo address hai original array ka
// // change original array me kar rhe hai

// // how to prevent from this copy 
// // so enableNegIndexing call karte time arr argument jo paas kar rhe hai 
// // uske badle spread operator paas kar do
// // enableNegIndexing([...arr]);
// // ye karne ke baad copy nhi banegi..
// // Updated arr and proxyArr Update arr are different now  


//PART- 3 ..............................
// Add some twist add new arr at the first index
// array look like 


const arr = [1,[2.1,2.2],3,4,5,6]
// Now the arr[1] = [2.1,2.2]
function enableNegIndexing(targetArr){
    return new Proxy(targetArr,{
        set(target,prop,value){
            target[prop] = `${value}🦜`;
        },
        get(target,prop){
            return target[prop];
        },
    });
}

// const proxyArr = enableNegIndexing(arr);// question is this code is perfectlly valid ?
const proxyArr = enableNegIndexing([...arr]);// question is this code is perfectlly valid ?
console.log(enableNegIndexing(arr))

console.log(`Original arr`,arr);
console.log(`ProxyAr Updated arr`,proxyArr);

proxyArr[1]=111

console.log(`Updated arr`,arr);
console.log(`ProxyAr Updated arr`,proxyArr);
