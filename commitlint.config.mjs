import { compat } from './eslint.config.mjs';

export default [
	...compat.extends('@commitlint/config-conventional'),
	{
		rules: {
			'footer-max-line-length': [1, 'always', 72],
		},
	},
];
