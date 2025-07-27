
<script lang="ts">
	import PaletteHeader from '$lib/components/PaletteHeader.svelte';
	import Prose from '$lib/components/Prose.svelte';
	import Fite from './fite.md'
	import hero from '$lib/images/FITE04-2025.png?enhanced';
</script>

<svelte:head>
	<title>Famine Is The Enemy (FITE)</title>
	<meta name="Information about our food distribution project Famine is the Enemy (FITE)" />
</svelte:head>
<article class="@container flex flex-col">
	<PaletteHeader>
	    Famine Is The Enemy (FITE)
	</PaletteHeader>
	<div class="bg-dsa-red4/65 dark:bg-dsa-black4/65">
		<Prose>
			<blockquote class="mb-0 border-l-dsa-red pr-1">
				Hunger not to have, but to be
				<footer>
					<cite class="dark:font-bold">
						-- <a href="https://en.wikipedia.org/wiki/John_Dewey">John Dewey</a></cite
					>
				</footer>
			</blockquote>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/John_Dewey_cph.3a51565.jpg/250px-John_Dewey_cph.3a51565.jpg"
				title="John Dewey"
				alt="Portrait of John Dewey"
				class="float-right mt-0 mb-0 object-scale-down py-2"
			/>
		</Prose>
	</div>

<div class="flex flex-col @5xl:flex-row @5xl:justify-center bg-white/80 dark:bg-dsa-black/80">
		<Prose>
			<Fite/>
		</Prose>
		<aside>
			<enhanced:img src={hero} alt='BR DSA members distribute food'/>
		</aside>
	</div>
</article>	