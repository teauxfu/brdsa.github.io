<script lang="ts">
	import PaletteHeader from '$lib/components/PaletteHeader.svelte';
	import Prose from '$lib/components/Prose.svelte';
	import { getSummary } from '$lib/recipieUtils.js';
	let { data } = $props();
	const { post, hero } = data;
</script>

<svelte:head>
	<title>{post.title}</title>
	<meta name="description" content={post.description} />
</svelte:head>

<article>
	<PaletteHeader>
		{post.title}
	</PaletteHeader>

	<div class="palette-sibling">
		<Prose>
			<p
				class="border-l-4 border-l-dsa-red p-2 dark:border-l-dsa-red1 dark:bg-dsa-black1 dark:text-white"
			>
				{getSummary(post)}
				{#if post.description}
					<br/>
					{post.description}
				{/if}
			</p>
			{#if hero}
				<enhanced:img
					src={hero}
					alt={post.imageDescription ?? 'This image has no description'}
					class="-mt-7"
				/>
			{/if}
		</Prose>
	</div>
	<Prose>
		<data.component></data.component>
	</Prose>
</article>
