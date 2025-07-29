<script lang="ts">
	import PaletteHeader from '$lib/components/PaletteHeader.svelte';
	import Prose from '$lib/components/Prose.svelte';
	import Fite from './fite.md';
	import hero from '$lib/images/FITE04-2025.png?enhanced';
</script>

<svelte:head>
	<title>Famine Is The Enemy (FITE)</title>
	<meta
		name="description"
		content="Information about our food distribution project Famine is the Enemy (FITE)"
	/>
</svelte:head>
<article class="@container flex grow flex-col bg-white/90 dark:bg-dsa-black/90">
	<PaletteHeader>Famine Is The Enemy (FITE)</PaletteHeader>
	<div class="bg-dsa-red4/65 dark:bg-dsa-black4/65">
		<Prose>
			<div class="@2xl:flex @2xl:gap-3 items-center">
				<blockquote
					class="mb-0 border-l-dsa-red p-2 pr-1 dark:border-l-dsa-red1 dark:bg-dsa-black1"
				>
					The curse of poverty has no justification in our age. It is socially as cruel and blind as
					the practice of cannibalism at the dawn of civilization, when men ate each other because
					they had not yet learned to take food from the soil or to consume the abundant animal life
					around them.
					<footer>
						<cite class="dark:font-bold">
							-- <a href="https://projects.seattletimes.com/mlk/words-going.html"
								>Martin Luther King, Jr.</a
							></cite
						>
					</footer>
				</blockquote>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Martin_Luther_King%2C_Jr..jpg/500px-Martin_Luther_King%2C_Jr..jpg"
					title="Martin Luther King Jr."
					alt="Portrait of Martin Luther King Jr."
					class="float-right mt-0 mb-0 max-h-55 object-scale-down py-2"
				/>
			</div>
		</Prose>
	</div>

	<div class="flex grow flex-col @5xl:flex-row @5xl:justify-center">
		<Prose>
			<Fite />
		</Prose>
		<aside>
			<enhanced:img src={hero} alt="BR DSA members distribute food" />
		</aside>
	</div>
</article>
