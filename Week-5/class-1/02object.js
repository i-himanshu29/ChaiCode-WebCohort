//Create object - key :value pair
const person = {
    x:10, //number
    firstName:"Himanshu", //string
    lastName:'Maurya',
    hobbies:['coding','gym'], // array
    hasGf:false, //boolean
    hadGf:true,
    isMarried:false,
    hasCrush:Infinity,
    getFullName:function(){ // function
        return 'Himanshu Maurya'
    },
    address:{ // object
        hno:39, //number
        street:2,
        state:'Haryana',
        country:'India' //string
    }
}

console.log(person.x)
console.log(person.lastName)
console.log(person.hobbies)
console.log(person.address.state) // object me chhejo ko group kar sakte hai
console.log(person.address.xyyzzz) // undefined

const remote = {
    color:'black',
    brand:'xyz',
    dimension:{
        height:1,
        width:2,
    },
    turnOff:function(){

    },
    volumeUp:function(){
        
    }
}