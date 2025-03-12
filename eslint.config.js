import js from '@eslint/js'

export default [
    {
      /**
       * Ignore the following files.
       * Please note that pluginQuasar.configs.recommended() already ignores
       * the "node_modules" folder for you (and all other Quasar project
       * relevant folders and files).
       *
       * ESLint requires "ignores" key to be the only one in this object
       */
      ignores: [
        'dist/',
        'lib/',
        'node_modules/',
        'jest.config.js'
      ]
    },
    js.configs.recommended,
    {
        languageOptions: {
          ecmaVersion: 'latest',
          sourceType: 'module',
        },
    
        // add your custom rules here
        rules: {
        }
      },
]