<script>
  import { fetchApi, DeleteDialog, PlaylistStories, PlaylistMeta, PlaylistHeader  } from '$lib/index';

  export let data;
  let playlist = data?.playlist;
  let isLoading = !playlist;
  let error = null;

  $: if (playlist) isLoading = false;

  let isLiked = playlist?.isLiked || false;
  let existingLikeId = playlist?.likeId || null;
  let profileId = 122;

  async function toggleLike(event) {
    event.preventDefault();
    const endpoint = isLiked ? `/tm_likes/${existingLikeId}` : '/tm_likes';
    const method = isLiked ? 'DELETE' : 'POST';

    try {
      const response = await fetchApi(endpoint, method, {
        playlist: playlist.id,
        profile: profileId
      });

      isLiked = !isLiked;
      existingLikeId = response?.id || null;
      playlist = { ...playlist, isLiked, likeId: existingLikeId };
    } catch (err) {
      console.error('Error toggling like:', err);
      error = err.message || 'Er is iets fout gegaan';
    }
  }

</script>

<main>
  <article>
    <PlaylistHeader {playlist} />
    <PlaylistMeta {playlist} {isLiked} {toggleLike} />

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