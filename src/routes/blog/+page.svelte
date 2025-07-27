<script lang="ts">
	import PaletteBackground from '$lib/components/PaletteBackground.svelte';
	import PaletteHeader from '$lib/components/PaletteHeader.svelte';
	import Prose from '$lib/components/Prose.svelte';
	let { data } = $props();

	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric'		
	};
</script>

<svelte:head>
	<title>Statements by BRDSA</title>
	<meta name="Statements and blog posts released by Baton Rouge DSA" />
</svelte:head>

<article class="@container flex flex-col">
	<PaletteHeader>Statements</PaletteHeader>
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
					<a href="/blog/{post.slug}" class="text-4xl underline decoration-dsa-red">{post.title}</a>
					<time>{new Date(post.date).toLocaleDateString('en-us', options)}</time>
				</li>
			{/each}
		</ul>
	</nav>
</article>
