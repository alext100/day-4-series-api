module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  parser: "@babel/eslint-parser",
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    requireConfigFile: false,
  },
  rules: {
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "no-restricted-syntax": "off",
    "consistent-return": "off",
    "no-debugger": "off",
    "no-console": "off",
    "lines-between-class-members": "off",
    "class-methods-use-this": "off",
    "import/extensions": "off",
    "line-between-class-member": "off",
  },
};
