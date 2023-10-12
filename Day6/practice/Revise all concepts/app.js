"use strict";
let num;
num = 34;
let n = "himani";
let json = JSON.parse("55");
let check = true;
const arr = [];
arr.push('chocolate');
// arr.push(45)//it'll through error
//tuple
// / define our tuple
let ourTuple;
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
ourTuple.push('Something new and wrong');
console.log(ourTuple);
//named tuple
const graph = [55.2, 41.3];
//destructurign tuples
const graph2 = [55.2, 41.3];
const [x, y] = graph2;
console.log(graph2);
//object with optional property 
const obj = {
    name: 'Ashu',
    age: 10
};
const nameAgeMap = {};
nameAgeMap.Jack = 25; // no error
// nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
console.log(nameAgeMap);
//enum --group of constant
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes["Success"] = "200";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
let Carobj = {
    name: "Toyota",
    year: 2001
};
console.log(Carobj);
let newname;
newname = "WonderCar";
console.log(newname);
const rectangle = {
    height: 20,
    width: 10,
    color: 'pink'
};
console.log(rectangle);
//union-
function printStatusCode(code) {
    console.log(`My status code is ${code}.`);
}
printStatusCode(404);
printStatusCode('404');
//function
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 3));
//optional parameter
function add(a, b, c) {
    return a + b + (c || 0);
}
//default parameter
function pow(value, exponent = 10) {
    return value ** exponent;
}
//Named Parameters
function divide({ dividend, divisor }) {
    return dividend / divisor;
}
//rest parameter
function add2(a, b, ...rest) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction = (value) => value * -1;
console.log(negateFunction(897));
//casting
let xq = 'hello';
console.log(xq.length);
let x2 = 'hello';
console.log(x2.length);
//generic
function obj2(name, age) {
    return [name, age];
}
obj2('Ashu', 20);
//object iteration
console.log('object iteration');
const obj3 = {
    one: 'uno',
    two: 'dos',
    three: 'tres',
};
let k; // Type is "one" | "two" | "three"
for (k in obj3) {
    const v = obj3[k];
    console.log(v); // OK
}
