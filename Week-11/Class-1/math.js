// function add(x,y){
//     return x+y;
// }
// function sub(x,y){
//     return x-y;
// }
// // exports.add = 'this is add functions';
// exports.piyush = 'this is add functions';

// or called named export......................
// exports.add = function (x,y){
//     return x+y;
// }
// exports.sub = function (x,y){
//     return x-y;
// }

// default export ...............................
// ek file ke andar multiple default export nhi ho sakte
// module.exports = function (){
//     return 'This is from default export';
// };

// so the whole point is simple function bnao aur use 
// module.exports ko ek object bnao aur usme saare fn paas  kardo

const add = function(a,b){
    return a+b;
}
const sub = function(a,b){
    return a-b;
}
// module.exports = {
//     add,
//     sub,
// };
// module.exports = add;// working fine

// but agar mai default export na karu toh ye code fat jayega
exports.add = add;// ye fat raha hai because maine xyz()
//call kiya hai aur ye define nhi hai that's why giving error
// ye named exports hai defalt nhi hai




// function test(obj){
//     obj.add = function(){}
// }

// const o = {

// }
// test(o);
// o.add() 
