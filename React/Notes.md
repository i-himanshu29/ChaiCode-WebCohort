LeetLab Requirement:

````

Min features for LeetLab,
Sign in/up of User,
Problems list (30 DSA problems),
Support of 3 coding languages,
Problem should have category & company tag,
1-2 problems should have “Demo” tag with pre-filled solution to click “Run” and execute,
Handle loading/submission states well,

Big Bounty Projects,
Polished work of
Super Chat Live,
Review management system,
Team builder for ChaiCode,
^ bonus if you do all 3 🙂 


````


Keep in mind:
- vite environment variables
````
VITE_SOME_KEY=123
DB_PASSWORD=foobar
````


Question and answer:
````
1.
Riya Aggarwal . 08:46 PM 
ye dist kya Hai folder?
Anirudh 08:48 PM 
dist is the folder having the build output of the react code, react compiler/engine makes it into single distributable code that can be served from frontend server to the client requesting

you can say the production build output will be present here


2.
sir, useState and useEffect kya hai
Anirudh 09:18 PM 
both of these are functions (also called as hooks) given by react library

usestate is for keeping track of variable value between component renders

useeffect is for running a code block for component life cycle such as mount, unmount, re-render


3.
return and () ye kis condition m krte h
Anirudh 09:19 PM 
prefer to use “return” keywork when you have an extra logic to be writtern before your component template; else you can return a single element wrapped in () as one

4.

React.createElement mai jo key hoti hai ya wahi key hai anirudh bhayia
Anirudh 09:22 PM 
yes the key in React.createElement() is the same as the key that is used in .map() here

it’ll help react to identify elements uniquely between re-render cycles so that only updated nodes are re-rendered and rest are untouched


5.
Question: If we have multiple APIs to call we can write multiple useEffect blocks ?
Anirudh 09:23 PM 
yes 👍 
can write multiple useEffect blocks in a component, they will execute in the order of their appearance

6.
sir , uuid() use kr skte hain kya ?
Anirudh 09:24 PM 
uuid will be re-generated for every new render cycle, that means every element gets a new “key” value 

defeat of purpose in that case


7.
Riya Aggarwal . 09:27 PM 
pta kse chlega keys kb use krni h
Mukul Padwal 09:30 PM 
Jab bhi aap koi iteration kar rahe hoge tab.

Ek component ko ek hi saath multiple baar different set of data ke saath render jab kar rahe ho. (jaise map se kiya tha)

Baaki browser ke console mei error aata hai keys ke realted agar na lagao.


8.
what is the difference between higher order functions and custom hooks
Akash Kadlag 09:32 PM 
HOF is JavaScript term…

Hooks is react term

***
 First null is because of Strict mode


9.

sir, how null is because of strict mode?
Akash Kadlag 09:52 PM 
StrictMode is used in Dev mode which is just used to test correctness of states and pure fuction


10.
how did conditional rendering solved the problem of custom hook not replying on time?
Akash Kadlag 09:57 PM 
conditional readierning shows loding…. when data is not there and shows data after that




11.
sir how to develop though process to use React??
Akash Kadlag 10:01 PM 
react.dev mai thinking in react section hoga


12.

Ohh okay got it, just one more confusion...

 if multiple setState calls are batched together causing single re-render...then like...how is it possible that.... when we call an async function, say for example, a network call in useEffect... we see a "loading text" or a "spinner" 
Anirudh 10:35 PM 
they’re not batched because they happen in different ticks

setLoading(true) runs first
re-renders

then after the async call

setData() runs and triggers another re-render of the component


13.
setForm({...form, [e.target.name: e.target.value]})

sir isme values array me kyu diya
[e.target.name: e.target.value] is part me
Anirudh 11:00 PM 
form has multiple fields, rather than writing each one, made dynamic

it's not an array
we are using [] to dynamically set the object key from e.target.name
````
