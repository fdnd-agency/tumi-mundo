<script>
  import { Button } from '$lib/index';
  import BuddyCarousel from './BuddyCarousel.svelte';

  export let buddys = [];
  export let buddyMap = {};

  let selectedBuddy = buddys[0]?.name;

  function handleSelect(event) {
    selectedBuddy = event.detail;
  }
</script>

<form method="POST">
  <BuddyCarousel {buddys} {buddyMap} on:select={handleSelect} />

  <noscript>
    <p>Swipe and click on a buddy to select!</p>
  </noscript>

  <input type="hidden" name="buddy" value={selectedBuddy} required />

  <Button type="input" />
</form>

<style>
  form {
    width: 100%;
    max-width: 30em;
    min-height: 20em;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }

  label {
    display: flex;
    flex-direction: column;
  }
</style>
