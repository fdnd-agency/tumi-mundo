<script>
  export let seasons;
  export let languages;
  export let animals;
  export let selectedSeason;
  export let selectedLanguage;
  export let selectedAnimal;
  export let selectedSorting;

  import { Filter } from '$lib/index';
</script>

<div class="filters">
  <Filter 
    {seasons} 
    {languages}
    {animals}  
    selectedSeason={selectedSeason} 
    selectedLanguage={selectedLanguage}
    selectedAnimal={selectedAnimal}
    selectedSorting={selectedSorting}
  />
</div>

<style>
  .filters {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1em;
    margin-bottom: 2em;
  }

  .filters :global(form) {
    display: contents;
  }

  .filters :global(select){
    background-color: hsla(266, 72%, 35%, 1);
    color: var(--color-white);
    border: none;
    border-radius: 0.25em;
    padding: 0.2em 0.3em;
    font-size: 1em;
    width: 100%;
  }

  .filters :global(option){
    color: black;
  }

  @media only screen and (max-width: 768px) {
    .filters {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
