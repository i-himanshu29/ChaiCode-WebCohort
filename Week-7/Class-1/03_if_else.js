function prepareChai(type){
    if(type === 'black tea'){
        console.log('Preparing black tea');
    } else if(type === 'green tea'){
        console.log('Preparing green tea');
    } else if(type === 'masala tea'){
        console.log('Preparing masala tea');
    } else {
        console.log('Preparing normal tea');
    }
}

prepareChai('black tea'); 
prepareChai('Black tea'); // not work
prepareChai('green tea');



//Question -1
// Ek online store mein, agar customer ka total bill amount 1000 se zayada
// hai , toh 10% discount milta hai . Nahi toh , full amount pay karna padta hai.

function calculateTotal(amount){
    //convert string to number

    // basic funtionality
    if(amount >= 1000){
       return amount*0.9;
    } 
    return amount;
}
let finalBill = calculateTotal(1200);
console.log('finalBill', finalBill);// 1080

//Second way of doing this Question -1
//ternary operator
function calculateTotal(amount){
    return amount>100? amount*0.9: amount;
}
let isloading = false
return isLoading ? (true):(false);

//Question -2
//Ek traffic light system mein, agar light red hai toh stop, agar yellow hai
// toh ready aur agar green hai toh go.
function trafficLight(color){
    if(color === 'red'){
        console.log('Stop');
    } else if(color === 'yellow'){
        console.log('Ready');
    } else if(color === 'green'){
        console.log('Go');
    } else {
        console.log('Invalid color');
    }
}

// use switch case

function trafficLightSwitch(color){
    switch(color){
        case 'red':
            console.log('Stop');
            break;
        case 'yellow':
            console.log('Ready');
            break;
        case 'green':
            console.log('Go');
            break;
        default:
            console.log('Invalid color');
    }
}
trafficLightSwitch('red');
console.log('trafficLightSwitch("red")', trafficLightSwitch('red'));    


function checktruthyValue(value){
    if(value){
        console.log('Truthy value');
    } else {
        console.log('Falsy value');
    }
}
checktruthyValue(0);
console.log('checktruthyValue(0)', checktruthyValue(0));    
checktruthyValue(1);
console.log('checktruthyValue(1)', checktruthyValue(1));    
checktruthyValue('');
console.log('checktruthyValue("")', checktruthyValue(''));  
checktruthyValue('Himanshu');
console.log('checktruthyValue("Himanshu")', checktruthyValue('Himanshu'));  
checktruthyValue(null);
console.log('checktruthyValue(null)', checktruthyValue(null));  
checktruthyValue(undefined);
console.log('checktruthyValue(undefined)', checktruthyValue(undefined));    
checktruthyValue(NaN);
console.log('checktruthyValue(NaN)', checktruthyValue(NaN));    
checktruthyValue([]);
console.log('checktruthyValue([])', checktruthyValue([]));

// auth **************
// emphesize on the paranthesis
function login(username, password,loginIp){
    if(username === 'admin' && (password === '1234' || loginIp === '2222')){
        console.log('Login successful');
    } else {
        console.log('Login failed');
    }
}