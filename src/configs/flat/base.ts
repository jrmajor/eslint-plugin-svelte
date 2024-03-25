// IMPORTANT!
// This file has been automatically generated,
// in order to update its content execute "pnpm run update"
import type { ESLint } from 'eslint';
export default [
	{
		plugins: {
			get svelte(): ESLint.Plugin {
				// eslint-disable-next-line @typescript-eslint/no-require-imports -- ignore
				return require('../../index');
			}
		}
	},
	{
		files: ['*.svelte', '**/*.svelte'],
		languageOptions: {
			// eslint-disable-next-line @typescript-eslint/no-require-imports -- ignore
			parser: require('svelte-eslint-parser')
		},
		rules: {
			// ESLint core rules known to cause problems with `.svelte`.
			'no-inner-declarations': 'off', // The AST generated by svelte-eslint-parser will false positives in it rule because the root node of the script is not the `Program`.
			// "no-irregular-whitespace": "off",
			// Self assign is one of way to update reactive value in Svelte.
			'no-self-assign': 'off',

			// eslint-plugin-svelte rules
			'svelte/comment-directive': 'error',
			'svelte/system': 'error'
		},
		processor: 'svelte/svelte'
	}
];
