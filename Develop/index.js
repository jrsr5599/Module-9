// TODO: Include packages needed for this application
const inq = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title of the project.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description of the project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions for the project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Instructions, examples and images for on how to use.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Contribution instructions for other developers'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Testing protocols for the project.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email Address.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Github username.'
    },
    {
        type: 'input',
        name: 'addlquestions',
        message: 'References and Others.'
    },
    
    {
        type: 'rawlist',
        name: 'license',
        message: 'Choose a license for your project by selecting a number. Note: it is recommended that you save a separate LICENSE file in the root of the repository. Refer to https://choosealicense.com/ for further details.',
        choices: [
            'Apache license 2.0',
            'Creative Commons Zero v1.0 Universal',
            'Do What The F*ck You Want To Public License',
            'GNU General Public License v3.0',
            'ISC',
            'MIT',
            'The Unlicense'
        ],
        default: 'MIT'
        
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

// TODO: Create a function to initialize app
function init() {
    inq.prompt(questions).then((data) => {
        console.log(data)
    fs.writeFile('GeneratedREADME/GeneratedREADME.md', generateMarkdown(data),(err) => err? console.error(err) : console.log("Success!"))})
}

// Function call to initialize app
init();
