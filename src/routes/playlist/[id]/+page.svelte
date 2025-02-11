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
  <nav>
    <a href="/lessons"><Back/></a>
      <a href="#" class="dots">
          <div class="dot"></div>
      </a>
  </nav>
  <img src="/playlist-header.svg" alt="header" class="header-svg">

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
          <a href="#"><img src="/icons/download.svg" alt="download"></a>
          <a href="#" class="heart-svg"><img src="/icons/heart.svg" alt="like"></a>
          <a href="#"><img src="/icons/play.svg" alt="play"></a>
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
        <Story {story} />
      {/each}
    </ul>
  </section>
{:else}
  <p>Playlist not found.</p>
  <a href="/lessons" class="view-all">View all playlists</a>
{/if}
</main>

<style>
* {
  color: var(--color-text-light);
}
.view-all{
  text-decoration: underline;
}
nav, .meta-section {
  padding: var(--space-md);
}
nav, .meta-section, .meta-info, .meta-play {
  max-width: 31.25em;
}
main {
  height: max-content;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: var(--bg-image-playlist);
}
.header-svg {
  position: absolute;
  top: 0;
  z-index: 0;
}
nav {
  position: absolute;
  top: 0;
  z-index: 10;
  width: 100%;
  margin-top: 3.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
a {
  z-index: 0;
}
/* styling for dots */
.dots {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 3.125em; 
  height: 3.125em;
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
.meta-section {
  margin-top: 37vh;
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
@media only screen and (min-width: 600px) {
  main {
    background-color: lightblue;
  }
}
</style>
