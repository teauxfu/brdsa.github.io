<script lang="ts">
	import PaletteBackground from '$lib/PaletteBackground.svelte';
	import PaletteHeader from '$lib/PaletteHeader.svelte';
	import Prose from '$lib/Prose.svelte';
	let { data } = $props();

	const options: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long'
	};
</script>

<svelte:head>
	<title>Statements and blog posts</title>
	<meta name="Statements and blog posts released by Baton Rouge DSA" />
</svelte:head>

<article class="@container flex flex-col">
	<PaletteHeader>Statements & posts</PaletteHeader>
	<div class="bg-dsa-red4/65 dark:bg-dsa-black4/65">
		<Prose>
			<p class="dark:text-white">
				This is a list of statements released by our chapter.
			</p>
		</Prose>
	</div>
	<nav>
		<ul class="flex flex-col gap-3">
			{#each data.posts as post}
				<li class="flex flex-col">
					<time>{new Date(post.date).toLocaleDateString('en-us', options)}</time>
					<a href="/blog/{post.slug}" class="text-5xl">{post.title}</a>
				</li>
			{/each}
		</ul>
	</nav>
</article>
