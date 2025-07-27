<script lang="ts">

let { children} = $props();

</script>

<div class="prose dark:prose-invert text-lg p-2 mx-auto">
    {@render children()}
</div>