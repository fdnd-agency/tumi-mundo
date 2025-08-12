<script>
  import { Story } from '$lib/index';
  export let stories = [];
</script>

{#if stories.length > 0}
  <section class="stories-section">
    <ul>
      {#each stories as story}
        <li><Story {story} /></li>
      {/each}
    </ul>
  </section>
{:else}
  <section class="no-playlist">
    <p>Playlist not found.</p>
    <a href="/lessons" class="view-all">View all playlists</a>
  </section>
{/if}

<style>

.stories-section {
  height: 25em;
  overflow-y: scroll;
  width: 100%;
  scrollbar-width: none;
}

.stories-section > ul {
  display: flex;
  flex-direction: column;
  gap: 0.625em;
  align-items: center;
}

.no-playlist {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 10em;
  width: 100%;
  color: var(--color-white);
}

.view-all {
  text-decoration: underline;
}
</style>