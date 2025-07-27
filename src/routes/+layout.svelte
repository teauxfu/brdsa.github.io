<script lang="ts">
	import PaletteBackground from '$lib/PaletteBackground.svelte';
	import '../app.css';
	let { data, children } = $props();
	import Socials from '$lib/Socials.svelte';
	import { page } from '$app/state';  
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name={data.description}/>
	<meta property="og:title" content={data.title}/>
	<meta property="og:type" content="website"/>
	<meta property="og:image" content="/images/DSABR_Logo_3ColorOnBlk_Web.png"/>
	<meta property="og:url" content={page.url.toString()}/>
</svelte:head>

<header class="@container flex items-center">
	<div class="hidden @md:block p-0.5 rounded-full w-15 h-15 transition hover:scale-105">
		<a href="/" title="Go to the BRDSA home page">
			<span class="hidden">Go to the home page</span>
			<img src="/images/small-dsabr.png" alt="BR DSA logo" /> 
		</a>
	</div>
	<nav title="main pages" class="flex @md:ml-auto text-md @sm:text-lg @md:text-xl @3xl:text-2xl @4xl:text-3xl">
		<ul class="flex flex-wrap gap-x-5 px-2">
			<a href="/" class="@md:hidden text-dsa-red font-bold dark:text-dsa-red1">Home</a>
			{#each data.sections as { title, link, caption }}
				<a href={link} class="text-dsa-red font-bold dark:text-dsa-red1" title={caption}>{title}</a>
			{/each}
		</ul>
	</nav>
</header>
<main class="grow">
	{@render children()}
</main>
<footer class="flex flex-col flex-wrap">
	<PaletteBackground reversed backgroundClass="opacity-75 dark:opacity-100">
		<div class="pt-2"></div>
		<Socials />
		<address class="text-center text-lg">🐊 Baton Rouge DSA 🌹</address>
	</PaletteBackground>
</footer>
