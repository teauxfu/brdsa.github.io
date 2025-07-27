<script lang="ts">
	import PaletteBackground from "./PaletteBackground.svelte";


let {  children, headerClass='text-6xl mb-4', backgroundClass = 'opacity-65' } = $props();

</script>

<PaletteBackground {backgroundClass}>
    <h1 class={headerClass}>
        {@render children()}
    </h1>
</PaletteBackground>
