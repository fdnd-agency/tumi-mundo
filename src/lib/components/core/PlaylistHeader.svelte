<script>
  import { Heading } from '$lib/index';
  export let playlist;
</script>

<header>
  <!-- <nav id="cancelled">
    <a href="/lessons" aria-label="go back" class="go-back-btn"><Back /></a>
    <Dropdown />
  </nav> -->
  <Heading variant= playlist/>

  <picture class="playlist-image-container">
    <source srcset="{playlist.image}?width=448&format=avif" type="image/avif" />
    <source srcset="{playlist.image}?width=448&format=webp" type="image/webp" />
    <source srcset="{playlist.image}?width=448" type="image/jpeg" />
    <img
      src="{playlist.image}?width=64"
      alt="playlist"
      height="380"
      width="448"
      class="playlist-image"
      style="view-transition-name:playlist-image-{playlist.id};"
    />
  </picture>
</header>

<style>



.playlist-image-container {
  z-index: 0;
  height: auto; 
  aspect-ratio: 1 / 1; 
  overflow: hidden; 
  padding: 1em 1em 0 1em;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.playlist-image {
  height: calc(100% - 5em); 
  width: calc(100% - 5em); 
  aspect-ratio: 1 / 1;
  object-fit: cover; 
  display: block; 
  border-radius: var(--border-radius);
}

header{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}


</style>