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
    validate: (ans) => /^[A-Z]/.test(ans),
  },
  {
    type: 'confirm',
    name: 'haveProps',
    message: 'Is it have props?',
    initial: true,
  },
  {
    type: 'confirm',
    name: 'needTests',
    message: 'Do you need a Test?',
    initial: true,
  },
  {
    type: 'confirm',
    name: 'needStories',
    message: 'Do you need a Storybook?',
    initial: true,
  },
];
