<script>
  import { Story, fetchApi } from '$lib/index';

  export let data; 

  let playlist = data?.playlist;
  let isLiked = playlist.isLiked;
  let existingLikeId = playlist.likeId;

  let profileId = 122;

  async function toggleLike(event) {
    event.preventDefault(); 

    const endpoint = isLiked ? `/tm_likes/${existingLikeId}` : '/tm_likes';
    const method = isLiked ? 'DELETE' : 'POST';

    try {
      const response = await fetchApi(endpoint, method, {
        playlist: playlist.id,
        profile: profileId
      });

      isLiked = !isLiked;
      if (response?.id) {
        existingLikeId = response.id;
      } else if (isLiked === false) {
        existingLikeId = null;
      }
      
      playlist = { ...playlist, isLiked, likeId: existingLikeId };

    } catch (error) {
      console.error(error);
    }
  }
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
        <button on:click={toggleLike} class="heart-svg" aria-label="{isLiked ? 'Unlike' : 'Like'}">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class:liked={isLiked}>
            <path d="M11.6536 7.15238C11.8471 7.33832 12.1529 7.33832 12.3464 7.15238C13.1829 6.34871 14.326 5.75 15.6 5.75C18.1489 5.75 20.25 7.64769 20.25 10.0298C20.25 11.7261 19.4577 13.1809 18.348 14.428C17.2397 15.6736 15.7972 16.7316 14.4588 17.6376L12.1401 19.207C12.0555 19.2643 11.9445 19.2643 11.8599 19.207L9.54125 17.6376C8.20278 16.7316 6.76035 15.6736 5.65201 14.428C4.54225 13.1809 3.75 11.7261 3.75 10.0298C3.75 7.64769 5.85106 5.75 8.4 5.75C9.67403 5.75 10.8171 6.34871 11.6536 7.15238Z" stroke="#C4C4C4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
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
  justify-content: center;
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
  .heart-svg {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0 auto 0 .5em;
  }
  
  .heart-svg svg {
  width: 24px;
  height: 24px;
  }
  
  .heart-svg svg.liked {
  fill: #F33232;
  stroke: #F33232;
  }
  
  @keyframes scale {
  0%, 100% {
  transform: scale(1);
  }
  50% {
  transform: scale(1.4);
  }
  }
  

  .heart-svg svg.liked {
  animation: scale .5s ease-in;
  }
  </style>