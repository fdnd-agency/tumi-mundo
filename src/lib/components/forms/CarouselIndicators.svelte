<script>
  export let slides = 3;
  export let active = 0;
</script>

<div class="carousel-indicators">
  {#each Array(slides) as _, i}
    <span class="indicator {i === active ? 'active' : ''}" data-slide={i}></span>
  {/each}
</div>

<style>
  .carousel-indicators {
    display: flex;
    justify-content: center;
    margin-bottom: 1.8em;
  }
  .indicator {
    width: .6em;
    height: .6em;
    border-radius: 50%;
    border: 1px solid lightgray;
    margin: 0 5px;
    cursor: pointer;
  }
  .indicator.active { background-color: white; }
</style>
