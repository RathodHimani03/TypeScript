// const userName = 'Max';
// // userName = 'Maximilian';
// let age = 30;

// age = 29;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

// console.log(result);

const add = (a: number, b: number) => a + b;

const printOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', event => console.log(event));
}

printOutput(add(5, 2));

//spread operator 

const hobbies = ['sports','Cooking']

const activehobbies = ['singing','sketching']

activehobbies.push(...hobbies)

const person = {
    name:"Himani",
    age:20
}

const person2 = {...person}

//rest operator

const sum = (...number:number[])=>{

    return number.reduce((a,b)=>{
        return a+b
    },0)
}

console.log(sum(1,2,3,4,5,6,7,8))


//array distructuring

const arr = [1,2,5,6,7]

const [a,b,...c] = arr

console.log(a,b,c)


//object destructuring

const obj = {
    firstname :'Himani',
    age:20
}

const {firstname:fname,age} = obj;

console.log(fname)
