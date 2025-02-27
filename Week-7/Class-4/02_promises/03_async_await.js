//PART-1..............................................
// Promises -> Pending,fullfilled , rejected
//   -> .then(), .catch() , .finally()
// promise bhi callback par hi kaam karta hai toh ye bhi callback hell me ja sakta hai
// then waha par async await aata hai

// async-await is Syntactic Sugar
// it internally works as Promises
// Async code ko sync way me run karne me help karte hai

// bahut saari async line ko sync me run karna

// multiple async code is running in sync fashion
readFileWithPromise('./Hello.txt','utf-8')
    .then(contents => writeFileWithPromise('./backup.txt',contents))
    .then(()=>unlinkWithPromise('./Hello.txt'))
    .catch(e => console.log('Error',e))
    .finally(()=>console.log('All Done'))

const fileContents = await readFileWithPromise('./Hello.txt','utf-8');
// await lagane par promise ko wahi resolve karega aur jo value aap ko .then()
// me milna tha wo yahi de dega
//internally 
// readFileWithPromise('./Hello.txt','utf-8');


await writeFileWithPromise('./backup.txt',contents);
await unlinkWithPromise('./Hello.txt');

console.log('starting program')



//PART-2.................................................................
// agar uper ka code run karunga toh error ayega
// toh ise ek function me wrap karna padta hai


// function doTasks(){
//     const fileContents = await readFileWithPromise('./Hello.txt','utf-8');
//     await writeFileWithPromise('./backup.txt',contents);
//     await unlinkWithPromise('./Hello.txt');
//     console.log('starting program')
// }

// if you want to use that fn then you must have to use async keyword

readFileWithPromise('./Hello.txt','utf-8')
    .then(contents => writeFileWithPromise('./backup.txt',contents))
    .then(()=>unlinkWithPromise('./Hello.txt'))
    .catch(e => console.log('Error',e))
    .finally(()=>console.log('All Done'))
//----or ------Aura +9999999999-----------syntactic sugar--------
async function doTasks(){
    const fileContents = await readFileWithPromise('./Hello.txt','utf-8');
    await writeFileWithPromise('./backup.txt',contents);
    await unlinkWithPromise('./Hello.txt');
}

doTasks().then(()=>console.log('All Done'))
//the above code likha toh line by line hi hai but ye async code ki tarah hi run karega

console.log('starting program')




// PART-3....................................................................................
// fileContents me result  promise fullfilled hone ke baar ayega but error bhi toh aa sakti hai
// toh we can use try and catch block
async function doTasks(){//blocking code
    try{
        const fileContents = await readFileWithPromise('./Hello.txt','utf-8');
        await writeFileWithPromise('./backup.txt',contents);
        await unlinkWithPromise('./Hello.txt');
    }catch(err){
        console.log('Error',e)
    }finally{
        console.log('All done')
    }
}

//nonblocking...
doTasks().then(()=>console.log('All Done!'))




// PART-4......................................................................

// Now i want ki file ko delete karne se pahle 10s ka wait kare

function wait(seconds){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(),seconds*1000);
    });
}

async function doTasks(){//blocking code
    try{
        const fileContents = await readFileWithPromise('./Hello.txt','utf-8');
        await writeFileWithPromise('./backup.txt',contents);
        //wait 10s
        await wait(10)
        await unlinkWithPromise('./Hello.txt');
    }catch(err){
        console.log('Error',e)
    }finally{
        console.log('All done')
    }
}

doTasks().then(()=>console.log('All Done!'))