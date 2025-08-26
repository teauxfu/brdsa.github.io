<script lang="ts">
	let { reversed = false, backgroundClass = "opacity-65", children } = $props();
</script>

<div class="relative isolate">
	<div class="{backgroundClass} absolute inset-0 -z-10 grid grid-cols-5">
		{#if reversed}
			<div class="bg-dsa-red4 dark:bg-dsa-black4"></div>
			<div class="bg-dsa-red3 dark:bg-dsa-black3"></div>
			<div class="bg-dsa-red2 dark:bg-dsa-black2"></div>
			<div class="bg-dsa-red1 dark:bg-dsa-black1"></div>
			<div class="bg-dsa-red dark:bg-dsa-black"></div>
		{:else}
			<div class="bg-dsa-red dark:bg-dsa-black"></div>
			<div class="bg-dsa-red1 dark:bg-dsa-black1"></div>
			<div class="bg-dsa-red2 dark:bg-dsa-black2"></div>
			<div class="bg-dsa-red3 dark:bg-dsa-black3"></div>
			<div class="bg-dsa-red4 dark:bg-dsa-black4"></div>
		{/if}
	</div>
	<div class="relative">
		{@render children?.()}
	</div>
</div>
