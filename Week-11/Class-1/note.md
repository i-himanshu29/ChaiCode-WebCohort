### Q1
Nahi, exports (Node.js) and export (ES6) alag hain.

exports -> Node.js me module export karne ke liye use hota hai (module.exports).
export -> ES6 me modules export karne ke liye use hota hai (export default ya export {}).



### Q2 
^ (Caret)
Allows updates that do not change the first non-zero version number (major version).

~ (Tilde)
Allows updates only to the patch version

### Q3
~ allows patch-level updates
^ allows minor and patch-level updates


### Q4
WHAT IS THE DIFFERENCE B/W PAKAGE.JSON AND PACKAGE.JSON.LOCK
Anirudh Jwala 09:19 PM 
that is what we just saw right?

package.json lists project dependencies
package-lock.json records exact versions installed for consistent builds

Mukul Padwal 09:19 PM 
package.json dependencies define karta hai, aur package-lock.json unka exact version lock karta hai.

### Q5
then what problem does docker solve instead of docker we use package.lock.json file
Anirudh Jwala 09:21 PM 
don’t say this outside, docker is for different reason 😭

Docker solves environment consistency issues irrespective of the framework and platform

package-lock.json solves dependency version consistency for node.js based projects


### Q6
node_module aur pacakage-lock mai kya differnce hai dono mai dependencies ki hoti hai?

Anirudh Jwala 09:23 PM 
node_modules contains the actual dependency files

package-lock.json ensures consistent dependency versions across installations

### Q7
so basically, 
package json -> dependencies of the project
package lock json -> tracks versioning
node modules -> stores the dependencies

correct me if i'm wrong
Anirudh Jwala 09:26 PM 
correct


### Q8
what is curl?
Anirudh Jwala 09:34 PM 
cli tool for api calls


## Sem versioning

4 21 2 
4- Major Version(koi function hi hata diya hai.. toh code fatega . toh iss version ko change karenge)
21 - Minor Version(functionality add kar sakte ho code nhi fatega - update kar lo new functionality hi milegi)
2- Patch Version (code nhi fatega but kuch toh acha hoga hi - update karlo)
