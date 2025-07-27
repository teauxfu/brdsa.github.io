<script lang="ts">
	import PaletteHeader from '$lib/PaletteHeader.svelte';
	import Prose from '$lib/Prose.svelte';
	import About from './about/about.md';
</script>

<svelte:head>
	<title>Baton Rouge DSA</title>
	<meta name="Home page for Baton Rouge DSA" />
</svelte:head>

<article class="@container flex flex-col">
	<PaletteHeader>Welcome to Baton Rouge DSA</PaletteHeader>
	<div class="bg-dsa-red4/65 dark:bg-dsa-black4/65">
		<Prose>
			<blockquote class="border-l-dsa-red1 ">
				How many men ever went to a barbecue and would let one man take off the table what was intended for nine-tenths of the people?
				<footer class="text-right">
					<cite class="font-bold">-- Huey P. Long, 1934</cite>
				</footer>
			</blockquote>
		</Prose>
	</div>

	<div class="flex flex-col @5xl:flex-row @5xl:justify-center bg-white/80 dark:bg-dsa-black/80">
		<Prose>
			<About/>
		</Prose>
		<aside>
			<img alt='BR DSA members distribute food' src="/images/baton-rouge-dsa-cover-image.jpg" class="object-scale-down" />
		</aside>
	</div>
</article>
