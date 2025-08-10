<script lang="ts">
	import PaletteHeader from '$lib/components/PaletteHeader.svelte';
	import Prose from '$lib/components/Prose.svelte';
</script>



<svelte:head>
	<title>Donate to BRDSA</title>
	<meta name="description" content="Information about donating to Baton Rouge DSA" />
	<!-- <link href='https://actionnetwork.org/css/style-embed-whitelabel-v3.css' rel='stylesheet' type='text/css' /> -->
	<link href='https://actionnetwork.org/css/style-embed-v3.css' rel='stylesheet' type='text/css' />
</svelte:head>

<article class="@container flex flex-col grow">
	<PaletteHeader>Donate to BRDSA</PaletteHeader>
	<div class="palette-sibling flex justify-center">
		<Prose>
			<p class="dark:text-white dark:bg-dsa-black1 p-2 border-l-dsa-red dark:border-l-dsa-red1 border-l-4">
				Want to see where your money goes? Come to <a href="/get-involved">our next chapter meeting</a> and
				see what we're up to!
			</p>
		</Prose>
	</div>
	<div class="grow palette-sibling">
		<script src='https://actionnetwork.org/widgets/v5/fundraising/donate-to-baton-rouge-democratic-socialists-of-america?format=js&source=widget&recurring=true&period=recurring_monthly'></script>
		<div id='can-fundraising-area-donate-to-baton-rouge-democratic-socialists-of-america' class="bg-white/80 dark:bg-dsa-black/80 max-w-6xl mx-auto" ></div>
	</div>
</article>