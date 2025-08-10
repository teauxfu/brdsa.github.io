<script lang="ts">
	import HeadSummary from "$lib/components/HeadSummary.svelte";
	import PaletteHeader from "$lib/components/PaletteHeader.svelte";
	import Prose from "$lib/components/Prose.svelte";
	let { data } = $props();
	const { post, hero } = data;
	const { title, description } = post;
</script>

<svelte:head>
	<HeadSummary {title} description={description ?? title} />
</svelte:head>

<article>
	<PaletteHeader>
		{post.title}
	</PaletteHeader>

	<div class="palette-sibling flex justify-center">
		<Prose>
			{#if post.description}
				<p
					class="border-l-4 border-l-dsa-red p-2 dark:border-l-dsa-red1 dark:bg-dsa-black1 dark:text-white"
				>
					{post.description}
				</p>
			{/if}
			{#if hero}
				<enhanced:img
					src={hero}
					alt={post.imageDescription ?? "This image has no description"}
					class="-mt-7"
				/>
			{/if}
		</Prose>
	</div>
	<div class="flex justify-center">
		<Prose>
			<data.component></data.component>
		</Prose>
	</div>
</article>
