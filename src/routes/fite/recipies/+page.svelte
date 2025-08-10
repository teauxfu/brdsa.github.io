<script lang="ts">
	import PaletteHeader from '$lib/components/PaletteHeader.svelte';
	import Prose from '$lib/components/Prose.svelte';
	import { getSummary } from '$lib/recipieUtils';
	let { data } = $props();

	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};
	const description = "FITE Recipies and Guides";
</script>

<svelte:head>
	<title>FITE Cookbook</title>
	<meta name="description" content={description} />
	<meta property="og:description" content={description}/>;
</svelte:head>

<article>
	<PaletteHeader>FITE Cookbook</PaletteHeader>
	<div class="palette-sibling flex justify-center">
		<Prose>
			<p
				class="border-l-4 border-l-dsa-red p-2 dark:border-l-dsa-red1 dark:bg-dsa-black1 dark:text-white"
			>
				This is a list of recipies submitted by <a href='/fite'>FITE</a> contributors.
			</p>
		</Prose>
	</div>
	<div class="flex justify-center">
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
	</div>
</article>
