<script>
  import { Story, Back } from '$lib/index';

  export let data; 

  let playlist = data?.playlist;
  let isLoading = !playlist;
  let error = null;

  $: {
    if (playlist) {
      isLoading = false;
    }
  }
</script>

<main>
  <article>
    <header>
      <nav>
        <a href="/lessons" class="back" aria-label="Go back to all lessons"><Back/></a>
        <a href="#dropdown" class="dots" aria-label="Go to more options">
            <div class="dot"></div>
        </a>
      </nav>

      <picture class="playlist-image-container">
        <source srcset="{playlist.image}?width=448&format=avif" type="image/avif">
        <source srcset="{playlist.image}?width=448&format=webp" type="image/webp">
        <source srcset="{playlist.image}?width=448" type="image/jpeg">
        <img 
          src="{playlist.image}?width=64" 
          alt="playlist image"
          height="380" 
          width="448" 
          class="playlist-image"
        />
      </picture>
    </header>

    <section class="meta-section">
        <h1>{playlist?.title}</h1>
        <p>{playlist?.description}</p>

        <div class="meta-info">
            <img src="/icons/profile-icon.svg" alt="profile picture">
            <p>Made by <strong>User {playlist?.creator}</strong></p>
            <img src="/icons/clock.svg" alt="time">
            <p>2u 11m</p>
        </div>

        <div class="meta-play">
            <a href="#download"><img src="/icons/download.svg" alt="download"></a>
            <a href="#like" class="heart-svg"><img src="/icons/heart.svg" alt="like"></a>
            <a href="#play"><img src="/icons/play.svg" alt="play"></a>
        </div>
    </section>

    {#if isLoading}
    <div class="loading">Loading playlist...</div>
  {:else if error}
    <p class="error">Error loading playlist: {error}</p>
  {:else if playlist && playlist.stories.length > 0}
    <section class="stories-section">
      <ul>
        {#each playlist.stories as story}
        <li>
          <Story {story} />
        </li>
        {/each}
      </ul>
    </section>
  {:else}
    <section class="no-playlist">
      <p>Playlist not found.</p>
      <a href="/lessons" class="view-all">View all playlists</a>
    </section>
    
  {/if}
  </article>
</main>

<style>
* {
  color: var(--color-text-light);
}
main{
  display: flex;
  background-image: var(--bg-image-playlist);
  min-height: 100vh;
}
.view-all{
  text-decoration: underline;
}
nav, .meta-section {
  padding: var(--space-md);
}
nav, .meta-section, .meta-info, .meta-play {
  max-width: 31.25em;
  width: 100%;
  flex-wrap: wrap;
}
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
article {
  margin: 0 auto;
  height: max-content;
  width: 31.25em;;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}
header{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
nav{
  position: absolute;
  width: 100%;
  margin-top: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
a {
  z-index: 0;
}
/* styling for dots */
.back{
  z-index: 10;  
}
.dots {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 3.125em; 
  height: 3.125em;
  z-index: 10;
  position: absolute;
  top: 0;  
  right: 1em;
}
.dot, .dot:before, .dot:after {
  position: absolute;
  width: .4em;
  height: .4em;
  border-radius: var(--border-radius-m);
  background-color: black;
}
.dot {
  top: 50%;
  left: 50%;
  margin-top: 0.625em;
  margin-left: 0.625em;
}
.dot:before, .dot:after {
  content: "";
}
.dot:before {
  right: .8em;
}
.dot:after {
  left: .8em;
}
/* styling for meta info */
.meta-info, .meta-play {
  display: flex;
  align-items: center;
}
.meta-info {
  margin-top: 1em;
}
.meta-info > p:nth-of-type(1) {
  margin-right: auto;
}
.meta-info > img {
  padding-right: .3em;
}
.heart-svg {
  margin: 0 auto 0 .5em;
}
/* styling for stories section */
.stories-section {
  height: 25em; 
  overflow-y: scroll;
  width: 100%; 
  scrollbar-width: none;
}
.stories-section > ul {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.625em;
}
.no-playlist{
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10em; 
}
@media only screen and (min-width: 600px) {
  main {
    background-color: lightblue;
  }
}
</style>
