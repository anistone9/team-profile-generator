const generateHTML = team =>

const generateManager = manager => {
    
}

    `<!DOCTYPE html>
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

        ul {
            max-width: 400px;
            margin: 5% 0;
            display: block;
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

        */ @media screen and (max-width: 768px) {
        main,
        nav {
            flex-direction: column;
        }
    }
    </style>
  </head>

  <body>
    <header>
      <h1>My Software Engineering Team</h1>
    </header>

    <main>
      <div class="teammates">
        <section class="card">
          <h2>${name}
            <p>${position}</p>
          </h2>
          <ul class="list-group">
            <li class="list-group-item">${id}: </li>
            <li class="list-group-item">${email}: </li>
            <li class="list-group-item">${office}: </li>
          </ul>
        </section>

        <section class="card">
          <h2>${name}
            <p>${position}</p>
          </h2>
          <ul class="list-group">
            <li class="list-group-item">${id}: </li>
            <li class="list-group-item">${email}: </li>
            <li class="list-group-item">${github}: </li>
          </ul>
        </section>

        <section class="card">
          <h2>${name}
            <p>${position}</p>
          </h2>
          <ul class="list-group">
            <li class="list-group-item">${id}: </li>
            <li class="list-group-item">${email}: </li>
            <li class="list-group-item">${github}: </li>
          </ul>
        </section>

        <section class="card">
          <h2>${name}
            <p>${position}</p>
          </h2>
          <ul class="list-group">
            <li class="list-group-item">${id}: </li>
            <li class="list-group-item">${email}: </li>
            <li class="list-group-item">${github}: </li>
          </ul>
        </section>

        <section class="card">
            <h2>${name}
                <p>${position}</p>
            </h2>
            <ul class="list-group">
                <li class="list-group-item">${id}: </li>
                <li class="list-group-item">${email}: </li>
                <li class="list-group-item">${github}: </li>
              </ul>
          </section>
      </div>
    </main>

  </body>
</html>`;