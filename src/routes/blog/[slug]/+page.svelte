<script lang="ts">
	import PaletteHeader from '$lib/components/PaletteHeader.svelte';
	import Prose from '$lib/components/Prose.svelte';
	import type { PostMetadata } from '$lib/types.js';
	import { getPostBySlug } from '$lib/utils.js';
	let { data } = $props();
	const { post, html, hero, postModule } = data;

	let metadata: PostMetadata | undefined;
	let postComponent: any = $state();

	if (post.slug) {
		getPostBySlug(post.slug).then((meta) => {
			if (meta) {
				metadata = meta;
				postComponent = metadata.module.default;
			}
		});
	}
</script>

<svelte:head>
	<title>{post.title}</title>
	<meta name="description" content={post.description} />
</svelte:head>

<article>
	<PaletteHeader>
		{post.title}
	</PaletteHeader>

	<div class="bg-dsa-red4/65 dark:bg-dsa-black4/65">
		<Prose>
			<p
				class="border-l-4 border-l-dsa-red p-2 dark:border-l-dsa-red1 dark:bg-dsa-black1 dark:text-white"
			>
				{post.description}
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

	<!-- {#if html}
		<div>
			<Prose>
				{@html html}
			</Prose>
		</div>
	{/if} -->

	{#if postComponent}
		<p>component below</p>
		<postComponent></postComponent>
	{/if}
</article>
