module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true, // Add Node.js environment for broader compatibility
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended', // Add Prettier plugin to avoid conflicts with ESLint
  ],
  ignorePatterns: ['!.storybook'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'], // Add Prettier plugin
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off', // Disable React global requirement
    'react/no-unescaped-entities': 'off', // Disable quote escaping error
    '@typescript-eslint/no-unused-vars': 'warn', // Warn about unused variables
    'prettier/prettier': 'warn', // Enable Prettier rules
    'react-hooks/rules-of-hooks': 'error', // Enforce rules of hooks
    'react-hooks/exhaustive-deps': 'warn', // Warn about missing dependencies in hooks
  },
};