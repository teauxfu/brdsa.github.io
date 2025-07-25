<script lang="ts">
	import type { Post } from '$lib/types';
    import About, { metadata } from './about.md'
    const meta = metadata as Post;
</script>

<code>
    {meta.title} {meta.date}
</code>

<About />