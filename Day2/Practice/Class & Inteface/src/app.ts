class Department {
    //  private readonly id:string
    // private name:string;
    protected  employee: string[] = []

    constructor(private readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n;
    }

    describe(this: Department) {
        // this.id = 'dfsf'//Cannot assign to 'id' because it is a read-only property.
        console.log('Depatment:' + this.name)
    }

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


}

class AccountingDepartment extends Department{

    private lastReport:string;


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
    constructor(id:string, private reports:string[]){
        super(id,'Accounting')
        this.lastReport = reports[0]
    }

    //override the base class method
    addemployee(name:string){
        if(name === 'Max'){
            return
        }
        this.employee.push(name)
    }

    addReport(text:string){
        this.reports.push(text)
        this.lastReport = text
    }

    printReport(){
        console.log(this.reports)
    }
}


const it = new ITDepartment('d1', ['Max']);

it.addemployee("ashu")
it.addemployee("mihir")
console.log(it.admins)
console.log(it)
// D1.employee[2] = "kuldeep"
console.log(it.name)
it.describe()

const accounting = new AccountingDepartment('d2',[]);
accounting.mostRecentReport = 'ashutosh'
console.log(accounting.mostRecentReport)
accounting.addReport("Something went wrong...........");
accounting.printReport();
accounting.addemployee('ashu')
accounting.printEmployeeInformation()


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