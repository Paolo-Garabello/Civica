<script>
	import NavBar from '$lib/components /NavBar.svelte';
    let { children } = $props();
</script>

<main>
    <NavBar />
    {@render children()}
</main>

<style>
    :global(body) {
    background-color: black;
    margin: 0;
    padding: 0;
    color: white; /* optional: makes text visible on black background */
    }

    main {
        min-height: 100vh;
    }
</style>