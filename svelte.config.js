import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';

const config = {
	extensions: ['.svelte', '.svx'],
	preprocess: [mdsvex()],
	kit: { adapter: adapter() }
};

export default config;
