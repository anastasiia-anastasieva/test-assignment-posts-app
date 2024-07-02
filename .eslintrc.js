module.exports = {
    // Environment settings indicating the environments the code is expected to run in
    env: {
        browser: true,  // Specifies that the code is expected to run in a browser environment
        es2021: true,   // Enables ES2021 global variables and syntax
    },
    // Extending predefined configurations for linting rules
    extends: [
        'plugin:react/recommended',                 // Recommended rules for React
        'airbnb',                                   // Airbnb's ESLint rules
        'plugin:@typescript-eslint/recommended',    // Recommended rules for TypeScript
        'plugin:prettier/recommended',              // Recommended rules for Prettier to integrate with ESLint
        'plugin:tailwindcss/recommended',           // Recommended rules for Tailwind CSS
    ],
    // Specifying the parser for TypeScript
    parser: '@typescript-eslint/parser',    // Parser for TypeScript
    parserOptions: {
        ecmaFeatures: {
            jsx: true,  // Enable JSX parsing
        },
        ecmaVersion: 12,    // Specifies the ECMAScript version to be used
        sourceType: 'module',   // Allows the use of imports
    },
    // Defining plugins to be used by ESLint
    plugins: [
        'react',    // Plugin for React-specific linting rules
        '@typescript-eslint',   // Plugin for TypeScript-specific linting rules
        'tailwindcss',  // Plugin for Tailwind CSS linting rules
    ],
    // Custom rules configuration
    rules: {
        // Allows the use of JSX in files with .tsx extension
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        // Disables the rule requiring explicit return types on functions and class methods
        '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
    // Settings for React plugin
    settings: {
        react: {
            version: 'detect',  // Automatically detects the React version to use
        },
    },
};
