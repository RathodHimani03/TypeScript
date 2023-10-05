"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n, age) {
        this.name = n;
        this.age = age;
    }
    greet(phrase) {
        console.log(phrase + '' + this.name);
    }
}
let user1;
user1 = new Person("ashutosh", 20);
user1.greet('Hello world!-I am ');
console.log(user1);
//# sourceMappingURL=app.js.map