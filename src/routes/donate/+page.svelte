<script lang="ts">
	import type { PostMetadata } from '$lib/types';
	import Donate, { metadata } from './donate.md';
	const meta = metadata as PostMetadata;
	const actionNetworkLink =
		'https://actionnetwork.org/widgets/v5/fundraising/donate-to-baton-rouge-democratic-socialists-of-america?format=js&source=widget&css=whitelabel&style=full';
</script>

<article>
	<hgroup>
        <h2>Donate to BR DSA</h2>
        <p>
            Want to see where your money goes? 
            Come to <a href="/get-involved">our next chapter meeting</a> and see what we're up to!
        </p>
    </hgroup>

	<Donate />

	<div>
		<iframe src={actionNetworkLink} title="Donate to BR DSA via ActionNetwork">
		</iframe>
	</div>
</article>
