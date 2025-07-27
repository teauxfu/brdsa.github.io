<script lang="ts">
	import PaletteHeader from '$lib/components/PaletteHeader.svelte';
	import Prose from '$lib/components/Prose.svelte';

	import Campaigns from './our-work.md';
</script>

<svelte:head>
	<title>Our work</title>
	<meta name="Information about campaigns and projects by Baton Rouge DSA" />
</svelte:head>

<article class="@container flex flex-col">
	<PaletteHeader headerClass="text-5xl font-bold pl-2 pb-3">
		Our Work
	</PaletteHeader>
	<div class="bg-dsa-red4/65 dark:bg-dsa-black4/65">
		<Prose>
			<div class="@sm:flex @sm:gap-3">
				<blockquote class="border-l-dsa-red1 ">
					Liberty will not descend to a people, a people must raise themselves to liberty
					<footer class="text-right">
						<cite>
							-- grave of <a href="https://en.wikipedia.org/wiki/Emma_Goldman">Emma Goldman</a
							></cite
						>
					</footer>
				</blockquote>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Emma_Goldman_seated.jpg/800px-Emma_Goldman_seated.jpg"
					title="Emma Goldman"
					alt="Portrait of Emma Goldman"
					class="float-right mt-0 mb-0 max-h-65 object-scale-down py-2"
				/>
			</div>
		</Prose>
	</div>
	

	<div class="bg-white/80 dark:bg-dsa-black/80">
		<Prose>
			<Campaigns />
		</Prose>
	</div>
</article>
