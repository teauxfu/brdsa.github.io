<script lang="ts">
	import PaletteBackground from '$lib/PaletteBackground.svelte';
	let { data } = $props();

	const options : Intl.DateTimeFormatOptions = {
		weekday: "long",
		year: "numeric",
		month: "long",
	};
</script>

<header>
	<hgroup>
		<PaletteBackground>
			<h1>Statements</h1>
		</PaletteBackground>
		<p>Recent statements and articles by Baton Rouge DSA.</p>
	</hgroup>
</header>
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
