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
var Male = /** @class */ (function () {
    function Male() {
    }
    Male.prototype.getFullName = function () {
        return this.firstname + ' ' + this.lastname;
    };
    return Male;
}());
//implemeting polymorphism
var male1 = new Male();
var obj1 = {
    firstname: 'Hello',
    lastname: 'World',
    midname: 'people of',
    getFullName: function () { return 'test '; }
};
male1 = obj1;
male1.firstname;
obj1.midname; //works
//male1.midname; //error
console.log(male1.getFullName());
var Employee = /** @class */ (function () {
    // private fn: string;
    // private ln: string;
    function Employee(fn, ln) {
        this.fn = fn;
        this.ln = ln;
        // this.fn = fn;
        // this.ln = ln;
    }
    Employee.prototype.getFn = function () {
        return this.fn;
    };
    Employee.prototype.getLn = function () {
        return this.ln;
    };
    Employee.prototype.setFn = function (name) {
        this.fn = name;
    };
    Employee.prototype.setLn = function (name) {
        this.ln = name;
    };
    Employee.prototype.getFullName = function () {
        return this.fn + ' ' + this.ln;
    };
    return Employee;
}());
var ContractEmployee = /** @class */ (function (_super) {
    __extends(ContractEmployee, _super);
    function ContractEmployee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContractEmployee.prototype.setEmpContractID = function (id) {
        this.empContractID = id;
    };
    ContractEmployee.prototype.getEmpContractID = function () {
        return this.empContractID;
    };
    return ContractEmployee;
}(Employee));
var empC = new ContractEmployee("Hello", "World");
empC.setFn('Mr Abis');
empC.setLn('Mathhew');
empC.setEmpContractID(9105);
var Mouse = /** @class */ (function () {
    //readonly brand: string;
    function Mouse(brand) {
        this.brand = brand;
        //this.brand = brand;
    }
    return Mouse;
}());
var hp = new Mouse('hp');
console.log(hp.brand); // workks
// hp.brand = 'Lenevo'; // error
