<script>
  import { Search } from '$lib/index';

  export let data = { languages: [] };
  export let selected = [];         
  export let max = 3;               

  let filteredLanguages = data.languages;
  let searchTerm = "";

  data.languages = data.languages.map((l) => ({ ...l, name: l.language }));

  function handleFilter(event) {
    filteredLanguages = event.detail;
  }

  $: maxed = selected.length >= max;
</script>

<Search
  data={data.languages}
  bind:searchTerm
  on:filter={handleFilter}
/>

<hr class="line" />

{#if filteredLanguages.length > 0}
  <ul>
    {#each filteredLanguages as lang (lang.language)}
      <li class="languages">
        <input
          class="radio"
          type="checkbox"
          id={"language-" + lang.language}
          name="language"
          value={lang.language}
          bind:group={selected}                  
          disabled={maxed && !selected.includes(lang.language)}  
        />
        <label for={"language-" + lang.language}>
          <img
            src={"/languages/" + lang.language + ".svg"}
            alt={lang.language + " flag"}
            class="flag-svg"
            height="55" width="66"
          />
          <strong class="language-strong">{lang.language}</strong>
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
    max-width: 31.25em;
  }

  ul {
    height: 70vh;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    margin-bottom: 1em;
    flex-grow: 1;
    max-width: 31.25em;
  }

  li.languages, .radio, ul, .line { 
    width: 100%; 
  }

  input[type="checkbox"] { 
    position: absolute; 
    left: -9999%; 
  }

  input[type="checkbox"] + label {
    display: inline-block;
    color: black;
    background-color: var(--color-white);
    margin: auto auto 0.125em;
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

  input[type="checkbox"]:disabled + label {
    opacity: 0.6;
    cursor: not-allowed;
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

  .limit {
    min-height: 1.25em;
    color: #d67;
    font-size: 0.9rem;
  }
</style>
