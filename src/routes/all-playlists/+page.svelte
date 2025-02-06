<script>
    import { Playlist } from '$lib/index';
    
    export let data;
  </script>
  
  <section class="playlist-list">
    {#if data && Array.isArray(data.playlists) && data.playlists.length > 0}
      {#each data.playlists as playlist}
        <a href={`/playlist/${playlist.id}`} class="playlist-link">
          <Playlist {playlist} />
        </a>
      {/each}
    {:else}
      <p>No playlists available.</p>
    {/if}
  </section>