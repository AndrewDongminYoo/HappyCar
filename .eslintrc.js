module.exports = {
  env: {
    'jest/globals': true,
  },
  root: true,
  extends: '@react-native',
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    quotes: ['error', 'single'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'react/require-default-props': ['error'],
    'react/default-props-match-prop-types': ['error'],
    'react/sort-prop-types': ['error'],
    'prettier/prettier': 'off',
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  ignorePatterns: ['!.eslintrc.js', '!.prettierrc.js'],
};
