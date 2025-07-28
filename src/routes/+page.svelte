<script lang="ts">
	import PaletteHeader from '$lib/components/PaletteHeader.svelte';
	import Prose from '$lib/components/Prose.svelte';
	import About from './about/about.md';
	import hero from '$lib/images/Header_ABetterWorld_Louisiana.jpeg?enhanced'
	import foodDistribution from '$lib/images/baton-rouge-dsa-cover-image.jpg?enhanced';
</script>

<svelte:head>
	<title>Baton Rouge DSA</title>
	<meta name="description" content="Home page for Baton Rouge DSA" />
	<!-- <link href='https://actionnetwork.org/css/style-embed-v3.css' rel='stylesheet' type='text/css' /> -->
	 <link href='https://actionnetwork.org/css/style-embed-whitelabel-v3.css' rel='stylesheet' type='text/css' />
</svelte:head>

<article class="@container flex flex-col grow">
	<PaletteHeader>Welcome to Baton Rouge DSA</PaletteHeader>
	<div class="bg-dsa-red4/65 dark:bg-dsa-black4/65">
		<Prose>
			<blockquote class="border-l-dsa-red1 ">
				How many men ever went to a barbecue and would let one man take off the table what was intended for nine-tenths of the people?
				<footer class="text-right">
					<cite class="font-bold">-- Huey P. Long, 1934</cite>
				</footer>
			</blockquote>
			<enhanced:img src={hero} alt="A graphic that says 'A Better World is Possible!'" class="mx-auto"/>
		</Prose>
	</div>

	<div class="flex flex-col @5xl:flex-row @5xl:justify-center bg-white/90 dark:bg-dsa-black/90">
		<Prose>
			<About/>
		</Prose>
		<aside>
			<enhanced:img src={foodDistribution} alt='BR DSA members distribute food' class="object-scale-down" />
		</aside>
	</div>

	<div class="grow max-w-5xl mx-auto p-2">
		 <script src='https://actionnetwork.org/widgets/v5/form/join-brdsa?format=js&source=widget'></script><div id='can-form-area-join-brdsa' style='width: 100%'  class="bg-white/80 dark:bg-dsa-black/80"  ></div>
	</div>
</article>
