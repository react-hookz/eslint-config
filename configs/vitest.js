import vitest from '@vitest/eslint-plugin';

/** @var {Linter.Config[]} config */
const vitestConfig = [
	{
		files: ['*.test.{js,jsx,ts,tsx}', '*.suite.{js,jsx,ts,tsx}'],
		plugins: { vitest },
		rules: vitest.configs.recommended.rules,
	},
];
export default vitestConfig;
