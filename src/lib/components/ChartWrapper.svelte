<!-- ChartWrapper.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  let ChartComponent : any | undefined;

  onMount(async () => {
    const module = await import('./LightHouseScores.svelte');
    ChartComponent = module.default;
  });
</script>

<p>wrapped chart appears below</p>
{#if ChartComponent}
  <ChartComponent/>
{/if}