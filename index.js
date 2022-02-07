const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter project title: '
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter project description: '
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions: ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information: ',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution guidelines',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter test instructions: ',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select one of the following licenses',
        choices: ['Apache', 'GNU General Public License(GPL)', 'MIT', 'Mozilla:']
    },
    {
        type:'input',
        name: 'email',
        message: 'Enter your email address: '
    }
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('Data written to file.'));
}

function init() {
    let fileName = 'readme.md';

        inquirer.prompt(questions)
            .then((response) => {
                console.log(response);
                writeToFile(fileName, response);
            })
}
init();