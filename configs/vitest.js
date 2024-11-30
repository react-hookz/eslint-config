import vitest from '@vitest/eslint-plugin';
import {setFilesIfUndef} from './util.js';

/** @var {Linter.Config[]} */
const vitestConfig = [
	{
		plugins: {vitest},
		rules: vitest.configs.recommended.rules,
	},
];
export default setFilesIfUndef(vitestConfig, ['**/*.{test,spec,benchmark}.{js,jsx,mjs,cjs,ts,tsx}']);
