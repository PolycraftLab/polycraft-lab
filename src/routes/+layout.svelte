<script lang="js">
	import Header from '$lib/components/Header/Header.svelte';

	let { children } = $props();
</script>

<main>
	<Header />
	{@render children()}
</main>

<style>
	main {
		max-width: 1000px;
		width: 100%;
		height: 100%;
		margin: 0 auto;
	}
</style>
