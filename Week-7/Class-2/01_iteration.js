let expenses = [
    {description:"Groceries",amount:50, category:"Food"},
    {description:"Rent",amount:1000, category:"Utilites"},
    {description:"Dinner",amount:30, category:"Food"},
    {description:"Car Insurance",amount:100, category:"Utilites"},
];

// let expenseReport = [];
let expenseReport = expenses.reduce((report,expense)=>{
     report[expense.category] = report[expense.category] + expense.amount ;

     // or below one is Dynamic
    //  report[expense.category] = (report[expense.category] || 0) + expense.amount;
     return report;
},
{Food:0,Utilites:0}
);
console.log("Expences Report", expenseReport);

// Task-2  ------------------
// Give me that tasks which is not completed yet and sort them.

let tasks = [
	{ description: "Write report", completed: false, priority: 2},
	{ description: "Send email", completed: true, priority: 3},
	{ description: "Prepare presentation", completed: false, priority: 1},
];

// approache- filter and sort 

let pendingSortedTasks = tasks
    .filter((task)=>!task.completed)
    .sort((a,b)=>a.priority-b.priority);

console.log("Pending Sorted Tasks", pendingSortedTasks);


// Task-3  ------------------
let movieRatings= [
    {title:"The Dark Knight", rating: [4,5,3]},
    {title:"The Shawshank Redemption", rating: [5,5,5]},
    {title:"The Godfather", rating: [4,5,4]},
];
//Find Average Rating of each movie
// let averageRating = movieRatings.map((movie)=>{
//     let sum = movie.rating.reduce((total,rating)=>total+rating,0);
//     return {title:movie.title, average:sum/movie.rating.length};
// });
// or 
// let averageRating = movieRatings.map((movie)=>{
//     let sum = movie.rating.reduce((total,rating)=>total+rating,0);
//     let average = sum/movie.rating.length;
//     return {title:movie.title, averageRating:average.toFixed(2)};
// });

// console.log("Average Rating", averageRating);

// or It is Incomplete so Complete it 
let averageRatings = movieRatings.map((movie)=>{
    let sum = movie.rating.reduce((total,rating)=>total+rating,0);
    let average = sum/movie.rating.length;
    // movie.ratings = average;
    // return movie;           
    return {title:movie.title, ratings:average.toFixed(2)};//ratings-it mutate the original array
});

console.log("Average Ratings", averageRatings);
console.log("Movie Ratings", movieRatings);