<script lang="ts">
	import PaletteHeader from '$lib/PaletteHeader.svelte';
	import Prose from '$lib/Prose.svelte';
	import GetInvolved from './get-involved.md';
</script>

<svelte:head>
	<title>Get involved</title>
	<meta name="How you can get involved with Baton Rouge DSA" />
</svelte:head>

<article class="@container flex flex-col">
	<PaletteHeader>
	    Get Involved
	</PaletteHeader>
	<div class="bg-dsa-red4/65 dark:bg-dsa-black4/65">
		<Prose>
			<blockquote class="mb-0 border-l-dsa-red pr-1">
				We who believe in freedom cannot rest
				<footer>
					<cite class="dark:font-bold">
						-- <a href="https://en.wikipedia.org/wiki/Ella_Baker">Ella Baker</a>, 1964</cite
					>
				</footer>
			</blockquote>
			<img
				src="https://www.crmvet.org/crmpics/band/bakerella.jpg"
				title="Ella Baker"
				alt="Ella Baker passionately speaking into a mic"
				class="float-right mt-0 mb-0 object-scale-down py-2"
			/>
		</Prose>
	</div>

	<div class="mx-auto p-2">
		<Prose>
			<GetInvolved />
		</Prose>
	</div>

	<div class="p-2">
		<iframe
			src="https://calendar.google.com/calendar/embed?src=33f91d95d3ed14ecfbf1848ae987b26e0b8979829a078c99a2d142fadbec13bd%40group.calendar.google.com&ctz=America%2FChicago"
			style="border: 0"
			width="100%"
			height="600"
			frameborder="0"
			scrolling="no"
			title="BR DSA's Google Calendar"
		></iframe>
	</div>
</article>
