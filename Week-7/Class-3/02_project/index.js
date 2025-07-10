// PART-1 .....................................
console.log("hello ji");
// time and date ka reference liya hai 
const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");

const now = new Date()
console.log(now);

// const hours = now.getHours()%12; // for am pm
// now ---
// const time = 0 || 12; // operation - truthy
// const time = 1||12;
// console.log(time);

const hours = now.getHours()%12 || 12; // for am pm
console.log(hours)


// const minutes = now.getMinutes()
// console.log(minutes) // alway need to digit- suppose if 1 then write it as 01 but when 11 then it like "0"11

// // const minutes = now.getMinutes().toString()
// console.log(minutes)//"1"


//PART-2........................
// property of string - padStart and padEnd
const minutes = now.getMinutes().toString().padStart(2,"0")
// // or second approach
// minutes < 10 ? `0${minutes}` : `${minutes}`

console.log(minutes)

const seconds = now.getSeconds().toString().padStart(2,"0")

const ampm = now.getHours() <= 12 ? "AM" : "PM"

timeElement.textContent = `${hours}:${minutes}:${seconds}:${ampm}`;

//PART-3 ...........................................
//Interview Question
//SetInterval - ek time frame me kaam karta hai...kab se kab tak... ye karta hi rahta hai
//Set timeout -....setTimeout() is executed only once.

// Interview me jjane se pahle tumhaare mind me har cheej ke example hone chahiye
// interview me jaa ke soacha nhi hota


// setInterval(() => {
// .....
// }, interval);

// PART-4 ....................................
// sab ko wrap kar ke ek function me chipka do

// function updateClock() {
//   const timeElement = document.getElementById("time");
//   const dateElement = document.getElementById("date");

//   const now = new Date();
//   const hours = now.getHours() % 12 || 12; // for am pm
//   const minutes = now.getMinutes().toString().padStart(2, "0");
//   const seconds = now.getSeconds().toString().padStart(2, "0");
//   const ampm = now.getHours() <= 12 ? "AM" : "PM";

//   timeElement.textContent = `${hours}:${minutes}:${seconds}:${ampm}`;
// }

// setInterval(updateClock, 1000);

// updateClock();// refresh kar ke fir se reload nhi hoga - mtlb ye turant call ho jayega
// // or 
// // window.onload(updateClock());



// PART-5 ......................................
// find the date 
// read the documentation from mdn

// atleast read about ..
// 1.toLocalDateString()
// 2.toLocalString()
// 3.toLocalTimeString()

//console.log(event.toLocalDateString("ar-EG",options)); // "ar-EG"-> timeZone
// console.log(event.toLocalDateString(undefined,options));//undefined-
//what is undefined- 
// expected output (varies according to local timezone and default locale)

function updateClock() {
  const timeElement = document.getElementById("time");
  const dateElement = document.getElementById("date");

  const now = new Date();
  const hours = now.getHours() % 12 || 12; // for am pm
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const ampm = now.getHours() <= 12 ? "AM" : "PM";

  const options = {
    weekday:'long',
    year:"numeric",
    month:"long",
    day:"numeric"
  }
  timeElement.textContent = `${hours}:${minutes}:${seconds}:${ampm}`;
  dateElement.textContent = now.toLocaleDateString(undefined,options);
}

setInterval(updateClock, 1000);

updateClock();