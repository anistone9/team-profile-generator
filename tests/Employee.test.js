const Employee = require('../lib/Employee');

describe('employeeMethods', () => {

    describe('getName', () => {
        it('should return the employee name', () => {
            const employee = new Employee('Tester', 1, 'tester@email.com');
            expect(employee.getName()).toBe('Tester');
        });
    });

    describe('getID', () => {
        it('should return the employee ID', () => {
            const employee = new Employee('Tester', 1, 'tester@email.com');
            expect(employee.getID()).toBe(1);
        });
    });

    describe('getEmail', () => {
        it('should return the employee email', () => {
            const employee = new Employee('Tester', 1, 'tester@email.com');
            expect(employee.getEmail()).toBe('tester@email.com');
        });
    });

    describe('getRole', () => {
        it('should return Employee', () => {
            const employee = new Employee;
            expect(employee.getRole()).toBe('Employee');
        });
    });
})