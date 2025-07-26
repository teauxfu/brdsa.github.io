<script lang="ts">
	import { config } from '$lib/config'
	import PaletteBackground from '$lib/PaletteBackground.svelte';
	let { data } = $props()
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<PaletteBackground backgroundClass="opacity-75" >
	<h1 class="text-3xl font-bold pl-2">Baton Rouge DSA</h1>
</PaletteBackground>

