<script>
  import { Story } from '$lib/index';
  export let stories = [];
</script>

<section class="story-list">
  {#if stories.length === 0}
    <p class="no-stories-message">No stories found</p>
  {:else}
    {#each stories as story (story.id)}
      <Story {story} />
    {/each}
  {/if}
</section>

<style>
  .story-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1em;
  }

  .no-stories-message {
    color: var(--color-white);
    font-size: 1.2em;
    text-align: center;
    width: 100%;
    padding: 2em;
  }
</style>
