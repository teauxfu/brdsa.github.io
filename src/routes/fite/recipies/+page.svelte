<script lang="ts">
	import PaletteHeader from '$lib/components/PaletteHeader.svelte';
	import Prose from '$lib/components/Prose.svelte';
	import type { Recipie } from '$lib/types.js';
	let { data } = $props();

	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};

	function getSummary(recipie : Recipie) 
	{
		let values = [];
		values.push(recipie.difficulty)
		if(recipie.cookTime)
			values.push(recipie.cookTime)
		if(recipie.feeds)
			values.push(`feeds ${recipie.feeds}`);
		return values.join(', ');
	}

</script>

<svelte:head>
	<title>FITE Cookbook</title>
	<meta name="description" content="FITE Recipies and Guides" />
</svelte:head>

<article>
	<PaletteHeader>Statements</PaletteHeader>
	<div class="palette-sibling">
		<Prose>
			<p
				class="border-l-4 border-l-dsa-red p-2 dark:border-l-dsa-red1 dark:bg-dsa-black1 dark:text-white"
			>
				This is a list of recipies submitted by FITE contributors.
			</p>
		</Prose>
	</div>
	<Prose>
		<nav class="flex grow p-2">
			<ul class="flex grow flex-col gap-3">
				{#each data.posts as post}
					<li class="flex flex-col">
						<a href="/fite/recipies/{post.slug}" class="text-4xl underline decoration-dsa-red"
							>{post.title}</a
						>
						{#if post.date}
							<time>{new Date(post.date).toLocaleDateString('en-us', options)}</time>
						{/if}
						<span>{getSummary(post)}</span>
					</li>
				{/each}
			</ul>
		</nav>
	</Prose>
</article>
