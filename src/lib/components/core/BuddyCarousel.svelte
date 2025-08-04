<script>
  import { Back } from '$lib/index';
  import { onMount, createEventDispatcher } from 'svelte';

  export let buddys = [];
  export let buddyMap = {};
  export let selectedBuddy;

  let jsEnabled = false;
  let buddyList;
  let currentIndex = 1;

  const dispatch = createEventDispatcher();

  onMount(() => {
    jsEnabled = true;
  });

  // Scroll de carousel
  function scrollCarousel(direction) {
    if (!buddyList) return;

    const item = buddyList.querySelector('li');
    if (!item) return;

    const itemWidth = item.clientWidth + parseInt(getComputedStyle(item).marginRight || 0);

    buddyList.scrollBy({
      left: direction * itemWidth,
      behavior: 'smooth'
    });

    setTimeout(updateSelectedOnScroll, 300);
  }

  // Bepaal welke buddy in het midden staat
  function updateSelectedOnScroll() {
    if (!buddyList) return;

    const containerRect = buddyList.getBoundingClientRect();
    const centerX = containerRect.left + containerRect.width / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    const items = Array.from(buddyList.querySelectorAll('li'));

    items.forEach((item, index) => {
      const itemRect = item.getBoundingClientRect();
      const itemCenter = itemRect.left + itemRect.width / 2;
      const distance = Math.abs(centerX - itemCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    currentIndex = closestIndex + 1;
    selectedBuddy = buddys[closestIndex]?.name;
    dispatch('select', selectedBuddy);
  }
</script>

<!-- Buddy lijst -->
<div class="scroll-container">
  <ul bind:this={buddyList} on:scroll={updateSelectedOnScroll}>
    {#each buddys as { name, animal }}
      <li>
        <label for={name} aria-labelledby={`buddy-name-${name}`}>
          {#if buddyMap[name]}
            <svelte:component this={buddyMap[name]} alt={`image of ${name} the ${animal}`} />
          {/if}

          <input
            type="radio"
            name="buddy"
            value={name}
            bind:group={selectedBuddy}
            required
            class:hidden={jsEnabled}
          />

          <h2>{name}</h2>
          <p>The {animal}</p>
        </label>
      </li>
    {/each}
  </ul>
</div>

<!-- Navigatie knoppen -->
{#if jsEnabled}
  <nav class="carousel-nav">
    <button type="button" aria-label="Previous" on:click={() => scrollCarousel(-1)}>
      <Back color="white" height="32" />
    </button>

    <h2><strong>{currentIndex}</strong></h2>

    <button type="button" aria-label="Next" on:click={() => scrollCarousel(1)}>
      <Back color="white" flipped={true} height="32" />
    </button>
  </nav>
{/if}

<style>
  .scroll-container {
    min-height: 26.75em;
    width: 100%;
    max-width: 45em;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 1em;
    display: flex;
    justify-content: start;
    scroll-behavior: smooth;
    white-space: nowrap;
  }

  ul {
    overflow-x: auto;
    display: flex;
    padding: 1em;
    margin: auto;
    list-style: none;
    width: max-content;
    scroll-snap-type: x mandatory;
    padding-left: calc(50% - 9.375em);
    padding-right: calc(50% - 9.375em);
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 0 0 auto;
    text-align: center;
    padding: 0.3em;
    border-radius: 10px;
    scroll-snap-align: center;
  }

  label {
    display: flex;
    flex-direction: column;
  }

  input[type="radio"].hidden {
    visibility: hidden;
  }

  nav {
    display: flex;
    gap: 3em;
    padding: 1em;
  }

  nav > button {
    border: none;
    border-radius: var(--border-radius);
    padding: var(--space-sm);
    height: 2.5em;
    width: 4em;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--button-blue);
  }
</style>
