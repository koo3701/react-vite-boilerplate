module.exports = [
  {
    type: 'input',
    name: 'dir',
    message: 'Where is the directory?',
    validate: (ans) => ans.startsWith('src/'),
  },
  {
    type: 'input',
    name: 'componentName',
    message: 'What is the name of component?',
  },
  {
    type: 'confirm',
    name: 'haveProps',
    message: 'Is it have props?',
  },
];
