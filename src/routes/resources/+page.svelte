<script lang="ts">
	import LightHouseScores from '$lib/components/LightHouseScores.svelte';
	import PaletteHeader from '$lib/components/PaletteHeader.svelte';
	const description = "Information and resources collected by BRDSA";
</script>


<svelte:head>
	<title>Resources</title>
	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
</svelte:head>

<article>
	<PaletteHeader>Resources</PaletteHeader>
	<div class="w-full palette-sibling">
		<div class="w-300 h-300 bg-white">
			<LightHouseScores />
		</div>
	</div>
</article>
