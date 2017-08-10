// Given the code below, re-write it using all TypeScript features you have learned
//
// myNum = 5;
// myString = "Hello Universe";
// myArr = [1,2,3,4];
// myObj = { name:'Bill'};
// anythingVariable = "Hey";
// anythingVariable = 25;
// arrayOne = [true, false, true, true];
// arrayTwo = [1, 'abc', true, 2];
// myObj = { x: 5, y: 10 };
// // object constructor
// MyNode = (function () {
//     function MyNode(val) {
//         this.val = 0;
//         this.val = val;
//     }
//     MyNode.prototype.doSomething = function () {
//         this._priv = 10;
//     };
//     return MyNode;
// }());
// myNodeInstance = new MyNode(1);
// console.log(myNodeInstance.val);
// function myFunction() {
//     console.log("Hello World");
//     return;
// }
// function sendingErrors() {
// 	throw new Error('Error message');
// }
let myNum: number = 5;
let myString: string = "Hello universe";
let myArr: number[] = [1, 2, 3, 4];
let myObject = { name: "Bill" };
let anythingVariable: any = "Hey";
let anythingVariable2: any = 25;
let arrayOne: boolean[] = [true, false, true, true];
let arrayTwo: any[] = [1, 2, "abc", true];
const myObj: object = { x: 5, y: 10 };

class MyNode {
    val: number;
    _priv: number;

    constructor(val) {
        this.val = 0;
        this.val = val;
    };
    doSomething() {
        this._priv = 10;
    };
};

let myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);


function myFunction(): void{
    console.log("Doesn't matter what I put here because it will void anyways...");
    return;
}

function sendingErrors(): never {
    throw new Error('Error message')
}
