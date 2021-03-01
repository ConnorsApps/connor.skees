'use strict';

// Pull in our modules
const chalk = require('chalk');
const boxen = require('boxen');
const fs = require('fs');
const path = require('path');

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
};

// Text + chalk definitions
const data = {
  name: chalk.white('               Connor Skees'),
  handle: chalk.white('connor.skees'),
  work: chalk.white('Chief Technology Officer at 3BApps LLC'),
  portfolio:
    chalk.gray('https://connors-resume.web.app/') + chalk.blue('projects'),
  github: chalk.gray('https://github.com/') + chalk.green('ConnorsApps'),
  linkedin:
    chalk.gray('https://linkedin.com/in/') +
    chalk.red('connor-skees-9005a1124'),
  npx:
    chalk.red('npx') +
    ' ' +
    chalk.white('connor.skees  (via GitHub Package Registry)'),
  labelWork: chalk.white.bold('       Work:'),
  labelPortfolio: chalk.white.bold('   Portfolio:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:'),
};

// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name} / ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const portfolio = `${data.labelPortfolio}  ${data.portfolio}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
// const webing = `${data.labelWeb}  ${data.web}`; todo
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + // data.name + data.handle
  newline +
  newline + // Add one whole blank line
  working +
  newline + // data.labelWork + data.work
  githubing +
  newline + // data.labelGitHub + data.github
  linkedining +
  newline +
  portfolio +
  newline +
  newline + // data.labelWeb + data.web
  carding; // data.labelCard + data.npx

fs.writeFileSync(
  path.join(__dirname, 'bin/output'),
  chalk.green(boxen(output, options))
);
