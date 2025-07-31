// packages/config/eslint.config.js
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import globals from 'globals';

/** @type {import("eslint").Linter.FlatConfig} */
export default [
  js.configs.recommended,
  {
    plugins: {
      react: react,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // Vite/React 17+에선 필요 없음
      'react/jsx-uses-react': 'off',
    },
  },
];
