var fn = () => 'response';

var a: number;
var b: boolean;

a = 1;
b = true;
// Array

var myArr: number[];
myArr = [];
myArr = [1, 3, 5];
//doesnot work myArr = [1, 'hello']



//tuple

var myArr2: [number, string];

myArr2 = [2, 'Hello']  //works
// myArr2 = ['Hello',2]  // doesnot works


function add(a, b, c?): number {
    return a + b + c;
}

var sum = add(2, 5);

var c = 200;

//c = true;

function greeting() {
    return "Good Evening";
}

var greet;
greet = greeting();


var d: any;

d = 112;
d = 'Hello';


var e: number | string;

e = 112;
e = 'Hello';
//e = true;  -- throws error

class Person {
    firstname: string;
    lastname: string;

     greet() {
        console.log('Hey there !!');
     }
}

class Programmer extends Person {
    writeCode() {
        console.log('Coding into console...');
    }

    //overriding existing method
    greet() {
        console.log('Hey Programmer...');
    }

    //super keyword example
    greetLikePerson() {
        this.greet(); // doesnot work, calls greet from programmer class
        super.greet(); // calls greet from Person class.
    }
}

var aProgrammer: Person = new Programmer(); // works


// var aProgrammer: Programmer = new Person(); // doesnot work



var programmer = new Programmer();
programmer.writeCode();
programmer.greet();



var person = new Person();


person.firstname = 'Saroj';
person.lastname = 'Adhikari';
console.log(person.firstname + ' ' + person.lastname);





class Student {
    firstname: string;
    lastname: string;

    //constructor demo
    constructor(fn: string, ln: string) {
        this.firstname = fn;
        this.lastname = ln;
    }

    //method demo
    getStudent() {
        return this.firstname + ' ' + this.lastname;
    }
}
var stud = new Student('Saroj', 'Adhikari');
