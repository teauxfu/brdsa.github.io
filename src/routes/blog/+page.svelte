<script lang="ts">
	import type { PageProps } from './[slug]/$types';

	let { data }: PageProps = $props();
</script>

<h1>{data.meta.title}</h1>
<div>{@html data.content}</div>