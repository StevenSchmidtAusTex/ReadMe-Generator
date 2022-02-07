// If there is no license, return an empty string
function renderLicenseBadge(license) {
switch (license) {
    case 'Apache':
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case 'GNU General Public License(GPL)':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case 'Mozilla':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    default:
      return '';
}}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GNU General Public License(GPL)':
      return 'https://opensource.org/licenses/gpl-3.0';
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Mozilla':
      return 'https://opensource.org/licenses/MPL-2.0';
    default:
      return '';
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'Apache':
      return `[Apache License 2.0](${renderLicenseLink(license)})`;
    case 'GNU General Public License(GPL)':
        return `[GNU General Public License (GPL)](${renderLicenseLink(license)})`;
    case 'MIT':
      return `[MIT License](${renderLicenseLink(license)})`;
    case 'Mozilla':
      return `[Mozilla Public License 2.0](${renderLicenseLink(license)})`;
    default:
        return '';
    }
}

// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [Contributing](#contributing)
  [Tests](#tests)
  [Questions](#questions)
  [License](#license)

  <a name='installation'></a>
  ##Installation

  <a name='usage'></a>
  ## Usage
  ${data.usage}

  <a name='contributing'></a>
  ## Contributing
  ${data.contribution}

  <a name='tests'></a>
  ## Tests
  ${data.test}

  <a name='questions'></a>
  ## Questions
  Please contact me with any questions at ${data.email}.
  Or view my github at ${data.github}.

  <a name='license'></a>
  ## License
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
