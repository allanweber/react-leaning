# Code Style

## Dependencies

`npm install --save-dev babel-eslint eslint eslint-config-airbnb eslint-plugin-react eslint-config-prettier eslint-plugin-prettier prettier`

## .eslintrc

``` json
{
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "allowImportExportEverywhere": false,
    "codeFrame": false
  },
  "extends": ["eslint:recommended", "prettier"],
  "plugins": ["react", "prettier"],
  "env": { "browser": true, "jest": true },
  "rules": {
    "max-len": ["error", { "code": 100 }],
    "prefer-promise-reject-errors": ["off"],
    "react/jsx-filename-extension": ["off"],
    "react/jsx-closing-bracket-location": [1, "after-props"],
    "react/prop-types": ["off"],
    "no-return-assign": ["off"],
    "react/prefer-stateless-function": ["off"],
    "react/react-in-jsx-scope": "off",
    "no-unused-vars": "warn",
    "react/jsx-one-expression-per-line": ["off"],
    "react/button-has-type": "warn"
  }
}
```

## .prettierrc

``` json
{
  "printWidth": 100,
  "tabWidth": 2,
  "singleQuote": true,
  "jsxBracketSameLine": true,
  "trailingComma": "es5"
}
```
