import { compat } from './eslint.config.mjs';

export default [
	...compat.extends('xo-react', 'plugin:prettier/recommended'),
	{
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',

			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},

		rules: {
			'react/react-in-jsx-scope': 'off',
			'react/require-default-props': 'off',
			'react/no-unused-prop-types': 'off',
			'react/prop-types': 'off',
			'react/boolean-prop-naming': 'off',
		},
	},
];
