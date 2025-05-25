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


````
To be delete....
lec-3 of react


for lect-3 of react

1.
where is state saved? in the browser?
Anirudh 10:04 PM 
no, but you can persist if you want to local storage
default its on ram of the running machine

2.

Sir in react, whenever state changes...component re renders....so is it the same case with state management libraries also ???
Anirudh 10:06 PM 
difference is state management libraries like zustand trigger re-renders only for components that subscribe to the changed state
BUT in react context api it re-renders all consumers

3.

Anirudh, subscribe means whichever component uses zustand ? Am i right ?
Anirudh 10:08 PM 
exactly only the components using that specific state from zustand will re-render not everything

4.

@TA's one doubt, in react-redux, initialState and resertState are two reducers that can be used to set the initial values and reset values
but in zustand initial values can be set by just naming variables : values
but what about the resetState like in redux
Akash Kadlag 10:09 PM 
yes 
redux is designed at early state managers.
and it’s apis are differnt


5.

persist se local storage me store kar skte hai ??? but what does that mean ?
Anirudh 10:10 PM 
on page reloads you will not loose your state values

6.

so akash sir, zustand doesn't provide a resetState by default, instead we have to make it a function like every other and call it to reset ?
Akash Kadlag 10:12 PM 
import { create } from 'zustand';

const useStore = create((set) => {
  const initialState = {
    count: 0,
    name: 'Guest',
  };

  return {
    ...initialState,
    increment: () => set((state) => ({ count: state.count + 1 })),
    reset: () => set(initialState), 
  };
});


7.

linting syntax check krti hai ?
Anirudh 10:18 PM 
right linting checks syntax and also enforces code style and best practices to follow in codebase

8.

sir turbo pack kya hota he?
Anirudh 10:13 PM 
bundler by vercel as their replacement for webpack


9.

what is .mjs here?
Anirudh 10:16 PM 
to follow module syntax of with import/exports 
have to use mjs extension 
its an es module file simple


10.

Sir what is hydration?
Anirudh 10:17 PM 
react attaching an event listeners to html file from server and making it interactive


11.

when to use Next js 
and
when to use react 
when not to use Next js
Anirudh 10:16 PM 
use next.js for seo and routing
use react for pure frontend
skip next.js if no SSR needed


12.

sir edge function ?
Anirudh 10:18 PM 
vercel edge functions run server code close to users for faster response, using a lightweight runtime

13.

isme routing secure kaise krenge
Akash Kadlag 10:19 PM 
app routing is secure and maitain by next.js team


14.

when to use react-router-dom and when to use tanstack router
Anirudh 10:19 PM 
use router dom for simple routing needs
use tanstack router for typesafe, nested and data driven routing

15.

sir what is the difference between graphql, grpc, trpc
Anirudh 10:27 PM 
graphql lets clients ask exactly what data they need

grpc is fast and uses binary format

trpc connects frontend to backend with typesafety and no extra code

16.

when to realise im in tutorial hell and save myself??
Anirudh 10:28 PM 
when you are not able to code a project by yourself without watching a tutorial then realise you are in tutorial hell
