<script lang="ts">
	import PaletteBackground from '$lib/PaletteBackground.svelte';
import '../app.css';
	let { data, children } = $props();
</script>

<header>
	<nav>
		<ul class="flex gap-2">
			{#each data.sections as { title, link }}
				<a href={link}>{title}</a>
			{/each}
		</ul>
	</nav>
</header>
<main class="grow dark:bg-dsa-black1">
	{@render children()}
</main>
<footer>
	<PaletteBackground backgroundClass="opacity-75" reversed>
		<address class="text-center">Baton Rouge DSA</address>
	</PaletteBackground>
</footer>
