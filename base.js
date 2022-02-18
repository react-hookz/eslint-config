module.exports = {
  extends: [
    'airbnb-base',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': ['error'],
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
    'no-plusplus': 'off',
    'consistent-return': 'off',
    'no-underscore-dangle': ['error', { allowFunctionParams: true }],

    'eslint-comments/disable-enable-pair': 'off',

    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true,
      },
    ],

    'promise/always-return': 'off',

    'unicorn/no-lonely-if': 'off',
    'unicorn/explicit-length-check': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-for-loop': 'off',
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
          kebabCase: true,
        },
        ignore: ['(..md)'],
      },
    ],
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        // Allow CJS until ESM support improves
        'unicorn/prefer-module': 'off',
      },
    },
  ],
};
