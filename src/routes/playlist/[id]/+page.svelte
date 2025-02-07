<script>
  import { Story } from '$lib/index';

  export let data; 

  let playlist = data?.playlist;

</script>

{#if playlist}
  <h1>{playlist.title}</h1>
  <p>{playlist.description}</p>
  <ul>
    {#each playlist.stories as story}
      <Story {story} />
    {/each}
  </ul>
{:else}
  <p>Playlist niet gevonden.</p>
{/if}
