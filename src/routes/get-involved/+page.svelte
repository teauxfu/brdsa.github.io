<script lang="ts">
	import PaletteHeader from '$lib/PaletteHeader.svelte';
	import GetInvolved from './get-involved.md';
</script>

<svelte:head>
	<title>Get involved</title>
    <meta name="How you can get involved with Baton Rouge DSA"/>
</svelte:head>

<article class="@container flex flex-col">
	<PaletteHeader  backgroundClass="opacity-75 dark:opacity-100" headerClass="text-5xl font-bold pl-2 pb-3">
		<h1>Get Involved</h1>
	</PaletteHeader>

	<div id="ella-baker-quote" class="prose p-2">
		<div class="text-xl">
			<blockquote class="border-l-dsa-red mb-0">
                We who believe in freedom cannot rest
                <footer>
                    <cite class="dark:font-bold dark:text-dsa-red"> -- <a href="https://en.wikipedia.org/wiki/Ella_Baker">Ella Baker</a>, 1964</cite>
                </footer>
            </blockquote>
			<img
				src="https://www.dsausa.org/files/2019/05/baker.jpg"
				title="Ella Baker"
				alt="Ella Baker passionately speaking into a mic"
				class="float-right mt-0 mb-0 py-2 object-scale-down"
			/>
		</div>
	</div>

	<div id="description" class="mx-auto prose bg-white/90 px-2">
		<GetInvolved />
	</div>

	<div id="calendar" class="p-2">
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
