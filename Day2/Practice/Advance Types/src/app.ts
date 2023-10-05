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


function add(a:Combinable,b:Combinable){
  if(typeof  a === 'string' || typeof b === 'string'){
    return a.toString() + b.toString();
  }
  return a + b ;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp:UnknownEmployee){

  console.log('Name:' + emp.name)

  if('privileges' in emp){
console.log('Privilege:' + emp.privileges)
  }
 if('startDate' in emp){
  console.log('privileages'+emp.startDate)
 }
}


printEmployeeInformation(e1)


class Car{

  drive(){
    console.log('Driving.......')
  }
}

class Truck{
  
  drive(){
    console.log('Driving a truck...')
  }

  loadCargo(amount: number){
    
  }
}


type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();