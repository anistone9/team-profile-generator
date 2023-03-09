const Engineer = require('../lib/Engineer');

describe('engineerMethods', () => {

    describe('getName', () => {
        it('should return the engineer name', () => {
            const engineer = new Engineer('Tester3');
            const engineerName = engineer.getName();
            expect(engineerName).toEqual('Tester3');
        });
    });

    describe('getID', () => {
        it('should return the engineer ID', () => {
            const engineer = new Engineer(003);
            const engineerID = engineer.getID();
            expect(engineerID).toEqual(003);
        });
    });

    describe('getEmail', () => {
        it('should return the engineer email', () => {
            const engineer = new Engineer('engineer@email.com');
            const engineerEmail = engineer.getEmail();
            expect(engineerEmail).toEqual('engineer@email.com');
        });
    });

    describe('getRole', () => {
        it('should return engineer', () => {
            const engineer = new Engineer;
            const engineerRole = engineer.getRole();
            expect(engineerRole).toEqual('Engineer');
        });
    });

    describe('github', () => {
        it('should return the engineer github username', () => {
            const engineer = new Engineer('testerhub');
            const engineerGitHub = engineer.github();
            expect(engineerGitHub).toEqual('testerhub');
        });
    });
})