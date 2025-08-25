<script lang="ts">

/**Any inner elements (children) will be rendered */
let { children} = $props();
</script>

<!-- 
@component
Use this component to render Markdown from posts.
It often helps to enclose the Prose element in a div with some background opacity.
-->

<div class="prose dark:prose-invert text-lg p-2">
    {@render children()}
</div>