<script lang="ts">
	// import { formatDate } from '$lib/utils'
	import { config } from '$lib/config'

	let { data } = $props()
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<p>Posts will show up here as a list</p>
	<a href="blog/about" class="text-blue-600 underline">go to about</a>
	<iframe src="api/posts" title="debug"></iframe>

	<ul class="posts">
		{#each data.posts as post}
			<li class="post mb-4">
				<a href={`blog/${post.slug}`} class="font-bold underline">{post.title}</a>
				<p class="date">{post.date}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>

