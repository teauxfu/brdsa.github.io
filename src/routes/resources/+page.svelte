<script lang="ts">
	import PaletteHeader from '$lib/components/PaletteHeader.svelte';
	import LightHouseScores from '$lib/components/LightHouseScores.svelte';

	import Proposal from '$lib/posts/sveltekit-migration-proposal.md'
</script>


<svelte:head>
	<title>Resources</title>
	<meta name="description" content="Information about donating to Baton Rouge DSA" />
</svelte:head>

<article>
	<PaletteHeader>Resources</PaletteHeader>
	<div class="w-full bg-dsa-red4/65 dark:bg-dsa-black4/65">
		<!-- <LightHouseScores/> -->
	</div>
	<div>
		<Proposal/>
	</div>
</article>
