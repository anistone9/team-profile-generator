const Intern = require('../lib/Intern');


describe('internMethods', () => {

    describe('getName', () => {
        it('should return the intern name', () => {
            const intern = new Intern('Tester4', 4, 'intern@email.com', 'UofA');
            expect(intern.getName()).toBe('Tester4');
        });
    });

    describe('getID', () => {
        it('should return the intern ID', () => {
            const intern = new Intern('Tester4', 4, 'intern@email.com', 'UofA');
            expect(intern.getID()).toBe(4);
        });
    });

    describe('getEmail', () => {
        it('should return the intern email', () => {
            const intern = new Intern('Tester4', 4, 'intern@email.com', 'UofA');
            expect(intern.getEmail()).toBe('intern@email.com');
        });
    });

    describe('getSchool', () => {
        it('should return the intern school', () => {
            const intern = new Intern('Tester4', 4, 'intern@email.com', 'UofA');
            expect(intern.getSchool()).toBe('UofA');
        });
    });

    describe('getRole', () => {
        it('should return intern', () => {
            const intern = new Intern;
            expect(intern.getRole()).toBe('Intern');
        });
    });
})