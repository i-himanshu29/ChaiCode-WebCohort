## Nodes Internals

<img src="./assets/Screenshot 2025-03-26 171433.png"/>

## Thread - 
 - MultiThread
 - Single thread

### single thread 
- Imagine you are in a restorent and their is a only one waiter which takes the order from customer to the chef that's a single thread.

### multi thread
- Similary if we have a five waiters in a  restorents then it means we have a 5 threads

- Idealy 5 should be more efficient , but their is a one twist .

- In multithread 5 waiters takes the order from 5 customer parallely .
- In single 1 waiters move to the every customer one by one.

- Nodejs is a single threads.
  - Nodejs is best for the rest API and json API
  - Sometime it act as bottleneck.
  - bottleneck to reduce the flow / data conjetion
  - If you are making video editting software then it become bottleneck


<img src="./assets/Screenshot 2025-03-26 172938.png"/>

- Step- 1 Init Project
- Step-2 Top Level Code Execute karta hai (Top level means jo kise module ke ander nhi hai jo kise ka callback nhi hai) Means global scope me hai
      - Step-i Require compile first
- Step-3 Event callback register hote hai
- Step-4 Event loop start

<img src="./assets/Screenshot 2025-03-26 172950.png"/>

- Step-4 Event loop start
    - Step-i> Expired Timer callback hai kya ?(setInterval , setTimeout)
    - Step-ii> IO Pooling(any code which depend on the input output mechanism)(fs module)
        - fs.readFile(filename,(err,data)=>{})
    - Step-iii> SetImmediate callbacks ko run karta hai
        - setImmediate is not available in the browser
        - It is a part of nodejs.
    - Step-iv> Close callback ko run karo
    - Step-v> Kya code mai kuch baaki hai ? Yes or No
        - if(No) break;(exit)
        - if(Yes) toh chalo vapis upar
  - Jitne steps likhe hai loop me unko Phase bola jata hai

<img src="./assets/Screenshot 2025-03-26 173026.png"/>

<img src="./assets/Screenshot 2025-03-26 173046.png"/>

### Thread Pool
- As of now we have 4 workers in thread pool
- Node always use Main thread
- CPU Intensive Task always run in thread pool
    - Cryptography - Hashing Password(ek worker ko bhej ke ye kaam karwa lenge aur ho jayega toh wapis bhej denge) called workers thread.

<img src="./assets/Screenshot 2025-03-26 181010.png"/>

### Chat
timer phase -> I/0 phase -> check phase -> close callback phase
### Q1
any example of close cb
Akash Kadlag 08:58 PM 
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});

server.on('close', () => {
  console.log('Server closed.');
});

// Close Callback
setTimeout(() => {
  server.close(); // This triggers the 'close' event
}, 5000);


### Q2
but nodejs is single threaded so how it is able to run threads parallely
Akash Kadlag 09:21 PM 
Node.js runs JavaScript on a single thread, but uses background threads (OS threads) under the hood — 

thanks to libuv, a C++ library that powers Node’s async capabilities.

### Q3
# Tasks
- Library Management System
- Parking Lot System
- Learnyst (White Labbeled)
- Hospital Management (With Ambulance Tracking)
- Food Del App (With Realtime Rider Tracking)
- Amazon (Multiple Sellers and Multiple Buys and Warehouses)
