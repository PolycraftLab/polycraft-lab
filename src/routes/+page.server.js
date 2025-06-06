import { getAllPosts, getPostByCategory } from '$lib/utils/posts';

export async function load() {
	const posts = await getAllPosts();

	const c = await getPostByCategory('general');
	console.log(c);

	return { posts };
}
