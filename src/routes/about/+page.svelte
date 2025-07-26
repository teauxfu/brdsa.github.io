<script lang="ts">
	import type { PostMetadata } from '$lib/types';
    import About, { metadata  } from './about.md'
    const meta = metadata as PostMetadata;
</script>

<hgroup>
    <h1>About Baton Rouge DSA</h1> 
</hgroup>

<div class="prose">
    <About />
</div>