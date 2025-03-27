// const http = require("http");

// const server = http.createServer(function (req, res) {
//   console.log("Incoming req aya....");
//   // console.log(req.method);
//   // console.log(req.url);
//   switch (req.method) {
//     case "GET":
//       {
//         if (req.url === "/") return res.end("Homepage");
//         if (req.url === "/contact-us") return res.end("Contact us page hai");
//         if (req.url === "/about-us") return res.end("About us page hai");
//       }
//       break;
//     case "POST":
//       {
//       }
//       break;
//   }
//   res.end("Ye lo ji response");
// });

// server.listen(8000, function () {
//   console.log(`Server Started`);
// });

//********************************************** */

// const http = require("http");

// function handlerFun(req, res) {
//     console.log("Incoming req aya....");
//     // console.log(req.method);
//     // console.log(req.url);
//     switch (req.method) {
//       case "GET":
//         {
//           if (req.url === "/") return res.end("Homepage");
//           if (req.url === "/contact-us") return res.end("Contact us page hai");
//           if (req.url === "/about-us") return res.end("About us page hai");
//         }
//         break;
//       case "POST":
//         {
//         }
//         break;
//     }
//     res.end("Ye lo ji response");
//   }
// const server = http.createServer(handlerFun);

// server.listen(8000, function () {
//   console.log(`Server Started`);
// });


//********************************************** */


// const http = require("http");
// const express = require('express')
// const handlerFunctionV2 = express()
// handlerFunctionV2.get('/',(req,res)=>res.end('Homepage'));
// handlerFunctionV2.get('/contact-us',(req,res)=>res.end('Contact-us page'));
// handlerFunctionV2.get('/about-us',(req,res)=>res.end('about us page'));


// function handlerFun(req, res) {
//     console.log("Incoming req aya....");
//     // console.log(req.method);
//     // console.log(req.url);
//     switch (req.method) {
//       case "GET":
//         {
//           if (req.url === "/") return res.end("Homepage");
//           if (req.url === "/contact-us") return res.end("Contact us page hai");
//           if (req.url === "/about-us") return res.end("About us page hai");
//         }
//         break;
//       case "POST":
//         {
//         }
//         break;
//     }
//     res.end("Ye lo ji response");
//   }
// const server = http.createServer(handlerFunctionV2);

// server.listen(8000, function () {
//   console.log(`Server Started`);
// });


//*********************************************** */



// const http = require("http");
// const express = require('express');
// const handlerFunctionV2 = express();

// handlerFunctionV2.use((req,res,next)=>{
//     next();
// });

// handlerFunctionV2.get('/',(req,res)=>res.end('Homepage'));
// handlerFunctionV2.get('/contact-us',(req,res)=>res.end('Contact-us page'));
// handlerFunctionV2.get('/about-us',(req,res)=>res.end('about us page'));


// handlerFunctionV2.listen(8000, function () {
//   console.log(`Server Started`);
// });

//*********************************************************** */



const http = require("http");
const express = require('express');
const app = express();

app.use((req,res,next)=>{
    next();
});

app.get('/',(req,res)=>res.end('Homepage'));
app.get('/contact-us',(req,res)=>res.end('Contact-us page'));
app.get('/about-us',(req,res)=>res.end('about us page'));


app.listen(8000, function () {
  console.log(`Server Started`);
});

//HW
// Can you create a basic express
// GET and POST
// req.method and req.url (node) | Magical Layer

const c = require('cohortjs')

c.getCallPr('/',function(){

})

c.suno(8000).aurPhir(()=>console.log())