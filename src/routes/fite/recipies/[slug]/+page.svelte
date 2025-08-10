<script lang="ts">
	import HeadSummary from "$lib/components/HeadSummary.svelte";
	import PaletteHeader from "$lib/components/PaletteHeader.svelte";
	import Prose from "$lib/components/Prose.svelte";
	import { getSummary } from "$lib/recipieUtils.js";
	let { data } = $props();
	const { post, hero } = data;
</script>

<svelte:head>
	<HeadSummary
		title={post.title}
		description={post.description ?? "A recipie contributed to FITE"}
	/>
</svelte:head>

<article>
	<PaletteHeader>
		{post.title}
	</PaletteHeader>

	<div class="palette-sibling flex justify-center">
		<Prose>
			<p
				class="border-l-4 border-l-dsa-red p-2 dark:border-l-dsa-red1 dark:bg-dsa-black1 dark:text-white"
			>
				{getSummary(post)}
				{#if post.description}
					<br />
					{post.description}
				{/if}
			</p>
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
	<div class="palette-sibling flex justify-center">
		<Prose>
			<p
				class="border-l-4 border-l-dsa-red p-2 dark:border-l-dsa-red1 dark:bg-dsa-black1 dark:text-white"
			>
				<a href="/fite/recipies">Back to list of recipies</a>
			</p>
		</Prose>
	</div>
</article>
