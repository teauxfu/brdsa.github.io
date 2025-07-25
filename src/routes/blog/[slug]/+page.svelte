    <script lang="ts">
        import type { PageData } from './$types';

        interface Props {
            data: PageData;
        }

	    let { data }: Props = $props();
    </script>

    <div>
        <article>
            <header>
            <h1>{data.metadata.title}</h1>
            </header>
            <!-- render the post -->
            <div>
                <data.component />
            </div>
        </article>
    </div>
