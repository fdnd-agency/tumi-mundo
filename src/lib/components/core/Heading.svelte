<script>
  import { Back, Dropdown } from '$lib/index';
  export let variant = 'stories';
  export let title = '';
  export let backHref = '';
  export let backColor = 'white';
  export let showDropdown = true; 
</script>

{#if variant === 'stories'}
  <!-- All stories nav-->
  <header class="stories-header">
    <div class="heading">
      <a href={backHref || '/lessons'} aria-label="Go back to lessons">
        <Back color={backColor} />
      </a>
      <h1>{title || 'All Stories'}</h1>
    </div>
  </header>

{:else if variant === 'languages'}
  <!-- Languages nav -->
  <nav class="navigation">
    <a href={backHref || '/onboarding'} aria-label="Go back to onboarding">
      <Back color={backColor} />
    </a>
    <h1>{title || 'We are going to learn!'}</h1>
  </nav>

  <p>
    Now it is time to pick the language(s) your child will learn.
    You can pick a <strong>maximum of 3</strong> languages.
  </p>

{:else}
  <!-- Cancelled nav -->
  <nav id="cancelled" class="playlist-nav">
    <a href={backHref || '/lessons'} aria-label="go back" class="go-back-btn">
      <Back />
    </a>
    {#if showDropdown}
      <Dropdown />
    {/if}
  </nav>
{/if}

<style>
/* --- stories variant --- */
.stories-header .heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
  position: relative;
}

.stories-header .heading > h1 {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.7em;
}

/* --- languages variant --- */
.navigation {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
}

.navigation > a {
  align-self: start;
}

h1 {
  margin-bottom: 1em;
  text-align: center;
  width: 100%;
}

/* --- cancelled variant --- */
.go-back-btn{
  z-index: 10;
}

.playlist-nav {
  max-width: 31.25em;
  width: 100%;
  flex-wrap: wrap;
  padding: var(--space-md);
  position: absolute;
  margin-top: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#cancelled {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .75rem;
  margin-bottom: 1em;
}

#cancelled .go-back-btn {
  display: inline-flex;
  align-items: center;
}

p {
  text-align: center;
  margin-bottom: 2.5em;
  width: 100%;
} 
</style>

