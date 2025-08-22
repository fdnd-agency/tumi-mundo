<script>
  import { Heading, Button, LanguageList } from '$lib/index';

  export let data = {
    languages: []
  };
</script>

<div>
  <Heading variant= languages />
  <LanguageList {data} />
  <Button type="input" variant="secondary" />
</div>

<style>
div {
  background: var(--bg-image-blue);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  height: 100dvh;
  color: var(--color-white);
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1.25em;
  position: relative;
}

</style>
