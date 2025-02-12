
// Problem : Create an object representing a type of tea with properties for name, type and caffeine content.

const teas = {
    name:"Lemon Tea",
    type:"Green",
    Caffine:"low",
}

// Problem : Access and print the name and type properties of the tea object.
console.log('teas.name', teas.name)
console.log('teas["type"]', teas["type"]);// jab object me Gap ho toh 

//Problem : Add a new origin to the tea object
teas.origin="China"

//Problem : Change the caffeine level of the tea object to "Medium"
teas.Caffine="Medium"

//Problem: Remove the type object from the tea object
delete teas.type


//Proobelm:Check if the tea object has a property origin
console.log("origin" in teas);

//Problem : Use a " for...in " loop to print all properties of the tea object
for(let key in teas){
    console.log(key+": "+teas[key]);// you can use backtick also
}

// Problem : Create a nested object representing different types of teas and their properties

const myTeas = {
    greentea :{
        name:"Green Tea",
        cups:{
            one:"1",
            two:"2",
        }
    },
    backtea:{
        name:"Black tea"
    }
}

//Problem : create a copy of the tea object

const teaCopy = {...teas} // shallow copy - first level of keys ko copy karta hai - agar nested object hua to usko as a reference hi rakhega . ki value change hogi to shallow copy
const teaCopy1 = {...myTeas}
teaCopy1.greentea.cups.one = 4;
console.log(myTeas); // value change means - shallow copy

const anotherCopy = teas //na ye shallow copy hai na h deep its -  reference

//Agar kise object ko test karna chahte ho ki deep copy bana raha hai ki shallow copy
// toh - value change kar ke dekh lo pata chal jayega
console.log('teaCopy1..', teaCopy1)

// console.log('teaCopy', teaCopy)
// console.log('myTea', myTeas)


//Problem : Add  a custom method describe to the tea object that return description string



// Problem : Merge two objects representing different teas into one.