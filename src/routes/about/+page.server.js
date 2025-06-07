// +page.server.js
import { render } from 'svelte/server';
import { error } from '@sveltejs/kit';

export const prerender = true;

export async function load() {
	try {
		const modules = import.meta.glob('/static/about/about.svx', { eager: true });
		const mod = modules['/static/about/about.svx'];

		const { html } = render(mod.default);
		return { content: html, frontmatter: mod.metadata };
	} catch (e) {
		throw error(500, 'About section not available');
	}
}
