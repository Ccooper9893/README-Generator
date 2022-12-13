// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != 'none') {
  return `![Badge image](https://img.shields.io/badge/license-${license}-green})`
  } else {
  return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT'
    case 'Apache_License_2.0':
      return 'https://opensource.org/licenses/Apache-2.0'
    case 'GPL_3.0':
      return 'https://opensource.org/licenses/GPL-3.0'
    case 'Mozilla_Public_License_2.0':
      return 'https://opensource.org/licenses/MPL-2.0'
    case 'none':
      return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, link) {
  if (license != 'none') {
  return `This application is covered under the ${license} license.
  For more information about this license please visit ${link}`
  } else {
    return `This application is not covered under any license.`
  }
}

// If there are no screenshots for usage section return an empty string
function renderScreenshot(screenshot) {
  if (screenshot == '') {
    return ''
  } else {
    return `![Screenshots](${screenshot})`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //Calling functions to generate license badge, link, and section. Also calls function for screenshots if included
  let lBadge = renderLicenseBadge(data.license);
  let lLink = renderLicenseLink(data.license);
  let lSection = renderLicenseSection(data.license, lLink);
  let screenshot = renderScreenshot(data.screenshot);
  return `# ${data.title}
  ${lBadge}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}<br><br>
  ${screenshot}

  ## Contribution
  ${data.contribution}

  ## Testing
  ${data.testing}

  ## License
  ${lSection}

  ## Questions
  For questions or concerns please contact me via email or Github.
  - Github: https://github.com/${data.username}
  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;
