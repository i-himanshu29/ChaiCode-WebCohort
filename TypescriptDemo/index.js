function add(x,y){
    console.log(x+y)
}

function createUser(user){
    console.log(user.firstName,user.lastName,user.emailAddress)
}

add(3,2)
add(3,3)

add('piyush','garg')//x

createUser({
    firstName:'Piyush'
})

// JS - Loosely Typed Language
// This create a problem in the team work 
// first x is number, then it assigned to string and then it is boolean
let x =10
x='Piyush'
x=true

// TS - Tightly Typed Language
// just like u have coded in c++ 
// int x = 10;// you tell type explicitly 