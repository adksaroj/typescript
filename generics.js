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
exports.__esModule = true;
function echo(arg) {
    return arg;
}
var syStr = echo(1);
var pc_1 = require("./pc");
var Dell = /** @class */ (function (_super) {
    __extends(Dell, _super);
    function Dell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dell;
}(pc_1.PC));
var HP = /** @class */ (function (_super) {
    __extends(HP, _super);
    function HP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HP;
}(pc_1.PC));
var _dell = new Dell('dell');
var _hp = new HP('hp');
var _generic = new pc_1.PC('generic');
function getPC(pc) {
    return pc;
}
var pc1 = getPC(_dell);
var pc2 = getPC(_hp);
var pc3 = getPC(_generic);
//let _person = new Person()
//var pc4 = getPC(_person);
