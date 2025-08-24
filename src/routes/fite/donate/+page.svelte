<script lang="ts">
	import HeadSummary from "$lib/components/HeadSummary.svelte";
	import PaletteHeader from "$lib/components/PaletteHeader.svelte";
	import Prose from "$lib/components/Prose.svelte";
	const description = "Information about donating to FITE";
	const title = "Donate to FITE";
</script>

<svelte:head>
	<HeadSummary {title} {description} />
	<link href="https://actionnetwork.org/css/style-embed-v3.css" rel="stylesheet" type="text/css" />
</svelte:head>

<article class="@container flex grow flex-col">
	<PaletteHeader>Donate to FITE</PaletteHeader>
	<div class="palette-sibling flex justify-center">
		<Prose>
			<p
				class="border-l-4 border-l-dsa-red p-2 dark:border-l-dsa-red1 dark:bg-dsa-black1 dark:text-white"
			>
				Donations to FITE via Baton Rouge DSA are not tax deductible. 
			</p>
		</Prose>
	</div>
	<div class="palette-sibling grow">
		<script
			src="https://actionnetwork.org/widgets/v5/fundraising/donate-to-famine-is-the-enemy-fite?format=js&source=widget&recurring=true&period=recurring_monthly"
		></script>
		<div
			id="can-fundraising-area-donate-to-famine-is-the-enemy-fite"
			class="mx-auto max-w-6xl bg-white/80 dark:bg-dsa-black/80"
		></div>
	</div>
</article>
