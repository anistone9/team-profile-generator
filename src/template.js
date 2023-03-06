//Template literal for each role, pulling information from index.js
const generateManager = function (manager) {
    return `<section class="card">
    <h2>${manager.name}
      <p>Manager</p>
    </h2>
    <p class="list-group-item">ID: ${manager.id}</p>
    <p class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
    <p class="list-group-item">Office Number: ${manager.officeNumber}</p>
  </section>`;
}

const generateEngineer = function (engineer) {
    return `<section class="card">
    <h2>${engineer.name}
        <p>Software Engineer</p>
    </h2>
    <p class="list-group-item">ID: ${engineer.id}</p>
    <p class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
    <p class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}/" target="_blank">${engineer.github}</a></p>
    </section>`;
}

const generateIntern = function (intern) {
    return `<section class="card">
    <h2>${intern.name}
      <p>Intern</p>
    </h2>
    <p class="list-group-item">ID: ${intern.id}</p>
    <p class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
    <p class="list-group-item">School: ${intern.school}</p>
  </section>`;
}

//Looping through team array to create the card for each team member
const generateTeam = team => {
    teamArray = [];

    for (let i = 0; i < team.length; i++) {
        const employee = team[i];
        let employeeCard = '';
        const position = employee.getRole();

        if (position == "Manager") {
            employeeCard = generateManager(employee);
        } else if (position == "Engineer") {
            employeeCard = generateEngineer(employee);
        } else if (position == "Intern") {
            employeeCard = generateIntern(employee);
        }
        teamArray.push(employeeCard);
    }
    let employeeCards = teamArray.join('');
    return generateHTML(employeeCards);
}

const generateHTML = employeeCards => {
    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Team Profile Generator</title>

    <style>
        * {
            box-sizing: border-box;
        }

        body {
            font-family: Arial;
            margin: 0;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            justify-content: flex-start;
        }

        header {
            padding: 40px;
            text-align: center;
            background: #13293d;
            color: #fff;
        }

        main {
            display: flex;
            flex-wrap: wrap;
            flex-grow: 1;
        }

        h2 {
            margin: 0 0 10% 0;
            background: #13293d;
            color: #fff;
        }

        .list-group-items {
            padding: 20px 20px 10px 30px;
        }

        .teammates {
            flex: 4;
            background-color: #dcdcdc;
            padding: 50px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            align-items: flex-start;
        }

        .card {
            border-style: groove;
            background-color: #c9cdd1;
            border-width: 1px;
            padding: 10px;
            flex: 0 0 300px;
            box-shadow: 10px 10px 5px #aaaaaa;
            margin: 20px;
        }

        .card h2 {
            text-align: left;
            padding: 20px 20px 5px 20px;
        }

        .card p {
            text-align: left;
        }

    </style>
  </head>

  <body>
    <header>
      <h1>My Software Engineering Team</h1>
    </header>

    <main>
      <div class="teammates">
      ${employeeCards}
      </div>
    </main>

  </body>
</html>`;
}

module.exports = generateTeam;