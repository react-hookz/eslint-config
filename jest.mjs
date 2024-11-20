import { compat } from './eslint.config.mjs';

export default [
	...compat.extends('plugin:jest/recommended', 'plugin:prettier/recommended'),
	{
		rules: {
			'max-nested-callbacks': ['warn', 10],
		},
	},
];
