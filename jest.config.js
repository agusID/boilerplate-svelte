const svelteConfig = require('./svelte.config')

module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/cypress/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.svelte$': 'jest-transform-svelte',
    '^.+\\.js$': 'babel-jest',
  },
  globals: {
    svelte: {
      preprocess: svelteConfig.preprocess,
      compilerOptions: {
        accessors: true,
      },
    },
  },
  moduleFileExtensions: ['ts', 'js', 'svelte'],
}
