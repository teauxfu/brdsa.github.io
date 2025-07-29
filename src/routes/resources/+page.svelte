<script lang="ts">
	import PaletteHeader from '$lib/components/PaletteHeader.svelte';
	import Prose from '$lib/components/Prose.svelte';
	const actionNetworkLink =
		'https://actionnetwork.org/widgets/v5/fundraising/donate-to-baton-rouge-democratic-socialists-of-america?format=js&source=widget';

</script>


<svelte:head>
	<title>Resources</title>
	<meta name="description" content="Information about donating to Baton Rouge DSA" />
	<link href='https://actionnetwork.org/css/style-embed-whitelabel-v3.css' rel='stylesheet' type='text/css' />
	<!-- <link href='https://actionnetwork.org/css/style-embed-v3.css' rel='stylesheet' type='text/css' /> -->
</svelte:head>

<article class="@container flex flex-col grow">
	<PaletteHeader>Resources</PaletteHeader>
	<div class="w-full bg-dsa-red4/65 dark:bg-dsa-black4/65">
		<Prose>
			<p class="dark:text-white">
				Sorry, this section is under construction. Please check back later.
			</p>
		</Prose>
	</div>
</article>
