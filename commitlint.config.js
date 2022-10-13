module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['scope-empty-exceptions', 'workspace-scopes'],
  rules: {
    'scope-empty': [2, 'never', []],
    'scope-enum': [2, 'always', ['all']],
  },
};