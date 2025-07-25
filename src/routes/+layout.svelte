<script lang="ts">
	import '../app.css';

	let { data, children } = $props();
	

</script>

<div>
	<header>
		<nav>
			<ul class="flex gap-2">
				{#each data.sections as {slug, title} }
					<a href={slug} class="text-blue-500 underline font-bold">{title}</a>
				{/each}
			</ul>
		</nav>
	</header>
	<main>
		<article>
			{@render children()}
		</article>
	</main>
</div>
