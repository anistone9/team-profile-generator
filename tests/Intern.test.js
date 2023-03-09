const Intern = require('../lib/Intern');


describe('internMethods', () => {

    describe('getName', () => {
        it('should return the intern name', () => {
            const intern = new Intern('Tester4');
            const internName = intern.getName();
            expect(internName).toEqual('Tester4');
        });
    });

    describe('getID', () => {
        it('should return the intern ID', () => {
            const intern = new Intern(004);
            const internID = intern.getID();
            expect(internID).toEqual(004);
        });
    });

    describe('getEmail', () => {
        it('should return the intern email', () => {
            const intern = new Intern('intern@email.com');
            const internEmail = intern.getEmail();
            expect(internEmail).toEqual('intern@email.com');
        });
    });

    describe('getRole', () => {
        it('should return intern', () => {
            const intern = new Intern;
            const internRole = intern.getRole();
            expect(internRole).toEqual('Intern');
        });
    });

    describe('getSchool', () => {
        it('should return the intern school', () => {
            const intern = new Intern('UofA');
            const internSchool = intern.getSchool();
            expect(internSchool).toEqual('UofA');
        });
    });
})