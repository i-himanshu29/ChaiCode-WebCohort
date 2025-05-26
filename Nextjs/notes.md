Whatever react we have studied so far is Clientr side react which is the original react.

## CSR - Client Side rendering
````
(html-> div#root) is on the browser we know and js is come from server and and loaded on browser called - CSR
then it buid the components.
that's the reason site is light weight and easy to load
````

## SSG - Static site generation
````
some sort of (html , css , js) is statically generated in advance obviouslly from the react
- mostly no db calls
- its light weight and easily serves
````

## CDN - Content Delivery Network
````
cdn - is the small small servers which is near to you
server- is the software which servers
cdn is location where i can keep our files images etc whatever we want.
cdn - also chached
````

## SSR - Server Side Rendering
````
API + DB calls -
mtlb agar api calls server par kar lu then after sending u a page
- mtlb page hum server par hi render kara le toh use hi SSR bolte hai
that's mean actually useEffect and useState hum use nhi kar payenge becoz ye client side ka hai
````

## ISR - Incremental Static Regenration
````
SSG(html + css + js) hai now i want to add DevOps
then shouls i render whole module including html , css, js or can i render only devOps ?

the ans is ki agar aap ke paas koi algo hai jo pata laga le ki kitne page generated hai toh fir devOps ka page generate kar lo extra


