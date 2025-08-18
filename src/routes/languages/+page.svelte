<script>
  import { Heading, Button, LanguageList } from '$lib/index';

  export let data = {
    languages: []
  };
</script>

<main>
  <section>
    <Heading variant= languages />
    <LanguageList {data} />
    <Button type="input" variant="secondary" />
  </section>
</main>

<style>
  main {
    background: var(--bg-image-blue);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
    height: 100dvh;
    color: var(--color-white);
    overflow: hidden;
    display: flex;
    justify-content: center;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100dvh;
    align-items: center;
    padding: 1.25em;
    position: relative;
    max-width: 31.25em;
  }

</style>
