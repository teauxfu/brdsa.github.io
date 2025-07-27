<script lang="ts">
	import PaletteHeader from '$lib/components/PaletteHeader.svelte';
	import Prose from '$lib/components/Prose.svelte';
	import type { PostMetadata } from '$lib/types';
	import Donate from './donate.md';
	const actionNetworkLink =
		'https://actionnetwork.org/widgets/v5/fundraising/donate-to-baton-rouge-democratic-socialists-of-america?format=js&source=widget&css=whitelabel&style=full';
</script>

<svelte:head>
	<title>Donate to BR DSA</title>
	<meta name="Information about donating to Baton Rouge DSA" />
</svelte:head>

<article class="@container flex flex-col">
	<PaletteHeader>Donate to BR DSA</PaletteHeader>
	<div class="bg-dsa-red4/65 dark:bg-dsa-black4/65">
		<Prose>
			<p class="dark:text-white">
				Want to see where your money goes? Come to <a href="/get-involved">our next chapter meeting</a> and
				see what we're up to!
			</p>
		</Prose>
	</div>
	<iframe src={actionNetworkLink} title="Donate to BR DSA via ActionNetwork"> </iframe>
</article>
