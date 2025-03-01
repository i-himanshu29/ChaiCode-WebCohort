## Debouncing Fig.

<img src="./assets/WhatsApp Image 2025-03-01 at 10.03.21_da7abb7f.jpg"/>

<img src="./assets/WhatsApp Image 2025-03-01 at 10.03.22_fc4c5384.jpg"/>

## Chat
- prototype -> Class ke saath use karte
- __proto__ -> Class ke instances ke saath use karte


- Array class ka prototype access karna ho to
Array.prototype

const arr = new Array()
arr.__proto__

#### __proto__ contains the properties of the object and prototype is the wrapper class of the properties m i right?

- Not exactly!

- __proto__ points to the prototype of the object (inherited properties and methods).

- prototype is a property of constructor functions (like Array, Object) used to define properties and methods for instances.


- Ternary (? :) → Chooses between two values based on a condition

- Nullish coalescing (??) → Returns the right value only if the left is null or undefined

- ?? gives a default value if the left side is null or undefined.

- ?. checks if a value exists before accessing its properties

#### humne callbacks ko array mai store kyu kiya? jb hume ek then mai bs ek he callback hoga?

- We store callbacks in an array because multiple .then() can be chained on the same promise, requiring all stored callbacks to execute when resolved 


#### is closure an independent concept of js or does it exist in other languages also ?

- Closures are not unique to JavaScript, they exist in many programming languages like Python, Ruby, and more


#### 1.I have a question, bind will return a function, apply will execute the function then what will call do?

- bind():Returns a new function with this fixed.

- apply(): Calls the function immediately, passing arguments as an array.

- call(): Calls the function immediately, passing arguments one by one


#### 2.My doubt is when we write ‘return function (...args)’ cant we use call because we are passing individual arguments?
 
- No, because call immediately executes the function, but return function (...args) is just returning a new function, not executing it yet.
- then you implementation must be changed as 
   fn.call(this, ...args);


#### 3.
- Throttling ek technique hai jisme ek function ko ek fixed time interval ke andar sirf ek baar execute hone diya jata hai, chahe kitni bhi baar call ho.

#### 4.dev tool me jo network wala  throttling  or hitesh ka throttling me ky diifrence hai

- DevTools throttling slows network requests, while   - JavaScript throttling controls how often a function runs, both manage speed, but in different contexts.

#### 5.
- These two are very important and most asked in interviews pov (so keep some personal notes)


#### 6.How does the args of the value is inside args variable it should be accessable by the arguments keyword now so how can we access it is args a keyword or what it is

- args is not a keyword, it's just a variable name

- arguments keyword is a special object available in regular functions

- ...args creates a real array of arguments


#### 7.
- Debounce: disturb kiya toh restart.
- Throttle: disturb kiya toh ignore (fixed time tak wait, phir next run).
