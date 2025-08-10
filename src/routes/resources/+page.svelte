<script lang="ts">
	import HeadSummary from "$lib/components/HeadSummary.svelte";
	import LightHouseScores from "$lib/components/LightHouseScores.svelte";
	import PaletteHeader from "$lib/components/PaletteHeader.svelte";
	const description = "Information and resources collected by BRDSA";
	const title = "Resources";
</script>

<svelte:head>
	<HeadSummary {title} {description} />
</svelte:head>

<article>
	<PaletteHeader>Resources</PaletteHeader>
	<div class="palette-sibling w-full">
		<div class="h-300 w-300 bg-white">
			<LightHouseScores />
		</div>
	</div>
</article>
