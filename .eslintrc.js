module.exports = {
  extends: require.resolve('@umijs/lint/dist/config/eslint'),
  rules: {
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-unused-expressions': 0,
    'guard-for-in': 0,
    'no-promise-executor-return': 0,
    'react-hooks/rules-of-hooks': 0,
  },
};
