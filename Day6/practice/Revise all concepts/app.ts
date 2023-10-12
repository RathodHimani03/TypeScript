let num: number;
num = 34;
let n = "himani"

let json = JSON.parse("55");
let check = true;


const arr: string[] = []
arr.push('chocolate')
// arr.push(45)//it'll through error

//tuple
// / define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
ourTuple.push('Something new and wrong');

console.log(ourTuple)

//named tuple
const graph: [x: number, y: number] = [55.2, 41.3];


//destructurign tuples
const graph2: [number, number] = [55.2, 41.3];
const [x, y] = graph2;

console.log(graph2)

//object with optional property 
const obj: { name: string, age?: number } = {
    name: 'Ashu',
    age: 10
}

const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
// nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.

console.log(nameAgeMap)

//enum --group of constant


enum StatusCodes {
    NotFound = 404,
    Success = '200',
    Accepted = 202,
    BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);

// alias-Aliases and Interfaces allows types to be easily shared between different variables/objects.
// TypeScript allows types to be defined separately from the variables that use them.


type carname = string;
type caryear = number;

let Carobj: {
    name: carname,
    year: caryear
} = {
    name: "Toyota",
    year: 2001
}
console.log(Carobj)

let newname:carname
newname="WonderCar"
console.log(newname)


// Interfaces are similar to type aliases, except they only apply to object types.
interface Rectangle {
    height: number,
    width: number
  }
  
  interface colour extends Rectangle{
    color:string
  }
  const rectangle: colour = {
    height: 20,
    width: 10,
    color:'pink'
  };
  console.log(rectangle)


  //union-

  function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`)
  }
  printStatusCode(404);
  printStatusCode('404');

  //function
  function multiply(a: number, b: number):number {
    return a * b;
  }

  console.log(multiply(2,3))

  //optional parameter
  function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
  }

  //default parameter
  function pow(value: number, exponent: number = 10) {
    return value ** exponent;
  }

  //Named Parameters

  function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
  }

  //rest parameter
  function add2(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
  }

  //type alia

  type Negate = (value: number) => number;

// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;

console.log(negateFunction(897))


//casting
let xq: unknown = 'hello';
console.log((xq as string).length);
let x2: unknown = 'hello';
console.log((<string>x2).length);


//generic
function obj2  <s,t>(name:s,age:t){
return  [name,age]
}

obj2('Ashu',20)

//object iteration
console.log('object iteration')
const obj3 = {
  one: 'uno',
  two: 'dos',
  three: 'tres',
};
let k: keyof typeof obj3;  // Type is "one" | "two" | "three"
for (k in obj3) {
  const v = obj3[k]; 
  console.log(v) // OK
}