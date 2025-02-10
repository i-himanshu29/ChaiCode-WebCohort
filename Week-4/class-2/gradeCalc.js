//Grade calculation
// 90 <= A
// 80 <= B
// 70 <= C 
// 60 <= D 
//F

// make fatory and that retun the grade character 

// factory tamplate 
let marks;
function calculateGrade(marks){
    if(marks >= 90){
        return "A";
    }else if(marks >= 80){
        return "B";
    }else if(marks >= 70){
        return "C";
    }else if(marks >= 60){
        return "D";
    }else{
        return "F";
    }
}

let grade = calculateGrade(70);
console.log(grade);

console.log(calculateGrade(86))