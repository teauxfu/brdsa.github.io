<script lang="ts">
	import PaletteHeader from '$lib/components/PaletteHeader.svelte';
	import Prose from '$lib/components/Prose.svelte';
	import type { PostMetadata } from '$lib/types';
	import About, { metadata } from './about.md';
	const meta = metadata as PostMetadata;
    import hero from '$lib/images/Debs.jpg?enhanced'
</script>

<svelte:head>
	<title>About BRDSA</title>
	<meta name="description" content="About Baton Rouge DSA" />
</svelte:head>

<article>
	<PaletteHeader>About us</PaletteHeader>
	<div class="palette-sibling flex justify-center">
		<Prose>
            <div class="@2xl:flex @2xl:gap-3 items-center">
                <blockquote class="min-w-xs @md:min-w-sm">
                    The Republican and Democratic parties, or, to be more exact, the Republican-Democratic
                    party, represents the capitalist class in the class struggle. They are the political wings
                    of the capitalist system and such differences as arise between them relate to spoils and not
                    to principles.
                    <footer>
                        <cite class="dark:font-bold">
                            -- <a href="https://www.marxists.org/archive/debs/works/1904/sp_wkingclss.htm"
                                >Eugene V. Debs</a
                            >, The Socialist Party and the Working Class, 1904</cite
                        >
                    </footer>
                </blockquote>
                <figure>
                    <enhanced:img
                        src={hero}
                        title="Eugene V. Debs"
                        alt="Portrait of Eugene V. Debs"
                        class="float-right mt-0 mb-0 max-h-55 object-scale-down py-2"
                    />
                    <figcaption class="min-w-3xs">
                            <a href="https://www.dol.gov/general/aboutdol/hallofhonor/1990_debs" target="_blank">U.S. Department of Labor</a>
                    </figcaption>
                </figure>
            </div>
		</Prose>
	</div>

	<div class="p-2 flex justify-center">
		<Prose>
			<About />
		</Prose>
	</div>
</article>
