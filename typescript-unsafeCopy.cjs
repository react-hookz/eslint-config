import eslintPluginPrettier from 'eslint-plugin-prettier';
import typescriptCopy from './typescriptCopy';

module.exports = [
	...typescriptCopy,
	eslintPluginPrettier.configs.recommended,
	{
		rules: {
			'@typescript-eslint/no-unsafe-argument': 'off',
			'@typescript-eslint/no-unsafe-assignment': 'off',
			'@typescript-eslint/no-unsafe-call': 'off',
			'@typescript-eslint/no-unsafe-declaration-merging': 'off',
			'@typescript-eslint/no-unsafe-enum-comparison': 'off',
			'@typescript-eslint/no-unsafe-member-access': 'off',
			'@typescript-eslint/no-unsafe-return': 'off',
		},
	},
];
