// PART-1.............................................
// function wait(seconds){
//     return new Promise((resolve,reject)=>{// Promise is class - how know ? becoz P capital
//         setTimeout(()=>resolve(),seconds*1000);
//     });
// }

// wait(10)
//     .then(()=>console.log(`Promise Resolve after 10s`))
//     .catch(()=>console.log(`Reject after 10s`))
//     .finally(()=>console.log(`Mai to har baar chalega`))



//Part-2............................
// Promise ek class hai
// object bna sakte hai promise class ka
// toh hum as a perameter callback paas karte hai
// function wait(seconds){
//     const p = new Promise((resolve,reject)=>{   // Promise is class - how know ? becoz P capital
//         setTimeout(()=>resolve(),seconds*1000);
//     });
//     return p;
// }

// wait(5)
//     .then(()=>console.log(`Promise Resolve after 10s`))
//     .catch(()=>console.log(`Reject after 10s`))
//     .finally(()=>console.log(`Mai to har baar chalega`))



// jaise hi ek promise ki object bnaate ho ek exector fun do
// executer fn ke paas resolve and ek reject 
// resolve ko call karne par
// - promise fullfill and
// -jitne bhi .then function voh run kar jaata h

//reject ko call karne par
//- promise reject ho jaatah hai
// sabhi catch functions call

// finally toh har baar karna hi hai


// class myPromise{
//     constructor(executorFn){
//         this._state='pending';// _ means internal change
//         this._successCallbacks=[];
//         this._errorCallbacks = [];
//         this._finallyCallbacks =[];
//         this._valueCallbacks = [];
//         executorFn(
//             this.resolverFunction.bind(this),
//             this.rejectorFunction.bind(this)
//         );
//     }
//     then(cb){
//         this._successCallbacks.push(cb);
//         return this; 
//     }
//     catch(cb){
//         this._errorCallbacks.push(cb);
//         return this;
//     }
//     finally(cb){
//         this._finallyCallbacks.push(cb);
//         return this;
//     }
//     resolverFunction(){
//         console.log()
//         this._state = 'fullfilled'
//         this._successCallbacks.forEach((cb)=>cb());
//         this._finallyCallbacks.forEach((cb)=>cb());
//     }

//     rejectorFunction(){
//         this._state = 'rejected'
//         this._errorCallbacks.forEach((cb)=>cb());
//         this._finallyCallbacks.forEach((cb)=>cb());
//     }
// }

// let arr = [1,2,3,4,5];
// function wait(seconds){
//    const p = new myPromise((resolve,reject)=>{// Promise is class - how know ? becoz P capital
//         setTimeout(()=>resolve(),seconds*1000);
//         // setTimeout(()=>reject(),seconds*1000);
//     });
//     return p;
// }
// // wait().then
// wait()

// wait(5)
//     .then((e)=>console.log(`Promise Resolve after 10s`,e))
//     .catch(()=>console.log(`Reject after 10s`))
//     .finally(()=>console.log(`Mai to har baar chalega`))


// PART-3 .....................................................


// class myPromise{
//     constructor(executorFn){
//         this._state='pending';// _ means internal change
//         this._successCallbacks=[];
//         this._errorCallbacks = [];
//         this._finallyCallbacks =[];
//         this._valueCallbacks = [];
//         executorFn(
//             this.resolverFunction.bind(this),
//             this.rejectorFunction.bind(this)
//         );
//     }
//     then(cb){
//         this._successCallbacks.push(cb);
//         return this; 
//     }
//     catch(cb){
//         this._errorCallbacks.push(cb);
//         return this;
//     }
//     finally(cb){
//         this._finallyCallbacks.push(cb);
//         return this;
//     }
//     resolverFunction(value){
//         console.log()
//         this._state = 'fullfilled'
//         this._successCallbacks.forEach((cb)=>cb(value));
//         this._finallyCallbacks.forEach((cb)=>cb(value));
//     }

//     rejectorFunction(err){
//         this._state = 'rejected'
//         this._errorCallbacks.forEach((cb)=>cb(err));
//         this._finallyCallbacks.forEach((cb)=>cb(err));
//     }
// }

// let arr = [1,2,3,4,5];
// function wait(seconds){
//    const p = new myPromise((resolve,reject)=>{// Promise is class - how know ? becoz P capital
//         setTimeout(()=>resolve('Hahaha'),seconds*1000);
//         // setTimeout(()=>reject(),seconds*1000);
//     });
//     return p;
// }
// // wait().then
// wait()

