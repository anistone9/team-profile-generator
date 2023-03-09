const Employee = require('../lib/Employee');

describe('employeeMethods', () => {

    describe('getName', () => {
        it('should return the employee name', () => {
            const employee = new Employee('Tester');
            const employeeName = employee.getName();
            expect(employeeName).toEqual('Tester');
        });
    });

    describe('getID', () => {
        it('should return the employee ID', () => {
            const employee = new Employee(001);
            const employeeID = employee.getID();
            expect(employeeID).toEqual(001);
        });
    });

    describe('getEmail', () => {
        it('should return the employee email', () => {
            const employee = new Employee('tester@email.com');
            const employeeEmail = employee.getEmail();
            expect(employeeEmail).toEqual('tester@email.com');
        });
    });

    describe('getRole', () => {
        it('should return Employee', () => {
            const employee = new Employee;
            const employeeRole = employee.getRole();
            expect(employeeRole).toEqual('Employee');
        });
    });
})