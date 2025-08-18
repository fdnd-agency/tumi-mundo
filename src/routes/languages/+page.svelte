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
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100dvh;
    align-items: center;
    padding: 1.25em;
    position: relative;
  }

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


</style>
