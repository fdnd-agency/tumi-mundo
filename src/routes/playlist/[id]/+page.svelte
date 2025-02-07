<script>
  import { Story } from '$lib/index';

  export let data; 

  let playlist = data?.playlist;

</script>

<main>
  <nav>
    <a href="/lessons">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M26.3398 8.55508C27.0797 9.29502 27.0797 10.4947 26.3398 11.2346L17.5743 20.0001L26.3398 28.7656C27.0797 29.5055 27.0797 30.7052 26.3398 31.4452C25.5998 32.1851 24.4002 32.1851 23.6602 31.4452L13.555 21.3399C12.815 20.6 12.815 19.4003 13.555 18.6603L23.6602 8.55508C24.4002 7.81514 25.5998 7.81514 26.3398 8.55508Z" fill="black"/>
        </svg>
    </a>
      <a href="#" class="dots">
          <div class="dot"></div>
      </a>
  </nav>
  <img src="/playlist-header.svg" alt="header" class="header-svg">

  <section class="meta-section">
      <h1>{playlist.title}</h1>
      <p>{playlist.description}</p>

      <div class="meta-info">
          <img src="/icons/profile-icon.svg" alt="profile picture">
          <p>Made by <strong>User { playlist.creator }</strong></p>
          <img src="/icons/clock.svg" alt="time">
          <p>2u 11m</p>
      </div>

      <div class="meta-play">
          <a><img src="/icons/download.svg" alt="download"></a>
          <a class="heart-svg"><img src="/icons/heart.svg" alt="like"></a>
          <a><img src="/icons/play.svg" alt="play"></a>
      </div>
  </section>

{#if playlist}
  <section class="stories-section">
      <ul>
          {#each playlist.stories as story}
            <Story {story} />
          {/each}
        </ul>
  </section>
{:else}
<p>Playlist niet gevonden.</p>
{/if}


</main>

<style>

* {
  color: var(--color-text-light);
}
nav, .meta-section {
  padding: var(--space-md);
}
nav, .meta-section, .meta-info, .meta-play{
  max-width: 31.25em;
}
main {
  height: max-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(#6577D3, #100E52);
}
.header-svg {
  position: absolute;
  top: 0;
  z-index: 0;
}
.back-btn {
  width: 3.125em;
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
  justify-content: center;
  position: relative;
  width: 50px; 
  height: 50px;
}
.dot, .dot:before, .dot:after {
position: absolute;
width: .4em;
height: .4em;
border-radius: 20px;
background-color: black;
}
.dot {
top: 50%;
left: 50%;
margin-top: -10px;
margin-left: -10px;
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
  gap: 10px;
}
@media only screen and (min-width: 600px) {
main {
  background-color: lightblue;
}
}

</style>

