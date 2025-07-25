    <script lang="ts">
        let { PostContent, meta }  = $props()
    </script>

    <div>
        <article>
            <header>
            <h1>{meta.title}</h1>
            </header>
            <!-- render the post -->
            <div>
                <PostContent />
            </div>
        </article>
    </div>
