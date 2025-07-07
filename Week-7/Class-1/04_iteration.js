let saleData = [
    {
        product: "Chai",
        quantity: 2,
        price: 20
    },
    {
        product: "Coffee",
        quantity: 1,
        price: 30
    },
    {
        product: "Tea",
        quantity: 3,
        price: 15
    }
]
// we want total sales

// read reduce function from MDN
// const array1 = [1, 2, 3, 4];
// const initialValue = 0;
// const sumWithInitialValue = [1, 2, 3].reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//      initialValue
//     );  // 6

let totalSales = saleData.reduce((acc, sale) => 0+sale.price, 0)// 0+20+30+15
console.log('totalSales', totalSales)
let totalSales1 = saleData.reduce((acc, sale) => acc+sale.price, 0)// 0+20+30+15
console.log('totalSales1', totalSales1)


//Interview Question - Build you own pipe function using reduce from MDN
const pipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce((acc, fn) => fn(acc), initialValue);

// Building blocks to use for composition
const double = (x) => 2 * x;
const triple = (x) => 3 * x;
const quadruple = (x) => 4 * x;

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

// Usage
multiply6(6); // 36
multiply9(9); // 81
multiply16(16); // 256
multiply24(10); // 240



console.log('totalSales...', totalSales)
"Himanshu".toUpperCase().indexOf('H') // 0, chaining or pipe


//low stock - Items less than 50

let inventory = [
    {
        name: "Chai",
        stock: 50
    },
    {
        name: "Coffee",
        stock: 120
    },
    {
        name: "Tea",
        stock : 30
    }
];
// we want to find low stock items if stock is less than 50
//read filter function from MDN
let lowStockitems1   = inventory.filter((item) => item.stock < 50)
console.log('lowStockitems1', lowStockitems1)


let lowStockitems = inventory.filter((item) => {
    return item.stock < 50
});
console.log('lowStockitems', lowStockitems)
// filter se jo output milta hai wo atleast ek array hota hai- chahe wo empty hi kyu na ho

let userActivity = [
    {
        user: "Himanshu",
        activityCount: 2000
    },
    {
        user: "Rahul",
        activityCount: 5000
    },
    {
        user: "Rohit",
        activityCount: 1000
    }
];
//find most active user....
//read reduce function from MDN
// althought it can be solveable with the map or foreach but the interviewer wants to see the reduce function

// Accumulator 
// the value resulting from the previous call to callbackfn.
//On the first call to callbackfn, its value will be initialValue, 
//if the latter is specified;
//otherwise its value will be the first value in the array || array[0].

// currentValue
// the value of the current element .On the first call , its value is the first value in the array || array[0]
// if initialValue is specified; otherwise, its value is the second value in the array || array[1].
let mostActiveUser = userActivity.reduce((maxUser, user) => 
    user.activityCount >  maxUser.activityCount ?  user :maxUser
);

console.log('mostActiveUser', mostActiveUser)