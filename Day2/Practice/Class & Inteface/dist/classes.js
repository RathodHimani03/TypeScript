"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employee = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addemployee(employee) {
        this.employee.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employee.length);
        console.log(this.employee);
    }
}
Department.fiscalYear = 2000;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log(`ItDepartment Department - Id : ` + this.id);
    }
}
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("Now report found.");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please Enter valid value");
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (AccountingDepartment.instnce) {
            return this.instnce;
        }
        this.instnce = new AccountingDepartment('d2', []);
        return this.instnce;
    }
    addemployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employee.push(name);
    }
    describe() {
        console.log(`Accounting Department - Id : ` + this.id);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReport() {
        console.log(this.reports);
    }
}
console.log(Department.createEmployee('Himani'));
console.log(Department.fiscalYear);
const it = new ITDepartment('d1', ['Max']);
it.addemployee("ashu");
it.addemployee("mihir");
console.log(it.admins);
console.log(it);
console.log(it.name);
it.describe();
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);
accounting.mostRecentReport = 'ashutosh';
console.log(accounting.mostRecentReport);
accounting.addReport("Something went wrong...........");
accounting.printReport();
accounting.addemployee('ashu');
accounting.printEmployeeInformation();
accounting.describe();
//# sourceMappingURL=classes.js.map