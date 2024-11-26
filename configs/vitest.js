import vitest from '@vitest/eslint-plugin';
import { adjustESLintConfigFiles } from './base.js';

/** @var {Linter.Config[]} */
const vitestConfig = [
	{
		plugins: { vitest },
		rules: vitest.configs.recommended.rules,
	},
];
export default adjustESLintConfigFiles(vitestConfig, ['**/*.{test,spec}.{js,jsx,mjs,cjs,ts,tsx}']);
