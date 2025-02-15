class Person {
    constructor(fname,lname){
        this.fname = fname
        this.lname = lname;
        this.isActive = false;
        console.log(this.getFullname())
    }
    getFullname(){
        return `${this.fname} ${this.lname}`
    }
}

// Now make the two object of this class 

const p1 = new Person ('Piyush','Garg');
const p2 = new Person ('Akash','Jain');

// p1.__proto__ = Person.prototype

const ans = p1.getFullname()
console.log('ans', ans)

const ans2 = p2.getFullname()
console.log('ans2', ans2)