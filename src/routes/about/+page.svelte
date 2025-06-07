<script>
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.frontmatter.title}</title>
	<meta conent={data.frontmatter.title} propperty="og:title" />
	<meta content={data.frontmatter.description} property="og:description" />
</svelte:head>

<div>
	<h1>{data.frontmatter.title}</h1>
	{@html data.content}
</div>
