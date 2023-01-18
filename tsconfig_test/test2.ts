class B {
    firstname: string;
    lastname: string;
    

    constructor(firstname: string, lastname: string) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

var _b = new B("Saroj ", "Adhikari");
console.log(_b.firstname);