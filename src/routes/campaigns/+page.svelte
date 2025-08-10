<script lang="ts">
	import PaletteHeader from '$lib/components/PaletteHeader.svelte';
	import Prose from '$lib/components/Prose.svelte';

	import Campaigns from './our-work.md';
</script>

<svelte:head>
	<title>Our work</title>
	<meta name="description" content="Information about campaigns and projects by Baton Rouge DSA" />
</svelte:head>

<article>
	<PaletteHeader headerClass="text-5xl font-bold pl-2 pb-3">Our Work</PaletteHeader>	
	<div class="palette-sibling">
		<Prose>
			<div class="">
				<blockquote class="min-w-xs">
					Liberty will not descend to a people, a people must raise themselves to liberty
					<footer class="text-right">
						<cite>
							-- grave of <a href="https://en.wikipedia.org/wiki/Emma_Goldman">Emma Goldman</a>
						</cite>
					</footer>
				</blockquote>
				<figure>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Emma_Goldman_seated.jpg/800px-Emma_Goldman_seated.jpg"
						title="Emma Goldman"
						alt="Portrait of Emma Goldman"
						class="float-right mt-0 mb-0 max-h-55 object-scale-down py-2"
					/>
					<figcaption class="min-w-2xs">
						<a href="https://commons.wikimedia.org/wiki/File:Emma_Goldman_seated.jpg" target="_blank">Takuma Kajiwara</a>, Public domain, via Wikimedia Commons
					</figcaption>
				</figure>
			</div>
		</Prose>
	</div>

	<Prose>
		<Campaigns />
	</Prose>
</article>
