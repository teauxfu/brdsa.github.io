    <script lang="ts">
	    let { data } = $props();
    </script>

    <div>
        <article>
            <header>
                <h1 class="text-xl">{data.metadata.title}</h1>
            </header>
            <div class="prose prose-headings:text-xl prose-headings:underline">
                <data.component />
            </div>
        </article>
    </div>
 