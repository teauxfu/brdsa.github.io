<script lang="ts">
	import type { PostMetadata } from '$lib/types';
    import About, { metadata } from './donate.md'
    const meta = metadata as PostMetadata;
</script>

<code>
    {meta.title} {meta.date}
</code>

<About />