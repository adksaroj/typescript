"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var fn = function () { return 'response'; };
var a;
var b;
a = 1;
b = true;
// Array
var myArr;
myArr = [];
myArr = [1, 3, 5];
//doesnot work myArr = [1, 'hello']
//tuple
var myArr2;
myArr2 = [2, 'Hello']; //works
// myArr2 = ['Hello',2]  // doesnot works
function add(a, b, c) {
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
var d;
d = 112;
d = 'Hello';
var e;
e = 112;
e = 'Hello';
//e = true;  -- throws error
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function () {
        console.log('Hey there !!');
    };
    return Person;
}());
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Programmer.prototype.writeCode = function () {
        console.log('Coding into console...');
    };
    //overriding existing method
    Programmer.prototype.greet = function () {
        console.log('Hey Programmer...');
    };
    //super keyword example
    Programmer.prototype.greetLikePerson = function () {
        this.greet(); // doesnot work, calls greet from programmer class
        _super.prototype.greet.call(this); // calls greet from Person class.
    };
    return Programmer;
}(Person));
var aProgrammer = new Programmer(); // works
// var aProgrammer: Programmer = new Person(); // doesnot work
var programmer = new Programmer();
programmer.writeCode();
programmer.greet();
var person = new Person();
person.firstname = 'Saroj';
person.lastname = 'Adhikari';
console.log(person.firstname + ' ' + person.lastname);
var Student = /** @class */ (function () {
    //constructor demo
    function Student(fn, ln) {
        this.firstname = fn;
        this.lastname = ln;
    }
    //method demo
    Student.prototype.getStudent = function () {
        return this.firstname + ' ' + this.lastname;
    };
    return Student;
}());
var stud = new Student('Saroj', 'Adhikari');
