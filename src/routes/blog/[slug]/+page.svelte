<script lang="ts">
	import PaletteHeader from '$lib/PaletteHeader.svelte';
	import Prose from '$lib/Prose.svelte';

	let { data } = $props();
    const {component: Post, metadata} = data;
</script>

<svelte:head>
	<title>{metadata.title}</title>
	<meta name={metadata.description} />
</svelte:head>

<article class="@container flex flex-col">
	<PaletteHeader>
		{metadata.title}
	</PaletteHeader>

    <div class="bg-dsa-red4/65 dark:bg-dsa-black4/65">
		<Prose>
			<p class="dark:text-white">
				{metadata.description}
                {#if metadata.imageUrl}
                    <img src={metadata.imageUrl}  alt={metadata.imageDescription}/>
                {/if}
			</p>
		</Prose>
	</div>

    <div class="bg-white/80 dark:bg-dsa-black/80">
        <Prose>
            <Post></Post>
        </Prose>
    </div>
</article>
