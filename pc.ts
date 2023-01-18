export class PC {

    constructor(public firstname: string) {

    }

    getPCName() {
        return this.firstname;
    }
}

var pc = new PC('PC1');
console.log(pc.getPCName());