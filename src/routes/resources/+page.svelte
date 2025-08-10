<script lang="ts">
	import LightHouseScores from '$lib/components/LightHouseScores.svelte';
	import PaletteHeader from '$lib/components/PaletteHeader.svelte';
</script>


<svelte:head>
	<title>Resources</title>
	<meta name="description" content="Information about donating to Baton Rouge DSA" />
</svelte:head>

<article>
	<PaletteHeader>Resources</PaletteHeader>
	<div class="w-full palette-sibling">
		<div class="w-300 h-300 bg-white">
			<LightHouseScores />
		</div>
	</div>
</article>
