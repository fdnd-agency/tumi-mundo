<script>
  import { Carousel } from '$lib/index';
  export let data;
</script>

<section class="all-stories">
  <h2>All stories</h2>
  <nav class="language-filter">
    <label for="checkbox-nl">
      <img src="/languages/Dutch.svg" alt="dutch" width="20" height="20" />Dutch
    </label>
    <input type="checkbox" id="checkbox-nl" />

    <label for="checkbox-en">
      <img src="/languages/English.svg" alt="english" width="20" height="20" />English
    </label>
    <input type="checkbox" id="checkbox-en" />

    <a href="/all-stories">Show all</a>
  </nav>
  <Carousel {data} />
</section>

<style>
  .all-stories {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 31.25em;
    padding: var(--space-md);
  }

  .all-stories > h2 {
    align-self: start;
    margin: 0;
    font-size: var(--font-size-lg);
    margin-bottom: var(--space-sm);
  }

  nav {
    display: flex;
    margin-top: var(--space-md);
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .language-filter {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .language-filter > a {
    margin-left: auto;
    color: var(--color-white);
  }

  .language-filter > a:hover {
    text-decoration: underline;
  }

  label {
    display: flex;
    align-items: center;
    padding: var(--space-xs);
    padding-right: var(--space-sm);
    background-color: hsla(263, 21%, 62%, 1);
    color: var(--color-text);
    border-radius: var(--border-radius);
  }

  label:nth-of-type(1) {
    margin-right: var(--space-md);
  }

  input[type="checkbox"] {
    opacity: 0;
    position: absolute;
  }

  input[type="checkbox"]:checked + label {
    background-color: var(--color-text-light);
    font-weight: var(--font-weight-bold);
  }

  label > img {
    height: 1.5em;
    width: auto;
    margin-right: var(--space-sm);
  }
</style>
