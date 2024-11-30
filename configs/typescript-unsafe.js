import typescriptConfig from './typescript.js';
import {setFilesIfUndef} from './util.js';

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
export default setFilesIfUndef(typescriptUnsafeConfig, ['**/*.{ts,tsx,mts,ctx}']);
