<script lang="ts">
	import PaletteBackground from "./PaletteBackground.svelte";

	let {
		children,
		headerClass = "text-5xl font-bold pl-2 pb-3",
		backgroundClass = "opacity-65"
	} = $props();
</script>

<PaletteBackground {backgroundClass}>
	<h1 class={headerClass}>
		{@render children()}
	</h1>
</PaletteBackground>
