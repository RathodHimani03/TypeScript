//interface
// type AddFn = (a:number,b:number) => number;
interface AddFn{
    (a:number,b:number):number
}

let add:AddFn

add = (n1:number,n2:number) => {
    return n1 + n2
}
interface Named{
    
    readonly name:string;
    outputName?:string; //optional property
}
interface Greetable{

    age:number;

    greet(phrase:string):void
}


class Person implements Greetable,Named{
    name:string;
    age: number;

    constructor(n:string,age:number){
        this.name = n
        this.age = age
    }

    greet(phrase: string) {
        console.log(phrase+ ''+this.name)
    }
}


let user1: Greetable;

user1 = new Person("ashutosh",20);

user1.greet('Hello world!-I am ')
console.log(user1)