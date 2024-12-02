import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import {setFilesIfUndef} from './util.js';

/** @var {Linter.Config[]} */
const reactConfig = [
	pluginReact.configs.flat.recommended,
	pluginReact.configs.flat['jsx-runtime'],
	{
		plugins: {
			'react-hooks': {
				rules: pluginReactHooks.rules,
			},
		},
		rules: {
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',
		},
	},
	{
		settings: {
			react: {
				version: 'detect',
			},
		},
		rules: {
			'react/button-has-type': 'error',
			'react/default-props-match-prop-types': 'error',
			'react/function-component-definition': [
				'error',
				{
					namedComponents: 'function-declaration',
					unnamedComponents: 'arrow-function',
				},
			],
			'react/hook-use-state': 'error',
			'react/iframe-missing-sandbox': 'error',
			'react/no-access-state-in-setstate': 'error',
			'react/no-array-index-key': 'error',
			'react/no-arrow-function-lifecycle': 'error',
			'react/no-children-prop': 'error',
			'react/no-danger': 'error',
			'react/no-danger-with-children': 'error',
			'react/no-deprecated': 'error',
			'react/no-did-update-set-state': 'error',
			'react/no-direct-mutation-state': 'error',
			'react/no-find-dom-node': 'error',
			'react/no-invalid-html-attribute': 'error',
			'react/no-is-mounted': 'error',
			'react/no-namespace': 'error',
			'react/no-redundant-should-component-update': 'error',
			'react/no-render-return-value': 'error',
			'react/no-typos': 'error',
			'react/no-string-refs': [
				'error',
				{
					noTemplateLiterals: true,
				},
			],
			'react/no-this-in-sfc': 'error',
			'react/no-unescaped-entities': 'error',
			'react/no-unknown-property': 'error',
			'react/no-unsafe': 'error',
			'react/no-unused-state': 'error',
			'react/prefer-read-only-props': 'error',
			'react/self-closing-comp': 'error',
			'react/state-in-constructor': [
				'error',
				'never',
			],
			'react/static-property-placement': 'error',
			'react/style-prop-object': [
				'error',
				{
					allow: [
						// This allows react-intl’s `<FormattedNumber value={0.42} style='percent'/>`.
						'FormattedNumber',
					],
				},
			],
			'react/void-dom-elements-no-children': 'error',
			'react/jsx-boolean-value': 'error',
			'react/jsx-key': [
				'error',
				{
					checkFragmentShorthand: true,
					checkKeyMustBeforeSpread: true,
					warnOnDuplicates: true,
				},
			],
			'react/jsx-no-bind': [
				'error',
				{
					allowArrowFunctions: true,
				},
			],
			'react/jsx-no-comment-textnodes': 'error',
			'react/jsx-no-constructed-context-values': 'error',
			'react/jsx-no-duplicate-props': [
				'error',
				{
					ignoreCase: true,
				},
			],
			'react/jsx-no-script-url': 'error',
			'react/jsx-no-target-blank': [
				'error',
				{
					warnOnSpreadAttributes: true,
					forms: true,
				},
			],
			'react/jsx-no-undef': 'error',
			'react/jsx-no-useless-fragment': 'error',
			// Disabled for now as it produces too many errors
			// 'react/jsx-one-expression-per-line': ['error', {allow: 'single-child'}],
			'react/jsx-fragments': [
				'error',
				'syntax',
			],
			'react/jsx-pascal-case': 'error',
			'react/jsx-props-no-multi-spaces': 'error',
			'react/jsx-sort-props': [
				'error',
				{
					callbacksLast: true,
					shorthandFirst: true,
					noSortAlphabetically: true,
					reservedFirst: true,
				},
			],
			'react/jsx-uses-react': 'error',
			'react/jsx-uses-vars': 'error',

			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',

			// While using ts with `react-jsx` preset - there
			// is no need in importing react in each file
			'react/react-in-jsx-scope': 'off',

			// There is no sense in using prop-types within ts projects
			'react/require-default-props': 'off',
			'react/no-unused-prop-types': 'off',
			'react/prop-types': 'off',

			// Not so convenient in significant amount of cases to
			// prefix boolean prop with `is` or `has`.
			'react/boolean-prop-naming': 'off',

			// name is taken from constant name or function name
			'react/display-name': 'off',

			// controlled by stylistic
			'react/jsx-indent': 'off',
			'react/jsx-closing-bracket-location': 'off',
			'react/jsx-closing-tag-location': 'off',
			'react/jsx-curly-brace-presence': 'off',
			'react/jsx-curly-newline': 'off',
			'react/jsx-curly-spacing': 'off',
			'react/jsx-equals-spacing': 'off',
			'react/jsx-first-prop-new-line': 'off',
			'react/jsx-function-call-newline': 'off',
			'react/jsx-indent-props': 'off',
			'react/jsx-max-props-per-line': 'off',
			'react/jsx-one-expression-per-line': 'off',
			'react/jsx-quotes': 'off',
			'react/jsx-tag-spacing': 'off',
			'react/jsx-wrap-multilines': 'off',
			'react/jsx-child-element-spacing': 'off',

			'@stylistic/jsx-indent': 'off',
			'@stylistic/jsx-closing-bracket-location': ['error', 'after-props'],
			'@stylistic/jsx-closing-tag-location': 'error',
			'@stylistic/jsx-curly-brace-presence': ['error', {propElementValues: 'always'}],
			'@stylistic/jsx-curly-newline': 'error',
			'@stylistic/jsx-curly-spacing': ['error', 'never'],
			'@stylistic/jsx-equals-spacing': 'error',
			'@stylistic/jsx-first-prop-new-line': 'error',
			'@stylistic/jsx-function-call-newline': ['error', 'multiline'],
			'@stylistic/jsx-indent-props': ['error', 'tab'],
			'@stylistic/jsx-max-props-per-line': ['error', {maximum: 1, when: 'multiline'}],
			'@stylistic/jsx-one-expression-per-line': ['error', {allow: 'non-jsx'}],
			'@stylistic/jsx-quotes': 'error',
			'@stylistic/jsx-tag-spacing': [
				'error',
				{
					afterOpening: 'never',
					beforeClosing: 'never',
					beforeSelfClosing: 'always',
					closingSlash: 'never',
				},
			],
			'@stylistic/jsx-wrap-multilines': [
				'error',
				{
					arrow: 'parens-new-line',
					assignment: 'parens-new-line',
					condition: 'parens-new-line',
					declaration: 'parens-new-line',
					logical: 'parens-new-line',
					prop: 'parens-new-line',
					propertyValue: 'parens-new-line',
					return: 'parens-new-line',
				},
			],
		},
	},
];
export default setFilesIfUndef(reactConfig, ['**/*.{ts,tsx,js,jsx}']);
