module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module"
  },
  env: {
    es6: true,
    browser: true
  },
  plugins: ["prettier", "svelte3"],
  extends: ["prettier"],
  overrides: [
    {
      files: ["**/*.svelte"],
    }
  ],
  rules: {
    "no-unused-vars": [
      "error",
      {
        args: "after-used",
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_"
      }
    ],
    "prettier/prettier": 1
  }
}