<script lang="ts">
	import Nav from '../components/Nav.svelte';

	// export let segment: string;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 1em;
		padding-top: 1.5em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav />

<main>
	<slot></slot>
</main>