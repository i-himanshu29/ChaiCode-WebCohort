let fname = 'Hitesh'
let fname2 = fname

console.log(fname)
console.log(fname2)

fname2= 'piyush'
console.log(fname)


// another

let p1 = {
    Fname:'Hitesh'
}
let p2 = p1// copy reference
console.log('p2', p2)

p2.Fname= "Himanshu"

console.log('p1', p1)
console.log('p2', p2)

let A1 = {
    fname:"Hitesh",
    lname:'ch',
    address:{
        h:1,
        w:2,
    }
}
let A2 = {
    fname : A1.fname,
    lname : A1.lname,
    // agar bahut saare key value pair hai to 
    // woo saari ki saari value copy ho jayegi
    // ...A1 // spread operator- Shallow Copy
    address:A1.address 
}

A2.fname = "Piyush "
A2.lname = "Garg"
A2.address.h = 'Hacked'

// Shallow Copy(...) Shallow Copy 

console.log('A1', A1)
console.log('A2', A2)

// let Fname = 'Hitesh'
// let Fname2 = fname

// console.log(Fname)

// Fname2= 'piyush'
// console.log(Fname)


