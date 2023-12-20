// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Write a description for the project:',
      },
      {
        type: 'input',
        name: 'install',
        message: 'What are install instructions?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'If any, what are the contribution guidelines?',
      },
      {
        type: 'input',
        name: 'instructions',
        message: 'If any, what are the test instructions?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'If you have one, choose project license:',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 
                  'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 
                  'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 
                  'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 
                  'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 
                  'Mozilla Public License 2.0', 'The Unlicense']
      },
      {
        type: 'input',
        name: 'username',
        message: 'Enter github username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter email address:',
      },
]



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
}

// TODO: Create a function to initialize app
function init() {
    const userResponse = inquirer.prompt(questions);
    const markdown = generateMarkdown(userResponse)
    writeFile('GeneratedREADME.md', markdown);
}

// Function call to initialize app
init();
