<script lang="ts">
	import PaletteBackground from '$lib/PaletteBackground.svelte';
	import type { PostMetadata } from '$lib/types';
	import GetInvolved from './get-involved.md';
</script>

<article class="flex flex-col">
	<hgroup>
		<PaletteBackground>
			<h1 class="inline-block">Get involved</h1>
		</PaletteBackground>
	</hgroup>

    <div class="bg-dsa-black4/50 dark:bg-dsa-red4/50 p-2">
        <div class="prose flex gap-10 justify-between">
            <img src="https://www.dsausa.org/files/2019/05/baker.jpg" title="Ella Baker" 
                alt="Ella Baker passionately speaking into a mic"
                class="inline-block mb-0 object-scale-down"
                />
            <div class="float-right text-xl">
                <blockquote class="border-l-dsa-red">We who believe in freedom cannot rest</blockquote>
                <p>
                    <cite class="dark:text-dsa-red dark:font-bold">-- Ella Baker, 1964</cite>
                </p>
            </div>
        </div>
    </div>
 

	<div class="mx-auto prose bg-white/90">
		<GetInvolved />
	</div>

    <div class="p-2">
        <iframe src="https://calendar.google.com/calendar/embed?src=33f91d95d3ed14ecfbf1848ae987b26e0b8979829a078c99a2d142fadbec13bd%40group.calendar.google.com&ctz=America%2FChicago" style="border: 0" width="100%" height="600" frameborder="0" scrolling="no" title="BR DSA's Google Calendar"></iframe>
    </div>
</article>
