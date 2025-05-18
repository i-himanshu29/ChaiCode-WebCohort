// let x = 30;
// x = 'piyush'


//******************************************** */
// this give error becoz their is no type 
// let y:number = 30;
// let fname:string = null

// y = ''
// y=true

// y = 40
// fname = 'piyush'
// fname = true


// it can be corrected
// let y:number | boolean | string = 30;
// let fname:string | null | boolean = null

// y = ''
// y=true

// y = 40
// fname = 'piyush'
// fname = true
//This is it about typescript


//************************************************ */
// lets go to some complex things
// function sum(x:number,y:number){
//     return x+y
// }

// function createUsers(){
    
// }

// let z = sum(4,4)

// sum("piyush",3) // give Argument of type 'string' is not assignable to parameter of type 'number'



// *********************************************************
// Now if sum function start returning string after refaturing the code
// function sum(x:number,y:number){
//     return `${x+y}`
// }

// function createUsers(){
    
// }

// let z = sum(4,4)
// // z.toFixed(2)//error

// *************************************************************
// Error of 2 types
// 1.Build time errors  - in typescript you cach your error in build time
// 2. Run time errors - in js every error come in runtime

//************************************** */
// another example - take user as an object
// function sum(x:number , y:number){
//     return `x+y`
// }

// function createUsers(user:{firstname:string; lastname?:string}){
//     user.firstname
// }

// let z = sum(4,3)
// x.toFixed(2)
// createUsers({
//     firstname:'himanshu',
//     // lastname:3//error
    
// })

// **********************************************************

// function sum(x:number , y:number){
//     return x+y
// }

// function createUsers(user:{firstname:string; lastname?:string}){
//     if(user.lastname){
//         // const trimmedLastName = user.lastname?.trim() || ''
//         const trimmedLastName:string = user.lastname.trim() || ''
//     }
// }

// let z = sum(4,3)
// z.toFixed(2)
// createUsers({
//     firstname:'himanshu',
//     // lastname:3//error
    
// })


//****************************************************************** */
// In  Typescript - all about How you define types 

//**************************************************** */
// Humne object pass kar ke dekh liya ab hum interface ke through dekhte hai 

// function sum(x:number , y:number){
//     return x+y
// }

// function createUsers(user:{firstname:string; lastname?:string}){
//     if(user.lastname){
        
//         const trimmedLastName:string = user.lastname.trim() || ''
//     }
// }

// interface User{
//     firstname:string;
//     lastname:string;
//     email:string;
//     profileImageURL ?: string;//optional string
//     //humne ek custom type bna liya
// }

// function updateUser(user:User){
//     user
// }

// //crate a payload(variable)
// // and iss payload a type user hai toh direct updateUser me send kar sakta hu

// const payload: User = {
//     firstname:'',
//     email:'',
//     lastname:''
// }
// updateUser(payload)


// // updateUser({
    
// // })

// let z = sum(4,3)
// z.toFixed(2)
// createUsers({
//     firstname:'himanshu',
//     // lastname:3//error
    
// })


//************************************************************ */

// function doSomething(x:number){

// }
// doSomething(4)
// let num:number = 10
// doSomething(num)