//decorator
// function Logger(constructor:Function){
//     console.log("Logging....")
//     console.log(constructor);
// }


// @Logger
// class Person {

//     name = "Ashu"
//      constructor(){
//         console.log("Creating person object.......")
//      }
// }



//Decorator factories
function Logger(logString: string) {
    console.log('Logger')
    return function (constructor: Function) {
        console.log(logString)
        console.log(constructor);
    }
}

function withtemplate(template: string, hookId: string) {
    console.log('withtemplate')
    return function <T extends { new(...args: any[]): { name: string } }>(originalConstructor: T) {

        return class extends originalConstructor {
            constructor(..._: any[]) {
                super();
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = this.name;
                }

            }
        }
    }

}

@Logger('hello')
@withtemplate('<h1>My person Object</h1>', 'app')
class Person {

    name = "Ashu"
    constructor() {
        console.log("Creating person object.......")
    }
}


// const pers = new Person();
// console.log(pers)


//--------------

function Log(targe: any, propertyName: string | Symbol) {
    console.log('Property decoratores')
    console.log(targe);
    console.log(propertyName)
}

function Log2(target: any, name: string, descripter: PropertyDescriptor) {
    console.log("Access decorator")
    console.log(target);
    console.log(name);
    console.log(descripter)

}

function Log3(target: any, name: string, descripter: PropertyDescriptor) {
    console.log("Method decorator");
    console.log(target);
    console.log(name);
    console.log(descripter);


}


function Log4(target: any, name: string | Symbol, position: number) {

    console.log("Parameter decorator");
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {

    @Log
    title: string
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val
        } else {
            throw new Error("Invalid price - should be positive")
        }
    }




    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }
    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax)
    }
}

const p1 = new Product('Mynovel', 1000)

function Autobind(__: any, __2: string, descripter: PropertyDescriptor) {
    const originalMethod = descripter.value;
    const adjDescripter: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn
        }
    };
    return adjDescripter;

}

class Printer {
    message = 'This words!';

    @Autobind
    showMessage() {
        console.log(this.message)
    }
}

const p = new Printer();


const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage)

//validating with decorators  First steps

interface ValidationConfig {
    [property: string]: {
        [validatableProp: string]: string[] //["required","positive"]

    }
}

const registeredValidators: ValidationConfig = {}
function Required(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        [propName]: ['required']
    }
}

function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        [propName]: ['required']
    }
}

function validate(obj: any) {

    const objValidatorConfig = registeredValidators[obj.constructor.name]
    if (!objValidatorConfig) {
        return true;
    }
    for (const prop in objValidatorConfig) {

        for(const validator of objValidatorConfig[prop]){
            switch(validator){
                case 'required':
                    return !!obj[prop];

                case 'positive':
                    return obj[prop] >0

            }
        }
    }
    return true;
}
class Course {

    @Required()
    title: string;
    @PositiveNumber()
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p
    }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createCourse = new Course(title, price);
    console.log(createCourse)

    if (!validate(createCourse)) {
        alert("Invalid input,please try again!")
        return
    }
})
