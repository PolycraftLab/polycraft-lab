<script>
	const { data } = $props();
</script>

<h1>Bienvenido al blog</h1>
<p>Próximamente más contenido.</p>

{#each data.posts as post}
	<article>
		<h1>{post.title}</h1>
		<p>{post.description}</p>
		<p>{post.date}</p>
	</article>
{/each}

<style>
	article {
		max-width: 80ch;
	}
</style>
