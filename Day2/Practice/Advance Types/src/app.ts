type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Ashu',
  privileges: ['create-server'],
  startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

//Function overload----------------

function add(a:number,b:number):number;
function add(a:string,b:string):string

function add(a:Combinable,b:Combinable){
  if(typeof  a === 'string' || typeof b === 'string'){
    return a.toString() + b.toString();
  }
  return a + b ;
}

console.log(add(2,3))

//opotional chaining--------------

const fetchUserData ={
  id:'u1',
  name:'Max',
  job:{title:'CEO',description:'My own company'}
}

console.log(fetchUserData?.job?.title)


//Nullish coalesing-------------------------------
const userInput= undefined;

const storeData = userInput ?? 'DEFAULT'

console.log(storeData)

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp:UnknownEmployee){

//   console.log('Name:' + emp.name)

//   if('privileges' in emp){
// console.log('Privilege:' + emp.privileges)
//   }
//  if('startDate' in emp){
//   console.log('privileages'+emp.startDate)
//  }
// }


// printEmployeeInformation(e1)


// class Car{

//   drive(){
//     console.log('Driving.......')
//   }
// }

// class Truck{
  
//   drive(){
//     console.log('Driving a truck...')
//   }

//   loadCargo(amount: number){
//     console.log(amount)
//   }
// }


// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();   

// function useVehicle(vehicle:Vehicle){
  
//   vehicle.drive();
//   if(vehicle instanceof Truck){
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1)
// useVehicle(v2)


// //Descriminated Unions

// interface Bird {
//   type:'bird';
//   flyingSpeed: Number;
// }

// interface Horse{
//   type:'horse';
//   runningspeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal:Animal){
//   let speed;
//   switch(animal.type){
//     case 'bird':
//       speed = animal.flyingSpeed;
//       console.log(speed)
//       break;
//     case "horse":
//       speed= animal.runningspeed;
//   }
// }

// moveAnimal({type:'bird',flyingSpeed:10})


// //type casting-----------------------


// // const userInput = <HTMLInputElement>document.getElementById('user-Input');
// const userInput = document.getElementById('user-input') as HTMLInputElement;

// if(userInput){
//   userInput.value = 'Hi there';
// }


// //Index Properties---------------------

// interface ErrorContainer{
//   [prop:string]:string
// }

// const errorBag:ErrorContainer ={

//   email:"Not a valid email",
//   username: 'Must start with a capital character!'
// }