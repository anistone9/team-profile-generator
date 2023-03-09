const Manager = require('../lib/Manager');

describe('managerMethods', () => {

    describe('getName', () => {
        it('should return the manager name', () => {
            const manager = new Manager('Tester2', 2, 'manager@email.com', 43);
            expect(manager.getName()).toBe('Tester2');
        });
    });

    describe('getID', () => {
        it('should return the manager ID', () => {
            const manager = new Manager('Tester2', 2, 'manager@email.com', 43);
            expect(manager.getID()).toBe(2);
        });
    });

    describe('getEmail', () => {
        it('should return the manager email', () => {
            const manager = new Manager('Tester2', 2, 'manager@email.com', 43);
            expect(manager.getEmail()).toBe('manager@email.com');
        });
    });

    describe('getOfficeNumber', () => {
        it('should return the manager office number', () => {
            const manager = new Manager('Tester2', 2, 'manager@email.com', 43);
            expect(manager.getOfficeNumber()).toBe(43);
        });
    });

    describe('getRole', () => {
        it('should return Manager', () => {
            const manager = new Manager;
            expect(manager.getRole()).toBe('Manager');
        });
    });
})