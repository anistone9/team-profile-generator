const Engineer = require('../lib/Engineer');

describe('engineerMethods', () => {

    describe('getName', () => {
        it('should return the engineer name', () => {
            const engineer = new Engineer('Tester3', 3,'engineer@email.com','testerhub');
            expect(engineer.getName()).toBe('Tester3');
        });
    });

    describe('getID', () => {
        it('should return the engineer ID', () => {
            const engineer = new Engineer('Tester3', 3,'engineer@email.com','testerhub');
            expect(engineer.getID()).toBe(3);
        });
    });

    describe('getEmail', () => {
        it('should return the engineer email', () => {
            const engineer = new Engineer('Tester3', 3,'engineer@email.com','testerhub');
            expect(engineer.getEmail()).toBe('engineer@email.com');
        });
    });

    describe('getGithub', () => {
        it('should return the engineer github username', () => {
            const engineer = new Engineer('Tester3', 3,'engineer@email.com','testerhub');
            expect(engineer.getGithub()).toBe('testerhub');
        });
    });

    describe('getRole', () => {
        it('should return engineer', () => {
            const engineer = new Engineer;
            expect(engineer.getRole()).toBe('Engineer');
        });
    });    
})