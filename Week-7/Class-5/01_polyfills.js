// arr.map(e => e*2)  // array ke every element ko double kar dega

//PART-1  polyfill of forEach..............................
// forEach -> signature (Array ke har element ke liye cb ko run karta hai)
// if(!Array.prototype.myForEach){
//     Array.prototype.myForEach = function(cb){
//         for(let i=0;i<this.length;i++){// this - calling array
//             cb(this[i],i);
//         }
//     };
// }

// const arr = [1,2,3,4,5];
// arr.myForEach((value,index)=>
//     console.log(`At Index:${index} Value:${value}`)
// );

// PART-2  polyfill of map...............................
// map -> type:Fn(cb)
//     -> for every element cb()
//     -> new array[]

// if(!Array.prototype.myMap){
//     Array.prototype.myMap = function(cb){
//         const result = []
//         for(let i=0;i<this.length;i++){// this - calling array
//             const value = cb(this[i],i);
//             result.push(value);
//         }
//         return result;
//     };
// }

// const arr = [1,2,3,4,5];
// arr.myForEach((value,index)=>
//     console.log(`At Index:${index} Value:${value}`)
// );

// const trippledArray = arr.myMap((e)=>e*3);
// console.log(trippledArray)


// //in real world a lots of checks 
// function sum(a,b){
//     // a and b number hai ya nhi
//     // a and b range me hai ki nhi
//     return a+b;
// }


//PART-3  reduce..................................................


// if(!Array.prototype.myReduce){
//     Array.prototype.myReduce = function(cb,initialValue){
//         let acc=this[0] // acc- ab Tak ki Value || this[0] - first time ki value
//         for(let i=1;i<this.length;i++){// start with 1 because 0 index wala to given hi hai
//             acc = cb(acc,this[i])
//         }
//         return acc;
//     }
// }
// const arr = [1,2,3,4,5];
// const res1 = arr.myReduce((abTakkiValue,currentValue)=>abTakkiValue+currentValue);
// console.log(res1);

// //this one is real.. reduce
// const res = arr.reduce((abTakkiValue,currentValue)=>abTakkiValue+currentValue)
// console.log(res);




// PART-4 Now ..................
// if(!Array.prototype.myReduce){
//     Array.prototype.myReduce = function(cb,initialValue=undefined){
//         if(!initialValue){
//             let acc=this[0] // acc- ab Tak ki Value || this[0] - first time ki value
//         for(let i=1;i<this.length;i++){
//             acc = cb(acc,this[i])
//         }
//         return acc;
//         }
//         let acc = initialValue;
//         for(let i=0;i<this.length;i++){
//             acc = cb(acc,this[i])
//         }
//         return acc;
//     }
// }

// const arr = [1,2,3,4,5];

// const res1 = arr.myReduce((abTakkiValue,currentValue)=>abTakkiValue+currentValue,12);
// console.log("reduce",res1);

// //this one is real.. reduce
// const res = arr.reduce((abTakkiValue,currentValue)=>abTakkiValue+currentValue,12)
// console.log(res);

//This code is repeated - violate DRY principle



//PART-5......................................................................
// Now here write clean code
if(!Array.prototype.myReduce){
    Array.prototype.myReduce = function(cb,initialValue=undefined){
        // let acc=initialValue ?? this[0] // ?? - Nullish coalescing
        //or
        // let acc=initialValue ? initialValue : this[0] ;
        //or
        let acc=initialValue || this[0] ;

        const startIndex = initialValue ? 0 : 1;
        for(let i=startIndex;i<this.length;i++){
            acc = cb(acc,this[i])
        }
        return acc;
    }
}

const arr = [1,2,3,4,5];

const res1 = arr.myReduce((abTakkiValue,currentValue)=>abTakkiValue+currentValue,12);
console.log("reduce",res1);

//this one is real.. reduce
const res = arr.reduce((abTakkiValue,currentValue)=>abTakkiValue+currentValue,12)
console.log(res);





