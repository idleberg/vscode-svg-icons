module.exports = {
  root: true,
  env: {
      node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:json/recommended'
  ],
  ignorePatterns: [
    'index.js'
  ]
};
