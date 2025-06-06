<script>
	export let data;
</script>

<h1>Bienvenido al blog</h1>
<p>Próximamente más contenido.</p>

{#each data.posts as post}
	<article>
		<h1>{post.title}</h1>
		<div>{@html post.html}</div>
	</article>
{/each}
