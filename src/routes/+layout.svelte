<script lang="ts">
	import PaletteBackground from '$lib/PaletteBackground.svelte';
import '../app.css';
	let { data, children } = $props();
</script>

<header>
	<nav>
		<ul class="flex flex-wrap gap-5 px-2">
			{#each data.sections as { title, link }}
				<a href={link} class="text-lg ">{title}</a>
			{/each}
		</ul>
	</nav>
</header>
<main class="grow dark:bg-dsa-black4 bg-[url(/images/Main_Logo_Transparent_Small.png)] bg-size-[200px_200px] bg-position-[bottom_1%_right_50%] bg-no-repeat">
	{@render children()}
</main>
<footer>
	<PaletteBackground reversed>
		<address class="text-center">🐊 Baton Rouge DSA 🌹</address>
	</PaletteBackground>
</footer>
