const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'version',
    message: 'please input your specific version',
    default: () => {
      return '0.0.1';
    },
    validate: value => {
      const pass = /^\d+\.\d+\.\d+$/i.test(value);
      return pass || 'Please enter a valid version';
    },
  },
];

inquirer.prompt(questions).then(answers => {
  const exec = require('child_process').execSync;
  exec(`yarn release -r ${answers.version}`, { stdio: 'inherit' });
});
