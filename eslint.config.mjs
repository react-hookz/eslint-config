import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [
	{
		ignores: [
			'**/.idea',
			'**/node_modules',
			'**/CHANGELOG.md',
			'!**/.eslintrc.cjs',
			'!**/.prettierrc.cjs',
		],
	},
	...compat.extends('./base.mjs').map((config) => ({
		...config,
		files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
	})),
	...compat.extends('./md.mjs').map((config) => ({
		...config,
		files: ['**/*.md'],
	})),
	...compat.extends('./mdx.mjs').map((config) => ({
		...config,
		files: ['**/*.mdx'],
	})),
];
