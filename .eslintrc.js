module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-no-bind': ['error', {
      allowArrowFunctions: true,
      allowBind: false,
      ignoreRefs: true,
    }],
    'react/no-did-update-set-state': 'off',
    'react/no-unknown-property': 'off',
    'react/no-unused-prop-types': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/jsx-filename-extension': 'off',
    'linebreak-style': 'off',
    quotes: 'off',
    'import/prefer-default-export': 'off',
    'eol-last': 'off',
    semi: 'off',
    'implicit-arrow-linebreak': 'off',
    'eslint-disable-next-line': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    'no-undef': 'off',
  },
};
