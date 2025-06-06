<script lang="js">
	let { children } = $props();
</script>

{@render children()}

<footer>
	© {new Date().getFullYear()}
</footer>
