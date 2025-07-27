<script lang="ts">
	import PaletteHeader from '$lib/PaletteHeader.svelte';
	import Prose from '$lib/Prose.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name={data.description} />
</svelte:head>

<article class="@container flex flex-col">
	<PaletteHeader>
		{data.metadata.title}
	</PaletteHeader>

	<Prose>
		<data.component />
	</Prose>
</article>
