let teas = ["masala", "ginger","oolong","orange","rose","lemon"]

console.log('teas[0]', teas[0]);
teas[5]

teas.length // 6

// let h =0; // masala
// let h= 5;//lemon
let h=6 ;// h<=5 ||h<6


// loop - iteration ; i

// variable le kar aoo
//limit btao
// incre/decree

for(let h=0;h<teas.length;h++){
    console.log(`Tea at index ${h} : ${teas[h]}`)
}

for(let h=0;h<teas.length;h++){ // if you remove h++...infinite loop
    console.log(`Tea at index1 ${h} : ${teas[h]}`)
}
for(let h=5;h<teas.length;h++){ // if you remove h++...infinite loop
    console.log(`Tea at index => ${h} : ${teas[h]}`)
}

