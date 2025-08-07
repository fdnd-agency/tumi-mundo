<script>
  export let playlist;
  export let isLiked;
  export let toggleLike;
</script>

<section class="meta-section">
  <h1 style="view-transition-name:playlist-title-{playlist.id};">
    {playlist.title}
  </h1>
  <p>{playlist.description}</p>

  <div class="meta-info">
    <img src="/icons/profile-icon.svg" alt="profile" height="30" />
    <p>Made by <strong>User {playlist.creator}</strong></p>
    <img src="/icons/clock.svg" alt="time" height="20" />
    <p>2u 11m</p>
  </div>

  <div class="meta-play" style="view-transition-name:playlist-play-{playlist.id};">
    <a href="/download"><img src="/icons/download.svg" alt="download" height="27" /></a>
    <button
      on:click={toggleLike}
      class="heart-svg"
      aria-label="{isLiked ? 'Unlike' : 'Like'}"
      style="view-transition-name:playlist-like-{playlist.id};"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" class:liked={isLiked}>
        <path d="M11.6536 7.15238C11.8471 7.33832 12.1529 7.33832 12.3464 7.15238C13.1829 6.34871 14.326 5.75 15.6 5.75C18.1489 5.75 20.25 7.64769 20.25 10.0298C20.25 11.7261 19.4577 13.1809 18.348 14.428C17.2397 15.6736 15.7972 16.7316 14.4588 17.6376L12.1401 19.207C12.0555 19.2643 11.9445 19.2643 11.8599 19.207L9.54125 17.6376C8.20278 16.7316 6.76035 15.6736 5.65201 14.428C4.54225 13.1809 3.75 11.7261 3.75 10.0298C3.75 7.64769 5.85106 5.75 8.4 5.75C9.67403 5.75 10.8171 6.34871 11.6536 7.15238Z" stroke="#C4C4C4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <a href="/play"><img src="/icons/play.svg" alt="play" height="60" /></a>
  </div>
</section>

<style>

.meta-section {
  padding: var(--space-md);
  max-width: 31.25em;
  width: 100%;
  color: var(--color-white);
}

.meta-info,
.meta-play {
  display: flex;
  align-items: center;
  max-width: 31.25em;
  width: 100%;
  flex-wrap: wrap;
}

.meta-info {
  margin-top: 1em;
}

.meta-info > p:nth-of-type(1) {
  margin-right: auto;
}

.meta-info > img {
  padding-right: 0.3em;
}

.heart-svg {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0 auto 0 0.5em;
}

.heart-svg svg {
  width: 2.5em;
  height: 3em;
  fill: transparent;
}

.heart-svg svg.liked {
  fill: #f33232;
  stroke: #f33232;
  animation: scale 0.5s ease-in;
}

@keyframes scale {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.4);
  }
}

</style>