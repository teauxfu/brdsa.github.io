<script lang="ts">
	//@ts-nocheck because our enhanced image complains about not having a default prop, but it does have one
	import PaletteHeader from '$lib/components/PaletteHeader.svelte';
	import Prose from '$lib/components/Prose.svelte';
	import type {Picture} from 'vite-imagetools';

	let { data } = $props();
    const { component: Post, metadata } = data;

	const imageModules = import.meta.glob(
		'/src/lib/images/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
		{
			eager: true,
			query: {
				enhanced: true
			}
		}
	)

	console.log(Object.keys(imageModules))

	const match = imageModules[`/src/lib/images/${metadata.imageUrl}`] as string | Picture ;
</script>

<svelte:head>
	<title>{metadata.title}</title>
	<meta name="description" content={metadata.description} />
</svelte:head>

<article class="@container flex flex-col grow">
	<PaletteHeader>
		{metadata.title}
	</PaletteHeader>

    <div class="bg-dsa-red4/65 dark:bg-dsa-black4/65">
		<Prose>
			<p class="dark:text-white">
				{metadata.description}
                {#if metadata.imageUrl}
					<enhanced:img src={match.default} alt={metadata.imageDescription ?? 'This image has no description'}/>
                {/if}
			</p>
		</Prose>
	</div>

    <div class="bg-white/90 dark:bg-dsa-black/90">
        <Prose>
            <Post></Post>
        </Prose>
    </div>
</article>
