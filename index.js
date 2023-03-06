//Import modules and dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateTeam = require('./src/Template');

//Variable for the team array
const team = [];

//Functions to generate information for each role, and add it to the team array
function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is your office number?',
        },
    ])
        .then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
            team.push(manager);
            buildTeam();
        })
}

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the name of the engineer',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the employee ID',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the email address',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter the github username',
        },
    ])
        .then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            team.push(engineer);
            buildTeam();
        })
}

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the name of the intern',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the intern ID',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the email address',
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter the school name',
        },
    ])
        .then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            team.push(intern);
            buildTeam();
        })
}

//Function calling each role function or the generateHTML function (breaking the loop) 
function buildTeam() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'continue',
                message: 'Would you like to add additional team members?',
                choices: ['Engineer', 'Intern', 'done'],
            },
        ])
        .then((answers) => {
            if (answers.continue == 'Engineer') {
                addEngineer();
            } else if (answers.continue == 'Intern') {
                addIntern();
            } else if (answers.continue == 'done') {
                const htmlPageContent = generateTeam(team);

                fs.writeFile('./dist/index.html', htmlPageContent, (err) =>
                    err ? console.log(err) : console.log('Successfully created index.html')
                );
            }
        });
}

addManager();