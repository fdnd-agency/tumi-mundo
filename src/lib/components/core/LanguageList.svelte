<script>
  import { Search } from '$lib/index';

  export let data = { languages: [] };

  let filteredLanguages = data.languages;
  let searchTerm = "";

  data.languages.forEach(language => {
    language.name = language.language;
  });

  function handleFilter(event) {
    filteredLanguages = event.detail;
  }
</script>

<Search
  data={data.languages}
  bind:searchTerm
  on:filter={handleFilter}
/>

<hr class="line" />

{#if filteredLanguages.length > 0}
  <ul>
    {#each filteredLanguages as language}
      <li class="languages">
        <input
          class="radio"
          type="checkbox"
          id="language-{language.language}"
          name="language"
          value="{language.language}"
        />
        <label for="language-{language.language}">
          <img src="/languages/{language.language}.svg" alt="{language.language} flag" class="flag-svg" height="55" width="66" />
          <strong class="language-strong">{language.language}</strong>
        </label>
      </li>
    {/each}
  </ul>
{:else}
  <p>No languages found.</p>
{/if}

<style>
  .line {
    margin-top: 0.625em;
    margin-bottom: 0.625em;
    border-radius: 0.125em;
    background-color: hsla(197, 38%, 72%, 1);
    height: 1px;
    width: 100%;
  }

  ul {
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    margin-bottom: 1em;
    flex-grow: 1;
  }

  li.languages {
    width: 100%;
  }

  .radio {
    width: 100%;
  }

  input[type="checkbox"]:not(:checked),
  input[type="checkbox"]:checked {
    position: absolute;
    left: -9999%;
  }

  input[type="checkbox"] + label {
    display: inline-block;
    color: black;
    background-color: var(--color-white);
    list-style: none;
    align-self: self-end;
    margin: auto;
    margin-bottom: 0.125em;
    padding: 0.3125em;
    width: 100%;
    max-width: 31.25em;
    border-radius: 0.625em;
    position: relative;
    height: 3.75em;
  }

  input[type="checkbox"]:checked + label {
    color: var(--color-white);
    background-color: hsla(241, 71%, 32%, 1);
  }

  .flag-svg {
    position: absolute;
    top: 50%;
    left: 0.3125em;
    transform: translateY(-50%);
    width: 3.4375em;
    height: 100%;
  }

  .language-strong {
    position: absolute;
    top: 50%;
    left: 4.0625em;
    transform: translateY(-50%);
  }
</style>
