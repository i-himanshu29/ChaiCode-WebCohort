// let arr = [1,2,3,4,5,6,7,8,9,10]
// // we want if i write arr[-1] then mujhe result chahiye 
// console.log(arr[-1]);// undefined - kyuki nhi pata -ve index kya hai

// the question is ki kuh aisa kiya jaa sakta hai jisse -ve indexing aye 
// ways -
// 1.design a function
// negativeIndex(arr,-1)

// interview Question ............
// PART-1 ............................................
// this question is asked to know that you know the concept of proxy

// The Proxy object allows you to create an object that can be used in place 
// of the original object, but which may redefine fundamental Object 
// operations like getting, setting, and defining properties. Proxy objects are 
// commonly used to log property accesses, validate, format, or sanitize inputs, and so on.

// const user ={
//     name:"Himanshu",
//     age:24,
//     password:"123"
// }
// // agar ye obj DB me hota aur usee maangte toh sapse pahle aap password ko chupate ki ye access nhi hona chahiye
// // tooh mai chahunga ki user.name || user.age  and jab user.password kar ke access karu toh access mat karne dena- exact ise situation me proxy use hota hai

// //It is not neccessary to paas a new object in proxy
// // const proxyUser = user
// // // proxyUser.password bhi access kar sakta hu jo ki problem hai 
// // // toh isko rokne ka  tarika nikaalna chah raha hu

// // mujhe control karna hai kya cheej get kar pau kya set kar pau
// const proxyUser = new Proxy(user ,{ // user is target
//     get(target,prop){
//         console.log(target)
//         console.log(prop)
//         return target[prop]// same jaise .(dot) laga kar property access karte hai
//     }
// } )
// console.log(proxyUser.password)//123
// console.log(proxyUser.name)//Himanshu

// // Now you deduse what target refering and what property refering
// // target - object 




// PART - 2....................................
// Now koi aisa code likh sakta hu jisse password na access ho paye 
// const user ={
//     name:"Himanshu",
//     age:24,
//     password:"123"
// }
// const proxyUser = new Proxy(user ,{ // user is target
//     get(target,prop){
//         console.log(target)
//         console.log(prop)
//         if(prop === "password"){
//             throw new Error("Access Denied");
//         }
//         return target[prop]// same jaise .(dot) laga kar property access karte hai
//     }
// } )
// console.log(proxyUser.password)// now not accessible

// PART - 3 ......................................
//Value Set bhi kar sakte hai same as get
// const user ={
//     name:"Himanshu",
//     age:24,
//     password:"123"
// }
// const proxyUser = new Proxy(user ,{ // user is target
//     get(target,prop){
//         console.log(prop)
//         if(prop === "password"){
//             throw new Error("Access Denied");
//         }
//         return target[prop]// same jaise .(dot) laga kar property access karte hai
//     },
//     set(target,prop,user){}
// } );
// console.log(proxyUser.password)// now not accessible

// NOTE-  .length is the property which is proxied 


// PART-4 ...........................................
// function negativeIndex(arr){
//     return new Proxy(arr,{
//         get(target,prop){
//             const index = Number(prop)
//             return target[index]
//         }
//     })
// }

// this is default behaviour now enable the negative index


// function negativeIndex(arr){
//     return new Proxy(arr,{
//         get(target,prop){
//             const index = Number(prop)
//             if(index<0){
//                 return target[target.length + index]
//             }
//             return target[index]
//         }
//     })
// }


// Now one more step interviewer ask
// Why set || implement set
let arr = [1,2,3,4,5,6,7,8,9,10]
function negativeIndex(arr){
    return new Proxy(arr,{
        get(target,prop){
            const index = Number(prop)
            if(index<0){
                return target[target.length + index]
            }
            return target[index]
        },
        set(target , prop , value){
            const index = Number(prop)
            if(index<0){
                target[target.length+index ] = value
            }else{
                target[index] = value
            }
            return true
        }
    })
}

let newArr = negativeIndex(arr);
console.log(arr[-1]);//undefined // jo value array me denge wo hi prop me milegi
console.log(newArr[-1]);//10

// The Proxy object allows you to create an object that can be used in place 
// of the original object, but which may redefine fundamental Object 
// operations like getting, setting, and defining properties. Proxy objects are 
// commonly used to log property accesses, validate, format, or sanitize inputs, and so on.

newArr[-1] = 22;
console.log(newArr);//[1, 2, 3, 4,  5,6, 7, 8, 9, 22]
console.log(arr);//[1, 2, 3, 4,  5,6, 7, 8, 9, 22]

//interviewer ask 
// shallow copy and deep copy
// write polyfill of proxy
//Debauncing
//Throttling

