module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		ecmaFeatures: {
			jsx: true
		}
	},
	env: {
		browser: true,
		node: true, // For Webpack configs linting
		jest: true,
		es6: true
	},
	plugins: [
		'@typescript-eslint',
		'import',
		'prefer-arrow',
		'react'
	],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/typescript',
		'plugin:react/recommended'
	],
	rules: {
		// Typescript-related formatting rules
		'semi': 'off',
		'@typescript-eslint/semi': ['error'],
		'indent': 'off',
		'@typescript-eslint/indent': ['error', 2],
		'brace-style': ['error', 'stroustrup'],
		'linebreak-style': 0,
		'no-trailing-spaces': ['error'],
		'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
		'object-curly-spacing': ['error', 'always'],
		'quote-props': 'off',
		'comma-dangle': ['error', 'never'],
		'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 1, 'maxBOF': 0 }],
    'eol-last': ['error', 'never'],
    'react/prop-types': 'off',

		// Typescript-related check rules
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': 'interface',
        'format': ['PascalCase'],
        'custom': {
          'regex': '^I[A-Z]',
          'match': true
        }
      }
    ],


		// React rules
		//'react/jsx-uses-react': 'error',
		//'react/jsx-uses-vars': 'error',

		// Overloads for Typescript-recommended set from old TSLint
		'@typescript-eslint/adjacent-overload-signatures': 'error',
		'@typescript-eslint/array-type': 'error',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/consistent-type-assertions': 'error',
		'@typescript-eslint/explicit-member-accessibility': [
			'error',
			{
				'accessibility': 'explicit',
				'overrides': {
					'accessors': 'explicit',
					'constructors': 'explicit',
					'parameterProperties': 'explicit'
				}
			}
		],
		'@typescript-eslint/member-ordering': [
			'error',
			{
				'default':
					[
						'signature',

						'static-field',
						'static-method',

						'abstract-field',
						'instance-field',

						'constructor',

						'abstract-method',
						'instance-method'
					]
			}
		],
		'@typescript-eslint/no-empty-function': 'error',
		'@typescript-eslint/no-empty-interface': 'error',
		'@typescript-eslint/no-explicit-any': 'error',
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/no-namespace': 'error',
		'@typescript-eslint/no-parameter-properties': 'error',
		'@typescript-eslint/no-this-alias': 'error',
		'@typescript-eslint/no-use-before-define': 'error',
		'@typescript-eslint/no-var-requires': 'error',
		'@typescript-eslint/prefer-for-of': 'error',
		'@typescript-eslint/prefer-function-type': 'off',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    "@typescript-eslint/no-unused-vars": 'off',
		'space-in-parens': [
			'error',
			'never'
		],
		'@typescript-eslint/triple-slash-reference': 'error',
		'@typescript-eslint/unified-signatures': 'error',
		'camelcase': 'error',
		'capitalized-comments': 'off',
		'complexity': 'off', // Switch back on
		'constructor-super': 'error',
		'curly': [
			'error',
			'multi-line'
		],
		'dot-notation': 'error',
		'eqeqeq': [
			'error',
			'always'
		],
		'guard-for-in': 'error',
		'id-blacklist': [
			'error',
			'any',
			'Number',
			'number',
			'String',
			'string',
			'Boolean',
			'boolean',
			'Undefined',
			'undefined'
		],
		'id-match': 'error',
		'import/no-extraneous-dependencies': 'error',
		'import/order': 'error',
		'max-classes-per-file': [
			'error',
			1
		],
		'new-parens': 'error',
		'no-bitwise': 'error',
		'no-caller': 'error',
		'no-cond-assign': 'error',
		'no-console': 'error',
		'no-debugger': 'error',
		'no-duplicate-case': 'error',
		'no-duplicate-imports': 'error',
		'no-empty': 'error',
		'no-eval': 'error',
		'no-extra-bind': 'error',
		'no-fallthrough': 'error',
		'no-invalid-this': 'error',
		'no-new-func': 'error',
		'no-new-wrappers': 'error',
		'no-redeclare': 'error',
		'no-return-await': 'error',
		'no-sequences': 'error',
		'no-shadow': 'off',
		'no-sparse-arrays': 'error',
		'no-template-curly-in-string': 'error',
		'no-throw-literal': 'error',
		'no-undef-init': 'error',
		'no-underscore-dangle': 'off',
		'no-unsafe-finally': 'error',
    'no-unused-labels': 'error',
    'no-unused-vars': 'off',
    'no-non-null-assertion': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
		'no-var': 'error',
		'object-shorthand': 'off',
		'one-var': [
			'error',
			'never'
		],
		'prefer-arrow/prefer-arrow-functions': 'off',
		'prefer-const': 'error',
		'prefer-object-spread': 'error',
		'radix': 'error',
		'spaced-comment': 'error',
		'use-isnan': 'error',
		'valid-typeof': 'error',

		// ESLint basic rules with manual configuration
		'no-unneeded-ternary': 'error',
		'no-unexpected-multiline': 'off'
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
	globals: {
	}
}
