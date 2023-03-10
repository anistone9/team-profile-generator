# team-profile-generator
Node.js Command-Line Application to Generate an HTML Webpage Using Object-Oriented Programming

## Description   
This command-line application allows users to general an HTML webpage that displays a summary of their team, based on information provided via command-line prompts. The generated file includes a title header, a manager card, and team member cards. Each card has required fields based on the employee role.    

# Table of Contents   
- [Description](#description)   
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [Credits](#credits)  
- [License](#license)     

## Installation   
Clone the repository in GitHub, and install Node.js. Additionally, this application requires fs module and inquirer (version 8.2.4 used in this case), as well as jest (npm install -D jest).      

# Usage    
To use this Team-Profile Generator, open the integrated terminal in Visual Studio Code, and type 'node index.' Next, follow the suite of questions and provide answers for each one. When done going through all the questions, a message for 'Successfully created index.html file' is displayed. The generated HTML file includes a header and a card for each team member. Each card includes a title, employee ID, and email address. The Engineer cards also include the GitHub username and link, while the Intern card includes the name of the school. Clicking the email address in a card opens the default email program, with the card email address in the TO field. Clicking the GitHub link opens that GitHub profile in a new tab.    

## Demo   

https://user-images.githubusercontent.com/58886869/223930314-ff6aea6d-18e0-499c-aadd-1d84d056f452.mp4

https://drive.google.com/file/d/1uD2v4K8ggvHStrBAn4sawFc32u8vIuXH/view

## Credits   
University of Arizona Coding Bootcamp resources (mock-up and lesson examples) 

## License  

MIT License

Copyright (c) 2023 anistone9

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.  
