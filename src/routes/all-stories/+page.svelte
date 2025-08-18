<script>
 import { Heading , AllStoriesFilter, StoryList } from '$lib/index';

  /** @type {import('./$types').PageData} */
  export let data;

  $: ({ stories, seasons, languages, animals, selectedSeason, selectedLanguage, selectedAnimal, selectedSorting } = data);
</script>

<main>
  <Heading variant="stories" />
  <AllStoriesFilter 
    {seasons} 
    {languages} 
    {animals} 
    {selectedSeason}
    {selectedLanguage}
    {selectedAnimal}
    {selectedSorting}
  />
  <StoryList {stories} />
</main>

<style>
  main {
    background-image: var(--bg-image-purple);
    color: var(--color-white);
    min-height: 100vh;
    padding: 1em;
  }
</style>
