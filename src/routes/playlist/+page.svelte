<script>
  import Playlist from '../../components/layout/playlist.svelte';

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<main>
  <h2>Playlists</h2>
  <section class="playlist-list">
    {#each data.playlists as playlist}
      <Playlist {playlist} />
    {/each}
  </section>
</main>

<style>
  main {
    background-color: purple;
    height: 100vh;
    height: 100dvh; /* for dynamic viewport height */
  }

  section.playlist-list {
    display: flex;
    gap: 20px;
    overflow: scroll;
  }
</style>
