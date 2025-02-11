// Problem - Create an array containing different type of teas
const teas = ["blacktea","milktea","oolong-tea","Herbal Tea"]

//Problem - Add "Chamomile Tea" to the existing list of teas
teas.push("Chamomile Tea");

// Problem : Remove "Oolang tea" from the list of the tea
const index = teas.indexOf("oolong-tea");
console.log(index);

if(index>-1){
    teas.splice(index,1);
}
console.log(index);

// Problem : Filter the list to only include teas that are caffeinated 
const cafinatedTeas = teas.filter(tea =>tea !== "Herbal Tea");
console.log(cafinatedTeas);

//Problem : Sort the list of teas in alphabetical order
const tea = teas.sort();
console.log(tea);

// Problem : Use a for loop to print each type of tea in the array

for(let i=0;i< teas.length;i++){
    console.log(teas[i]);
}

// Problem  : Use a for loop to count how many teas are caffeinated (excluding "Herbal tea").
let caffinatedMyTeas = 0;
for(let i=0;i<teas.length;i++){
    if(teas[i]!=="Herbal Tea"){
        caffinatedMyTeas++;
    }
}

// Problem : Use a for loop to create a new array with all tea names in uppercase
const uppcaseTeas = [];
for(let i=0;i<teas.length;i++){
    uppcaseTeas.push(teas[i].toUpperCase())
}
console.log(uppcaseTeas)

//Problem : Use a for loop t find the tea name with the most characters.
// ans - pahle ko sabse bada maan lo agar wo longestTea ki length se bada hoga 
// to uskoo longestTea me rakh denge
let longestTea = "";
for(let i=0;i<teas.length;i++){
    if(teas[i].length>longestTea.length){
        longestTea = teas[i];
    }
}
console.log(longestTea)

// problem : Use a for loop to reverse the order of teas in the array
//ans - loop chalo last se aur push karte jao
const reverseArray = []
for(let i=teas.length-1;i>=0;i--){
    reverseArray.push(teas[i]);
}
console.log(reverseArray)