module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier', 'import'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/no-unused-modules': 'error',
    'import/no-relative-parent-imports': 'error',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
        groups: ['external', 'internal'],
        pathGroups: [
          {
            pattern: '@libs/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@apps/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '**/domain/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '**/infra/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '**/application/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '**/interface/**',
            group: 'internal',
            position: 'after',
          },
        ],
      },
    ],
  },
  settings: {
    'import/internal-regex': '^@apps|@libs/',
  },
};
