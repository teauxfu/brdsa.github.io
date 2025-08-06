<script lang="ts">
	import PaletteHeader from '$lib/components/PaletteHeader.svelte';
	import LightHouseScores from '$lib/components/LightHouseScores.svelte';
	import type { PostMetadata } from '$lib/types';
	import Proposal from './sveltekit-migration-proposal.md'
	import { metadata } from './sveltekit-migration-proposal.md'
	import Prose from '$lib/components/Prose.svelte';
	const { title, description } = metadata as PostMetadata;
</script>


<svelte:head>
	<title>Resources</title>
	<meta name="description" content="Information about donating to Baton Rouge DSA" />
</svelte:head>


<article>
	<PaletteHeader>
		{title}
	</PaletteHeader>

	<div class="bg-dsa-red4/65 dark:bg-dsa-black4/65">
		<Prose>
			<p
				class="border-l-4 border-l-dsa-red p-2 dark:border-l-dsa-red1 dark:bg-dsa-black1 dark:text-white"
			>
				{description}
			</p>
			<!-- {#if hero}
				<enhanced:img
					src={hero}
					alt={post.imageDescription ?? 'This image has no description'}
					class="-mt-7"
				/>
			{/if} -->
		</Prose>
	</div>

	<div>
		<Prose>
			<Proposal/>
		</Prose>
	</div>
</article>