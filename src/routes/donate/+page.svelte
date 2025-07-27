<script lang="ts">
	import PaletteHeader from '$lib/PaletteHeader.svelte';
	import Prose from '$lib/Prose.svelte';
	import type { PostMetadata } from '$lib/types';
	import Donate from './donate.md';
	const actionNetworkLink =
		'https://actionnetwork.org/widgets/v5/fundraising/donate-to-baton-rouge-democratic-socialists-of-america?format=js&source=widget&css=whitelabel&style=full';
</script>



<article class="@container flex flex-col">
	<PaletteHeader backgroundClass="opacity-75 dark:opacity-100" headerClass="text-5xl font-bold pl-2 pb-3">
		Donate
	</PaletteHeader>

	<Prose>
		<p>
			Want to see where your money goes? Come to <a href="/get-involved">our next chapter meeting</a> and
			see what we're up to!
		</p>
	</Prose>

	<iframe src={actionNetworkLink} title="Donate to BR DSA via ActionNetwork"> </iframe>
</article>
