<script>
  import { Playlist } from '$lib/index';
  import { createEventDispatcher } from 'svelte';

  export let data;
  const dispatch = createEventDispatcher();

  function likeToggle(event) {
    dispatch('likeToggle', event.detail);
  }
</script>

<section class="own-playlist suggested-playlist">
  <h2>Suggested playlists</h2>
  <div class="playlist-list">
    <ul class="playlist-scroll-list">
      {#each data.playlists.filter(p => !p.isLiked) as playlist (playlist.id)}
        <li><Playlist {playlist} on:likeToggle={likeToggle} /></li>
      {/each}
    </ul>
  </div>
</section>
