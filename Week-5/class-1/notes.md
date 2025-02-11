# Summary of class -1 

## Primitive 
- jo language out of the box support karte hai - array
- array me element - sequential ki tarah rakhte hai
- object - key value pair ki tarah rakhte hai
- To make object - use {}

##  Non - Primitive
- Jo hum khud design karte hai
- Stack , linkedlist , graph etc.


## Data Structure- Memory
<img src="./Screenshot 2025-02-10 210942.png">

- agar memory dynamically chahiye toh Heap ka use karte hai

<img src="./Screenshot 2025-02-10 210942.png">

let p2 = p1

<img src="./Screenshot 2025-02-10 212058.png">

- jitne bhi primitive type hai wo stack me rahti hai
- kise bhi variable agar find karoge to wo stack me hi milega

- jitne bhi non-primitive hai wo heap me rahte hai - Graph , tree
- aur inka pointer stack me rahta hai


### Garbage collector 
- agar tum p1 aur p2 (pointer) ko stack se hata rhe ho toh heap se bhi hatana hota hai 
- but javascript me ye hame nhi karna padta hai ye khud hi ho jata hai

#### without garbage collector
- memory leak - suppose there are two developer and someone remove the p2 variable and their memory location as well so p1 have address, in which some data which is anything ,
means p1 is aise cheej ko point kar raha hai jaha kise aur ka data pada ho sakta hai

## Pass by Value
## Pass by reference
 - Shallow Copy (...) spread
 - Deep Copy

## Serialization and De-serialization

### Other
 - Install Quokka.js extension (output same jagah hi dekh sakte ho)
 - to run(open console) ctrl + k and  j 