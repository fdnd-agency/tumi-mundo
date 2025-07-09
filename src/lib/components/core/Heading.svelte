<script>
  import { Back } from '$lib/index';
</script>

<header>
  <div class="heading">
    <a href="/lessons" aria-label="Go back to lessons">
      <Back color="white"/>
    </a>
    <h1>All Stories</h1>
  </div>
</header>

<style>
  header .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1em;
    position: relative;
  }

  header .heading > h1 {
    position: absolute;
    left: 50%;
    font-size: 1.7em;
    transform: translateX(-50%);
  }
</style>
