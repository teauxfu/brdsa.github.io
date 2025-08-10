<script lang="ts">
	import PaletteHeader from '$lib/components/PaletteHeader.svelte';
	import Prose from '$lib/components/Prose.svelte';
	import GetInvolved from './get-involved.md';
	import hero from '$lib/images/Ella_Baker.jpg?enhanced';
	const description = "How you can get involved with Baton Rouge DSA";
</script>

<svelte:head>
	<title>Get involved</title>
	<meta name="description" content={description} />
	<meta property="og:description" content={description}/>;
</svelte:head>

<article>
	<PaletteHeader>Get Involved</PaletteHeader>
	<div class="palette-sibling flex justify-center">
		<Prose>
			<blockquote>
				We who believe in freedom cannot rest until it comes
				<footer>
					<cite class="dark:font-bold">
						-- <a href="https://en.wikipedia.org/wiki/Ella_Baker">Ella Baker</a>, 1964</cite
					>
				</footer>
			</blockquote>
			<figure>
				<enhanced:img
				src={hero}
				title="Ella Baker"
				alt="Ella Baker passionately speaking into a mic"
				class="float-right mt-0 mb-0 py-2 w-full lg:w-2/3"
				/>
				<figcaption>George Ballis via <a href="https://www.crmvet.org/images/imgfs.htm" class="text-nowrap">Civil Rights Movement Archive</a></figcaption>
			</figure>
		</Prose>
	</div>
	
	<div class="flex justify-center">
		<Prose>
			<p class="dark:text-white p-2">
				Want to stay in the loop? <a href="https://actionnetwork.org/forms/join-brdsa" target="_blank">Join our email list</a> or save a link to the calendar below.
			</p>
		</Prose>
	</div>

	<div class="p-2">
		<iframe
			src="https://calendar.google.com/calendar/embed?src=33f91d95d3ed14ecfbf1848ae987b26e0b8979829a078c99a2d142fadbec13bd%40group.calendar.google.com&ctz=America%2FChicago"
			style="border: 0;"
			width="100%"
			height="600"
			frameborder="0"
			scrolling="no"
			title="BR DSA's Google Calendar"
		></iframe>
	</div>


	<div class="p-2 flex justify-center">
		<Prose>
			<GetInvolved />
		</Prose>
	</div>
</article>
