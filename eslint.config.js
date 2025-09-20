// eslint.config.js
const js = require('@eslint/js');

module.exports = [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'script',
      globals: {
        module: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        process: 'readonly',
      },
    },
  },
  {
    // include both root and folder-based tests
    files: ['**/*.test.js', 'index.test.js', 'test/**/*.js'],
    languageOptions: {
      globals: { jest: true, describe: true, test: true, expect: true, beforeAll: true, afterAll: true },
    },
  },
];
