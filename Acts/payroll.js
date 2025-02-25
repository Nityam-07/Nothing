const Employee = require('./employee');

class Payroll {
    constructor() {
        this.employeeList = [];
    }

    addEmployee(employee) {
        this.employeeList.push(employee);
    }

    printEmployees() {
        this.employeeList.forEach(employee => {
            console.log(employee.toString());
        });
    }
}

const payroll = new Payroll();

const emp1 = new Employee("John Doe", "IT", 75000);
const emp2 = new Employee("Jane Smith", "HR", 65000);

payroll.addEmployee(emp1);
payroll.addEmployee(emp2);

payroll.printEmployees();
