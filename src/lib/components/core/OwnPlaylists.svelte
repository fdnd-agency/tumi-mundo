<script>
  import { Playlist, Plus } from '$lib/index';
  import { createEventDispatcher } from 'svelte'
  
  export let data;
  export let onLikeToggle;

  const dispatch = createEventDispatcher();

  function likeToggle(event) {
    dispatch('likeToggle', event.detail);
  }
</script>

<section class="own-playlist">
  <h2>Own playlists</h2>
  <div class="playlist-list">
    <ul class="playlist-scroll-list">
      <li class="create-playlist">
        <a href="#popup">
          <Plus />
          <h3>Make a playlist</h3>
          <small>Add your favorite stories in one playlist</small>
        </a>
      </li>
      {#each data.playlists.slice().reverse() as playlist (playlist.id)}
        <li>
          <Playlist {playlist} on:likeToggle={likeToggle} />
        </li>
      {/each}
    </ul>
  </div>
</section>

<style>
  .own-playlist {
    display: flex;
    flex-direction: column;
    padding: var(--space-md);
  }

  .create-playlist {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 10em;
    height: 16em;
    background-color: hsla(248, 27%, 36%, 1);
    text-align: center;
    color: var(--color-text-light);
    border-radius: 0.5em;
    padding: 0.5em;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
  }

  .create-playlist a {
    color: white;
  }

  .create-playlist h3 {
    margin-top: 1em;
    font-size: 1em;
    font-weight: bold;
    margin-bottom: 1em;
  }

  .create-playlist small {
    margin-top: auto;
  }

  .playlist-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--space-lg);
    overflow-x: auto;
    padding-bottom: var(--space-md);
    scroll-snap-type: x mandatory;
  }

  .playlist-scroll-list {
    display: flex;
    gap: 1em;
  }
</style>
