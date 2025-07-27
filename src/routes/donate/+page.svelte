<script lang="ts">
	import PaletteHeader from '$lib/components/PaletteHeader.svelte';
	import Prose from '$lib/components/Prose.svelte';
	const actionNetworkLink =
		'https://actionnetwork.org/widgets/v5/fundraising/donate-to-baton-rouge-democratic-socialists-of-america?format=js&source=widget&css=whitelabel&style=full';
</script>

<svelte:head>
	<title>Donate to BRDSA</title>
	<meta name="Information about donating to Baton Rouge DSA" />
</svelte:head>

<article class="@container flex flex-col">
	<PaletteHeader>Donate to BRDSA</PaletteHeader>
	<div class="bg-dsa-red4/65 dark:bg-dsa-black4/65">
		<Prose>
			<p class="dark:text-white">
				Want to see where your money goes? Come to <a href="/get-involved">our next chapter meeting</a> and
				see what we're up to!
			</p>			
		</Prose>
		<div class="max-w-5xl mx-auto px-2 bg-dsa-red4/65 dark:bg-dsa-black4/65">
			<script src={actionNetworkLink}></script>
			<div id='can-fundraising-area-donate-to-baton-rouge-democratic-socialists-of-america'></div>
		</div>
	</div>
</article>
