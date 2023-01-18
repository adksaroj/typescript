function echo<T>(arg:T) :T {
    return arg;
}

var syStr = echo(1);


import { PC } from './pc';

class Dell extends PC {

}

class HP extends PC {

}

let _dell = new Dell('dell');
let _hp = new HP('hp');
let _generic = new PC('generic');

function getPC<T extends PC>(pc: T): T {
    return pc;
}

var pc1 = getPC(_dell);
var pc2 = getPC(_hp);
var pc3 = getPC(_generic);

//let _person = new Person()
//var pc4 = getPC(_person);
