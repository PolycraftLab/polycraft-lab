import { render } from 'svelte/server';

export async function getAllPosts() {
	const modules = import.meta.glob('/static/posts/*.svx', { eager: true });

	const posts = Object.entries(modules).map(([path, mod]) => {
		const { slug, metadata } = mod;
		const { html: rowHtml } = render(mod.default);
		const html = rowHtml.replace(/<!--\[-->|<!--]-->/g, '');

		return { slug, html, path, ...(metadata ?? {}) };
	});

	return posts ?? [];
}

export async function getPostBySlug(slug) {
	const posts = await getAllPosts();
	if (posts.length === 0 || !slug) return;

	const finded = posts.find((p) => p.slug.trim() === slug.trim());
	return finded ?? null;
}

export async function getPostByCategory(category) {
	const posts = await getAllPosts();
	if (posts.length === 0 || !category) return;

	const finded = posts.filter((p) => p.category.trim() === category.trim());
	return finded ?? null;
}
