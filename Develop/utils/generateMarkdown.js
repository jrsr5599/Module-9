// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (data.licenses === "MIT License") 
    data.licenses = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)
  ## Installation
  ${data.installation} 
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contributing}
    ## Tests
  ${data.tests}
  ## Questions
  Contact email: ${data.email}\n
  GitHub: [${data.github}](https://github.com/${data.github})\n
  ${data.addlquestions}
  ## License
  
  This project is licensed under the terms of the ${data.license} license.
`;

}

module.exports = generateMarkdown;
