"use strict";
exports.__esModule = true;
exports.PC = void 0;
var PC = /** @class */ (function () {
    function PC(firstname) {
        this.firstname = firstname;
    }
    PC.prototype.getPCName = function () {
        return this.firstname;
    };
    return PC;
}());
exports.PC = PC;
var pc = new PC('PC1');
console.log(pc.getPCName());
