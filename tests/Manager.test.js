const Manager = require('../lib/Manager');

describe('managerMethods', () => {

    describe('getName', () => {
        it('should return the manager name', () => {
            const manager = new Manager('Tester2');
            const managerName = manager.getName();
            expect(managerName).toEqual('Tester2');
        });
    });

    describe('getID', () => {
        it('should return the manager ID', () => {
            const manager = new Manager(002);
            const managerID = manager.getID();
            expect(managerID).toEqual(002);
        });
    });

    describe('getEmail', () => {
        it('should return the manager email', () => {
            const manager = new Manager('manager@email.com');
            const managerEmail = manager.getEmail();
            expect(managerEmail).toEqual('manager@email.com');
        });
    });

    describe('getRole', () => {
        it('should return Manager', () => {
            const manager = new Manager;
            const managerRole = manager.getRole();
            expect(managerRole).toEqual('Manager');
        });
    });

    describe('getOfficeNumber', () => {
        it('should return the manager office number', () => {
            const manager = new Manager(43);
            const managerOffice = manager.getOfficeNumber();
            expect(managerOffice).toEqual(43);
        });
    });
})