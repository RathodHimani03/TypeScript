// class Department {
//     //  private readonly id:string
//     // private name:string;

//     //static property
//     static fiscalYear = 2000;

//     protected  employee: string[] = []

//     constructor(protected readonly id: string, public name: string) {
//         // this.id = id;
//         // this.name = n;
//         //for using static property
//         // console.log(Department.fiscalYear);
//     }
    
//      //make static method
//      static createEmployee(name:string){
//         return {name:name}
//      }
    
//     describe(this: Department) {
//         // this.id = 'dfsf'//Cannot assign to 'id' because it is a read-only property.
//         console.log('Depatment:' + this.name)
//     }

//     addemployee(employee: string) {
//         this.employee.push(employee)
//     }

//     printEmployeeInformation() {
//         console.log(this.employee.length);
//         console.log(this.employee);
//       }
// }
abstract class Department {
    //  private readonly id:string
    // private name:string;

    //static property
    static fiscalYear = 2000;

    protected  employee: string[] = []

    constructor(protected readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n;
        //for using static property
        // console.log(Department.fiscalYear);
    }
    
     //make static method
     static createEmployee(name:string){
        return {name:name}
     }
    
   abstract describe(this: Department) :void

    addemployee(employee: string) {
        this.employee.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employee.length);
        console.log(this.employee);
      }
}

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }

    describe() {
        console.log(`ItDepartment Department - Id : `+this.id)
    }


}

class AccountingDepartment extends Department{

    private lastReport:string;
    private static instnce :AccountingDepartment;

    get mostRecentReport(){
        if(this.lastReport){
           return this.lastReport;
        }
        throw new Error("Now report found.")
    }

    set mostRecentReport(value:string){
        if(!value){
            throw new Error("Please Enter valid value")
        }
        this.addReport(value)
    }
    private constructor(id:string, private reports:string[]){
        super(id,'Accounting')
        this.lastReport = reports[0]
    }
   
    static getInstance(){
        if(AccountingDepartment.instnce){
            return this.instnce;
        }
        this.instnce = new AccountingDepartment('d2',[])
        return this.instnce;
    }


    //override the base class method
    addemployee(name:string){
        if(name === 'Max'){
            return
        }
        this.employee.push(name)
    }

     describe() {
         console.log(`Accounting Department - Id : `+this.id)
     }
    addReport(text:string){
        this.reports.push(text)
        this.lastReport = text
    }

    printReport(){
        console.log(this.reports)
    }
}

//call the static method
console.log(Department.createEmployee('Himani')) //we can call it without making instance
console.log(Department.fiscalYear)
const it = new ITDepartment('d1', ['Max']);

it.addemployee("ashu")
it.addemployee("mihir")
console.log(it.admins)
console.log(it)
// D1.employee[2] = "kuldeep"
console.log(it.name)
it.describe()

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting,accounting2)
accounting.mostRecentReport = 'ashutosh'
console.log(accounting.mostRecentReport)
accounting.addReport("Something went wrong...........");
accounting.printReport();
accounting.addemployee('ashu')
accounting.printEmployeeInformation()
accounting.describe()


// const D1 = new Department("ID1","Accounting")
// D1.addemployee("ashu")
// D1.addemployee("mihir")
// // D1.employee[2] = "kuldeep"
// console.log(D1.name)
// D1.describe()
// const accountingCopy = {describe:D1.describe}
// // accountingCopy.describe() //'Department':undefined
// const accountingCopy2 = {name:"Dummy",describe:D1.describe}
// accountingCopy2.describe()