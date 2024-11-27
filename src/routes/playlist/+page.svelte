<script>
  import Playlist from '../../components/layout/playlist.svelte';

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<section>
  <h2>Playlists</h2>
  <ul>
      {#each data.playlists as playlist}
          <Playlist {playlist} />
      {/each}
  </ul>
</section>
<style>
  section{
      background-color: purple;
      height: 100vh;
  }

  ul {
      display: flex;
      gap: 20px;
      overflow: scroll;
  }
</style>