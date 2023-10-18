# Setup

```bash
npx react-native@latest init react_native_onboarding_lottie --template react-native-template-typescript
```

- AFTER INSTALL LIBRARIES

```bash
cd ios && pod install && cd ..
```

# ESLINT

```bash
yarn add eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

- Add to package.json

```json
{
  "lint": "eslint --ext .tsx,.ts src/",
  "format": "eslint --ext .tsx,.ts src/ --fix"
}
```

- add to eslintrc.js

```js
{
  "parser": "@typescript-eslint/parser",
  "extends": ["plugin:@typescript-eslint/recommended"],
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module"
  },
  // 0 = off, 1 = warn, 2 = error
  "rules": {
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-parameter-properties": 0,
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/ban-types": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-empty-function": 1
  }
}
```

# Prettier

```bash
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
```

- add to .prettierrc.js

```js
module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
};
```

- Update .eslintrc.js with:

```json
{
  "extends": ["prettier", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"]
}
```

# Add Exhaustive Deps

```bash
yarn add -D eslint-plugin-react-hooks
```

- add to eslintrc.js

```js
{
  "plugins": [
    // ...
    "react-hooks"
  ],
  "rules": {
    // ...
    "react-hooks/rules-of-hooks": "error", // For checking rules of hooks
    "react-hooks/exhaustive-deps": "warn" // For checking hook dependencies
  }
}
```

# Add Husky ( it required updated node version ~ 16.16 > )

```bash
yarn add -D lint-staged husky
```

- run

```bash
npx husky install
```

- Add precommit

```bash
npx husky add .husky/pre-commit "npx --no-install lint-staged"

```

- Add lint-staged script to package.json

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "npm run lint",
      "npm run unit-test" // example
    ]
  }
}
```

- Add lint staged library

```bash
yarn add -D lint-staged
```

# Add Organizing Imports

```bash
yarn add -D eslint-plugin-import
```

- update .eslintrc.js:

```js
module.exports = {
  //... existing
  plugins: [...(existing plugins), 'import'],
  rules: {
    // this is for sorting WITHIN an import
    'sort-imports': ['error', {ignoreCase: true, ignoreDeclarationSort: true}],
    // this is for sorting imports
    'import/order': [
      'error',
      {
        groups: [
          ['external', 'builtin'],
          'internal',
          ['sibling', 'parent'],
          'index',
        ],
        pathGroups: [
          {
            pattern: '@(react|react-native)',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@src/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal', 'react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
```

# Add @alias

```bash
yarn add --dev babel-plugin-module-resolver
```

```json
//tsconfig.json
{
  // ...others
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      //We will have to add the same thing in babel.config.js
      "@/*": ["src/*"]
    }
    //other options
  }
  //other configs
}
```

```js
// babel.config.js
module.exports = {
  // ...others
  plugins: [
    // ...others,
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          // This has to be mirrored in tsconfig.json
          '^@/(.+)': './src/\\1',
        },
      },
    ],
  ],
};
```

<!--  -->

# Add react navigation ( run: pod install )

```bash
yarn add @react-navigation/native react-native-screens react-native-safe-area-context
```

```bash
yarn add @react-navigation/native-stack
```

# Add NativeWind

```bash
yarn add nativewind
```

```bash
yarn add -D tailwindcss@3.3.2
```

- run:

```bash
npx tailwindcss init
```

- add folders that will use tailwind (tailwind.config.js)

```js
module.exports = {
  // ...
  content: ['./src/App.{js,jsx,ts,tsx}', './src/screens/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  // ...
};
```

- add to babel.config.js

```js
module.exports = {
  // ...
  plugins: ["nativewind/babel", ...(other plugins)],
}
```

- for typescript projects, create: app.d.ts, and add:

```ts
/// <reference types="nativewind/types" />
```