// wait(5)
//     .then((e)=>console.log(`Promise Resolve after 10s`,e))
//     .catch(()=>console.log(`Reject after 10s`))
//     .finally(()=>console.log(`Mai to har baar chalega`))


// PART-4.............................................

// class myPromise{
//     constructor(executorFn){
//         this._state='pending';// _ means internal change
//         this._successCallbacks=[];
//         this._errorCallbacks = [];
//         this._finallyCallbacks =[];
//         this._valueCallbacks = [];
//         executorFn(
//             this.resolverFunction.bind(this),
//             this.rejectorFunction.bind(this)
//         );
//     }
//     then(cb){
//         this._successCallbacks.push(cb);
//         return this; 
//     }
//     catch(cb){
//         this._errorCallbacks.push(cb);
//         return this;
//     }
//     finally(cb){
//         this._finallyCallbacks.push(cb);
//         return this;
//     }
//     resolverFunction(value){
//         console.log(`Fullfilling Promise , Running ${this._successCallbacks.length} callbacks`)
//         this._state = 'fullfilled'
//         this._successCallbacks.forEach((cb)=>cb(value));
//         this._finallyCallbacks.forEach((cb)=>cb(value));
//     }

//     rejectorFunction(err){
//         this._state = 'rejected'
//         this._errorCallbacks.forEach((cb)=>cb(err));
//         this._finallyCallbacks.forEach((cb)=>cb(err));
//     }
// }

// let arr = [1,2,3,4,5];
// function wait(seconds){
//    const p = new myPromise((resolve,reject)=>{// Promise is class - how know ? becoz P capital
//         setTimeout(()=>resolve('Hahaha'),0*1000); // seconds*1000
//         // setTimeout(()=>reject(),seconds*1000);
//     });
//     return p;
// }
// // wait().then
// const p = wait(5); // yahi promise resolve ho gya

// console.log("registering promise")
// p.then((e)=>console.log(`V1 Promise Resolve after 10s`,e))
//     .catch(()=>console.log(`V1 Reject after 10s`))
//     .finally(()=>console.log(`V1 Mai to har baar chalega`))

// p.then((e)=>console.log(`V2 Promise Resolve after 10s`,e))
//     .catch(()=>console.log(`V2 Reject after 10s`))
//     .finally(()=>console.log(`V2 Mai to har baar chalega`))



// PART-5 ........................................................

class MyPromise {
    constructor(executorFn) {
      this._state = 'pending';
      this._successCallbacks = [];
      this._errorCallbacks = [];
      this._finallyCallbacks = [];
  
      this.value = undefined;
  
      executorFn(
        this.resolverFunction.bind(this),
        this.rejectorFunction.bind(this)
      );
    }
  
    then(cb) {
      if (this._state == 'fulfilled') {
        console.log(`Apka promise toh pehle hi pura hogya, Run hi kar deta hu`);
        cb(this.value);
        return this;
      }
  
      this._successCallbacks.push(cb);
      return this;
    }
  
    catch(cb) {
      if (this._state == 'rejected') {
        console.log(`Apka promise toh pehle hi reject hogya, Run hi kar deta hu`);
        cb();
        return this;
      }
      this._errorCallbacks.push(cb);
      return this;
    }
  
    finally(cb) {
      if (this._state !== 'pending') {
        cb();
        return this;
      }
      this._finallyCallbacks.push(cb);
      return this;
    }
  
    resolverFunction(value) {
      console.log(
        `Fullfilling Promise, Running ${this._successCallbacks.length} callbacks`
      );
      this.value = value;
      this._state = 'fulfilled';
      this._successCallbacks.forEach((cb) => cb(value));
      this._finallyCallbacks.forEach((cb) => cb());
    }
  
    rejectorFunction(err) {
      this._state = 'rejected';
      this._errorCallbacks.forEach((cb) => cb(err));
      this._finallyCallbacks.forEach((cb) => cb());
    }
  }
  
  function wait(seconds) {
    const p = new MyPromise((resolve, reject) => {
      resolve('Hahaha');
    });
    return p;
  }
  
  const p = wait(5);
  
  console.log('Registering Callbacks');
  
  p.then((e) => console.log(`V1 Promise Resolved After 5 sec`, e))
    .catch(() => console.log(` V1Rejected after 5 sec`))
    .finally(() => console.log(` V1 Mei toh harr baar chalunga`));
  
  p.then((e) => console.log(`V2 Promise Resolved After 5 sec`, e))
    .catch(() => console.log(`V2 Rejected after 5 sec`))
    .finally(() => console.log(`V2 Mei toh harr baar chalunga`));
  
// // This is asked in walmart in sde-2 position