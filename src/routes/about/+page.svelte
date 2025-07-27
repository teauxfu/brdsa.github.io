<script lang="ts">
	import PaletteHeader from '$lib/PaletteHeader.svelte';
	import Prose from '$lib/Prose.svelte';
	import type { PostMetadata } from '$lib/types';
	import About, { metadata } from './about.md';
	const meta = metadata as PostMetadata;
</script>

<svelte:head>
	<title>About BRDSA</title>
	<meta name="About Baton Rouge DSA" />
</svelte:head>

<article class="@container flex flex-col">
	<PaletteHeader>About us</PaletteHeader>
	<div class="bg-dsa-red4/65 dark:bg-dsa-black4/65">
		<Prose>
            <div class="@2xl:flex @2xl:gap-3">
                <blockquote class="mb-0 border-l-dsa-red">
                    The Republican and Democratic parties, or, to be more exact, the Republican-Democratic
                    party, represents the capitalist class in the class struggle. They are the political wings
                    of the capitalist system and such differences as arise between them relate to spoils and not
                    to principles.
                    <footer>
                        <cite class="dark:font-bold">
                            -- <a href="https://www.marxists.org/archive/debs/works/1904/sp_wkingclss.htm"
                                >Eugene Debs</a
                            >, The Socialist Party and the Working Class, 1904</cite
                        >
                    </footer>
                </blockquote>
                <img
                    src="https://www.dol.gov/sites/dolgov/files/general/aboutdol/hallofhonor/images/Debs_hi.jpg"
                    title="Eugene V. Debs"
                    alt="Portrait of Eugene V. Debs"
                    class="float-right mt-0 mb-0 max-h-65 object-scale-down py-2"
                />
            </div>
		</Prose>
	</div>

	<div class="bg-white/80 dark:bg-dsa-black/80">
		<Prose>
			<About />
		</Prose>
	</div>
</article>
