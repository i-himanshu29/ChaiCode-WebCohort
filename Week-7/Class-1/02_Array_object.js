let chaiTypes = ["Masala Chai", "Green Chai", "Black Chai", "Herbal Chai"]

console.log('chaiTypes[2]', chaiTypes[2])

console.log('Total chai types: ', `Total Chai Types : ${chaiTypes.length}`);

chaiTypes.push("Ice Chai") // add element at the end
console.log('chaiTypes', chaiTypes)

chaiTypes.pop() // remove element from the end
console.log('chaiTypes', chaiTypes)

// let index = chaiTypes.indexOf("Green Chai")
let index = chaiTypes.indexOf("Green-Chai")
console.log('index', index)
if(index !== -1) {
    chaiTypes.splice(index, 1) // remove element from the middle
}
console.log('chaiTypes', chaiTypes)

chaiTypes.forEach((chai, index) => { 
    console.log(`Chai Type ${index+1}: ${chai}`)
})
console.log('chaiTypes', chaiTypes)

let moreChaiTypes = ["Oolong Chai", "Bubble Chai", "Cold Chai"]    

let allChaiTypes = chaiTypes.concat(moreChaiTypes)  // merge two arrays
console.log('allChaiTypes', allChaiTypes)

let newChaiTypes = [...chaiTypes,"Chamomile Chai"] // merge two arrays using spread operator
console.log('newChaiTypes', newChaiTypes)

//Object

let chaiRecipe = {
    name: "Masala Chai",
    ingredients: {
        teaLeaves:"Assam Tea",
        milk:"Full Cream Milk",
        sugar:"Brown Sugar",
        spices:["Daalchini", "Elaichi", "Laung", "Kali Mirch"]
    },
    instruction: "Boil water, add tea leaves, spices, sugar and milk. Boil for 5 minutes and strain it."
}

console.log('chaiRecipe.ingredients.spices[1]', chaiRecipe.ingredients.spices[1])

let updatedChaiRecipe = {   
    ...chaiRecipe,
    instruction: "Boil water, add tea leaves, spices, sugar and milk. Boil for 5 minutes and strain it. Serve hot with love",
};
console.log('updatedChaiRecipe', updatedChaiRecipe)

let {name, ingredients} = chaiRecipe // object destructuring
// let {name, myingredients} = chaiRecipe // object destructuring
let [firstChai, secondChai] = chaiTypes // array destructuring
const [value,setValue] = useState('') // react // useState hook
// value - data kya hai
// setValue - data ko update kaise karna hai

console.log('name', ingredients)
//  console.log(' ingredients name..', myingredients) // undefined
console.log('firstChai', firstChai)