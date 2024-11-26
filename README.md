<div align="center">

# @react-hookz/eslint-config

eslint configuration files used in @react-hookz projects

[![NPM Version](https://flat.badgen.net/npm/v/@react-hookz/eslint-config)](https://www.npmjs.com/package/@react-hookz/eslint-config)
[![NPM Downloads](https://flat.badgen.net/npm/dm/@react-hookz/eslint-config)](https://www.npmjs.com/package/@react-hookz/eslint-config)
[![NPM Dependents](https://flat.badgen.net/npm/dependents/@react-hookz/eslint-config)](https://www.npmjs.com/package/@react-hookz/eslint-config)
[![Build](https://img.shields.io/github/actions/workflow/status/react-hookz/eslint-config/CI.yml?branch=master&style=flat-square)](https://github.com/react-hookz/eslint-config/actions)

</div>

## Installation

This package does not install `eslint`, `prettier`, or `eslint-plugin-prettier`, so you need to
install them manually.

```shell
yarn add -D @react-hookz/eslint-config eslint eslint-plugin-prettier prettier
```

## Usage

This config is expected to be used with ESLint 8.3+, as it utilizes flat config.

Import sub-configs you are interested in, spreading them into your config. All configs are
guaranteed to be an array.

Some configs, like `jest` and `vitest`, require extra dependencies to be installed. You can find the
required dependencies in the respective READMEs.

```js
import baseConfig from '@react-hookz/eslint-config/base.js';
import reactConfig from '@react-hookz/eslint-config/react.js';
import vitestConfig from '@react-hookz/eslint-config/vitest.js';

export default [
	...baseConfig,
	...reactConfig,
	...vitestConfig,
	{
		rules: {
			// your own overrides
		},
	},
];
```
