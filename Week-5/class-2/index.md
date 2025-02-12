# Summary of the class-2

## BOOKS PREFERED BY HITESH SIR
-  1. Focus on what matters (start with this)
-  2. Jackie Chan Biography (Recommended)
-  3. Shaolin 
-  4. The Art of Thinking Clearly
-  5. Boundaries = freedom
-  6.  Byran Tracy Success
-  7.  365 Ways to have a Good Day
-  8. Who moved my cheese (Recommended)


## Prototype 

<img src="./Screenshot 2025-02-11 094706.png">

<img src="./Screenshot 2025-02-11 094912.png">

- Browser console me ja kar likho 
const arr = [1,2,3]
arr

- Aur jab arr.__proto__ property ko dekhoge toh method dikhenga (arr. _ _ proto_ _)


- Agar Array.prototype likhoge toh properties dikhega


<img src="./Screenshot 2025-02-11 095540.png">

#### map fn
arr.map(r=>r*2)
- Now the thing is ki humne toh ki .map function define hi nhi kiya upar to map kaha se aa raha hai 
mtlb ye arr. _ _ proto _ _ se aa raha hai waha define hai map function

- aab question ye hai ki waha map function kaise aaya mtlb wo Array ke base class me deine hoga
Array.prototype karoge toh dikhega

- Aab mai kise prototype ke andar ek new property define kar raha hu
Array.prototype.piyush = function(){
    console.log('This is hacked')
}
mtlb maine arrya ke prototype ke andar ek custom property add kar diya Piyush naam se

- aur agar mai ek new array bna kar piyush call karu toh

const arr2 = [1,2,3,4]

arr2.piyush()
// the ans - This is Hacked

this is how prototype inheritence work


- Now if you look 02fun.js file then you understand

- Array ke proto .map function kisene likha ??
toh wo browser ne likha hai 

<img src="./Screenshot 2025-02-11 101359.png">

- .map saare browser par chal raha hai but internet explorer par nhi chal raha kyuki waha define hi nhi hai toh 
- Hum apna ek khud ka .map bna lenge kisse .map access ho paye
toh waha polyfill picture me aata hai

- if(!Array.prototype.fill){
    //Fallback - polyfill - backup function
    Array.function()
}
 
- refer 04poltfill.js file

<img src="./Screenshot 2025-02-11 102140.png">