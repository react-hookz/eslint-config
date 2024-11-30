import {adjustESLintConfigFiles} from './base.js';
import typescriptConfig from './typescript.js';

/** @var {Linter.Config[]} */
const typescriptUnsafeConfig = [
	...typescriptConfig,
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
export default adjustESLintConfigFiles(typescriptUnsafeConfig, ['**/*.{ts,tsx,mts,ctx}']);
