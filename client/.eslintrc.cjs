module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb',
    'airbnb-typescript',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'tailwindcss',
    'import-access',
    'unused-imports',
    'import',
    '@limegrass/import-alias',
  ],
  settings: {
    'import/resolver': {
      typescript: [],
    },
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/react-in-jsx-scope': 'off',
    'import/no-default-export': 'error',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',

    'import-access/jsdoc': [
      'error',
      {
        indexLoophole: true,
        filenameLoophole: false,
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'axios',
            message: 'Use @lib/axios',
          },
        ],
      },
    ],
    'unused-imports/no-unused-imports': 'error',
    '@limegrass/import-alias/import-alias': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'object',
          'type',
          'index',
        ],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'react-router-dom',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'clsx',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@/components/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/features/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/lib/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/hooks/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/stores/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/routes/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/providers/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/utils/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/config/**',
            group: 'internal',
            position: 'before',
          },
        ],
      },
    ],
  },
};
