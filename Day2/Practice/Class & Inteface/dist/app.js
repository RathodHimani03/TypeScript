"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employee = [];
    }
    describe() {
        console.log('Depatment:' + this.name);
    }
    addemployee(employee) {
        this.employee.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employee.length);
        console.log(this.employee);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
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
    addemployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employee.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReport() {
        console.log(this.reports);
    }
}
const it = new ITDepartment('d1', ['Max']);
it.addemployee("ashu");
it.addemployee("mihir");
console.log(it.admins);
console.log(it);
console.log(it.name);
it.describe();
const accounting = new AccountingDepartment('d2', []);
accounting.mostRecentReport = 'ashutosh';
console.log(accounting.mostRecentReport);
accounting.addReport("Something went wrong...........");
accounting.printReport();
accounting.addemployee('ashu');
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map