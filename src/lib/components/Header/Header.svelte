<script lang="js">
	let isFocused = $state(false);
	let searchValue = $state('');
</script>

<header>
	<nav>
		<ul role="list">
			<li role="list">
				<div class="links-wrapper">
					<a class="link" href="/">Polycraft Lab,</a>
					<a class="link" href="/about">About,</a>
					<a class="link" href="/blog">Blog</a>
				</div>
			</li>
			<li role="list">
				<input
					bind:value={searchValue}
					class:grow={isFocused || searchValue !== ''}
					onclick={() => (isFocused = true)}
					onblur={() => (isFocused = false)}
					type="text"
					placeholder="search..."
				/>
				{#if searchValue && isFocused}
					<div class="search-wrapper">
						<span>lo que sea</span>
					</div>
				{/if}
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		position: sticky;
		padding: 2px 0px;
		top: 0;
		background-color: #fff;
		z-index: 10;
	}

	ul {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		padding: 0;
	}

	.links-wrapper {
		display: flex;
		align-items: center;
		gap: 4px;
	}

	.link {
		text-decoration: none;
		color: black;
		font-size: 1.4rem;
	}

	.link:hover {
		color: rgb(101, 101, 101);
	}

	input {
		width: 200px;
		padding: 8px 12px;
		font: inherit;
		transition: width 250ms cubic-bezier(0.4, 0, 0.2, 1);
	}

	@media only screen and (max-width: 760px) {
		input {
			display: none;
		}
	}

	input.grow {
		width: 500px;
	}

	.search-wrapper {
		padding: 20px;
		background-color: white;
		border: 1px solid black;
		position: absolute;
		top: 48px;
		right: 0;
		width: 500px;
		height: 400px;
	}
</style>
