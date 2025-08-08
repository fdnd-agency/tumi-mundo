<script>
  import { DeleteDialog, PlaylistStories, PlaylistMeta, PlaylistHeader  } from '$lib/index';

  export let data;
  let playlist = data?.playlist;
  let isLoading = !playlist;
  let error = null;

  $: if (playlist) isLoading = false;


</script>

<main>
  <article>
    <PlaylistHeader {playlist} />
    <!-- <PlaylistMeta {playlist} {isLiked} {toggleLike} /> -->
     <PlaylistMeta {playlist} isLiked={playlist.isLiked} />

    {#if isLoading}
      <div class="loading">Loading playlist...</div>
    {:else if error}
      <p class="error">Error loading playlist: {error}</p>
    {:else}
      <PlaylistStories stories={playlist.stories} />
    {/if}
  </article>

   <DeleteDialog {playlist} setError={(msg) => error = msg} />

</main>

<style>

article {
  margin: 0 auto;
  height: max-content;
  width: 31.25em;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}

main {
  display: flex;
  background-image: var(--bg-image-playlist);
  min-height: 100vh;
}

</style>