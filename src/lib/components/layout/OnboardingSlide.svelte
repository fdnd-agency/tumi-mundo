<script>

  import { Eclipse } from '$lib/index';

  export let title;
  export let text;
  export let buttonLabel = 'Continue';
  export let buttonLink = null;
  export let color = 'hsla(213, 53%, 52%, 1)';
  export let showButton = true;
  export let isLast = false;
  export let eclipseColor;
</script>

<section style="background-color: {color}">
  <a href="/sign-up" class="skip">Skip</a>

  <div class="mouse">
    <Eclipse color= {eclipseColor} />
    <picture class="rat">
      <source srcset="/characters/Rat.svg?format=avif" type="image/avif" />
      <source srcset="/characters/Rat.svg?format=webp" />
      <img src="/characters/Rat.svg" alt="rat image" height="250" />
    </picture>
  </div>

  <slot name="indicators"></slot>

  <h1>{title}</h1>
  <p>{text}</p>

  {#if isLast}
    <a href={buttonLink} class="make-acc">{buttonLabel}</a>
  {:else if showButton}
    <button type="button" class="carousel-button right">{buttonLabel}</button>
  {/if}
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    height: 100dvh;
    width: 100vw;
    color: var(--color-white);
  }

  .mouse {
    width: 100%;
    height: 25em;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .rat {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  .eclipse {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 18rem; /* iets groter maken */
    height: auto;
    opacity: 0.3; /* subtiel effect */
    z-index: 0; /* achter de rat */
    pointer-events: none;
  }

  h1 { 
    text-align: center;
    font-size: 1.25em; 
    margin-bottom: 1em; 
  }

  p { 
    font-size: 0.8em; 
    max-width: 45ch; 
    margin: auto; 
    margin-top: 0;
    text-align: left;
  }

  .skip {
    margin-left: auto;
    color: white;
    font-size: 1.25em;
    padding: 1em;
  }

  button, .make-acc {
    margin: auto;
    margin-bottom: 2.5em;
    border-radius: .6em;
    width: 80%;
    padding: 1em;
    text-align: center;
    font-size: 1em;
    border: none;
  }

  .make-acc { background-color: hsla(173, 94%, 24%, 1); }
</style>
