//Create factory
function printChai(){
    console.log("Hello Chai")
}

// another factory - to carry brush
function brush(){
    console.log("hanji , le aaya brush")
}

// to call the factory through manager
printChai();
// to call the another brush factory
brush();


// netaji - mai batunga kitne brush laana hai
function brush(numberOfBrush){
    console.log(`Hanji , le aaya ${numberOfBrush} brush`);
}
brush(4);

// to sum the two number
function sum(num1,num2){
    return num1+num2;
}
sum(1,1)
console.log(sum(1,1));