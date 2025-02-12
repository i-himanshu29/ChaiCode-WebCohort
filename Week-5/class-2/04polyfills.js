// .foreach
if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(userFn){
        const originalArr = this// Doubt - depend on context - current object ki taraf point karta hai

        for(let i=0;i<originalArr.length;i++){
            userFn(originalArr[i],i);
        } 
    }
}

// Signature .map 

if(!Array.prototype.myMap){
    Array.prototype.myMap = function(userFn){
        const result = []

        for(let i=0;i<this.length ;i++){
           const value =  userFn(this[i],i);
           result.push(value)
        }
        return result;
    };
}

if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(userFn){
        const result =[]

        for(let i=0;i<this.length;i++){
            if(userFn(this[i])){
                result.push(this[i]);
            }
        }
        return result;
    }
}

const arr = [1,2,3,4,5,6]

//Error: .forEach function does not exists on arr variable
// so that pototype me ye function nhi hai to polyfill likhna padega
// pahle Real Signature ko samjho - No return , function input , value ,index calls my function for every value

// const ret = arr.forEach(function(value,index){
//     console.log(`value at index ${index} is ${value}`);
// });
const ret = arr.myForEach(function(value,index){
    console.log(`My for Each value at index ${index} is ${value}`);
});
console.log('Ret is',ret)


// Error : .map function does not exist on arr variable
// Signature .map 
// Return ?- New Array , Each element Iterate , userFn

// const n= arr.map((e)=>e*2); // e-first parameter((a,b,c,d)=>e*2)

// or 

// const n = arr.map(function(value,index){
//     return 2*value;
// })
const n = arr.myMap(function(value,index){
    return 2*value;
})
//doubt
const n4 = arr.myMap((value,index) => index == 1 ? e*3 : e);
console.log('n4', n4)

const n2= arr.map((e)=>e*3);
console.log(n)
console.log(arr)
console.log(n2)
console.log(arr)


//Filter
//Signature : Return-new array | input:userFn
//agar user ka function true return karta hai to current value ko new array me include kar leta hai

// const n3= arr.filter((e)=>e%2 == 0);
// console.log(n3)
const n3= arr.myFilter((e)=>e%2 == 0);
console.log(n3)