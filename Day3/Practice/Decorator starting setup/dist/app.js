"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(logString) {
    console.log('Logger');
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function withtemplate(template, hookId) {
    console.log('withtemplate');
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1').textContent = this.name;
                }
            }
        };
    };
}
let Person = class Person {
    constructor() {
        this.name = "Ashu";
        console.log("Creating person object.......");
    }
};
Person = __decorate([
    Logger('hello'),
    withtemplate('<h1>My person Object</h1>', 'app')
], Person);
function Log(targe, propertyName) {
    console.log('Property decoratores');
    console.log(targe);
    console.log(propertyName);
}
function Log2(target, name, descripter) {
    console.log("Access decorator");
    console.log(target);
    console.log(name);
    console.log(descripter);
}
function Log3(target, name, descripter) {
    console.log("Method decorator");
    console.log(target);
    console.log(name);
    console.log(descripter);
}
function Log4(target, name, position) {
    console.log("Parameter decorator");
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("Invalid price - should be positive");
        }
    }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
const p1 = new Product('Mynovel', 1000);
function Autobind(__, __2, descripter) {
    const originalMethod = descripter.value;
    const adjDescripter = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescripter;
}
class Printer {
    constructor() {
        this.message = 'This words!';
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const p = new Printer();
const button = document.querySelector('button');
button.addEventListener('click', p.showMessage);
function Required() { }
function PositiveNumber() { }
class Course {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
const courseForm = document.querySelector('form');
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title');
    const priceEl = document.getElementById('price');
    const title = titleEl.value;
    const price = +priceEl.value;
    const createCourse = new Course(title, price);
    console.log(createCourse);
});
//# sourceMappingURL=app.js.map