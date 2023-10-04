"use strict";
const add = (a, b) => a + b;
const printOutput = output => console.log(output);
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', event => console.log(event));
}
printOutput(add(5, 2));
const hobbies = ['sports', 'Cooking'];
const activehobbies = ['singing', 'sketching'];
activehobbies.push(...hobbies);
const person = {
    name: "Himani",
    age: 20
};
const person2 = Object.assign({}, person);
const sum = (...number) => {
    return number.reduce((a, b) => {
        return a + b;
    }, 0);
};
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));
const arr = [1, 2, 5, 6, 7];
const [a, b, ...c] = arr;
console.log(a, b, c);
const obj = {
    firstname: 'Himani',
    age: 20
};
const { firstname: fname, age } = obj;
console.log(fname);
//# sourceMappingURL=app.js.map