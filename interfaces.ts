interface Human {
    firstname: string;
    lastname: string;

    getFullName(): string; // method declaration
}


class Male implements Human {
    firstname: string;
    lastname: string;

    getFullName(): string {
        return this.firstname + ' ' + this.lastname;
    }
}

//implemeting polymorphism

var male1: Human = new Male();


let obj1 = {
    firstname : 'Hello',
    lastname : 'World',
    midname: 'people of',
    getFullName:()=> 'test '
}

male1 = obj1;

male1.firstname;
obj1.midname; //works
//male1.midname; //error

console.log(male1.getFullName());


class Employee {

    // private fn: string;
    // private ln: string;

    constructor(public fn: string, private ln: string) {
        // this.fn = fn;
        // this.ln = ln;
    }

    getFn(): string {

        return this.fn;
    }
    getLn(): string {

        return this.ln;
    }

    setFn(name: string) {

        this.fn = name;
    }
    setLn(name: string) {

        this.ln = name;
    }

    getFullName(): string {
        return this.fn + ' '+ this.ln;
    }
}

class ContractEmployee extends Employee {

    private empContractID: number;

    setEmpContractID(id: number) {

        this.empContractID = id;
    }

    getEmpContractID(): number {
        return this.empContractID;
    }
}

var empC = new ContractEmployee("Hello", "World");
empC.setFn('Mr Abis');
empC.setLn('Mathhew');
empC.setEmpContractID(9105);




class Mouse {
    //readonly brand: string;

    constructor(readonly brand: string) {

        //this.brand = brand;
    }

}

var hp = new Mouse('hp');

console.log(hp.brand); // workks
// hp.brand = 'Lenevo'; // error

