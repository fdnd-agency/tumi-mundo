<script>
  import { onMount } from 'svelte';
  import { fetchApi } from '$lib/fetchApi';

  export let playlist;
  const { image, title, playtime } = playlist;

  let isLiked = false;
  let existingLikeId = null; // Store the ID of the existing like for the playlist

  const profileId = 121; // Example profile ID

  // Fetch like status for the current playlist
  onMount(async () => {
    try {
      const likes = await fetchApi(`/tm_likes?filter[playlist][_eq]=${playlist.id}&filter[profile][_eq]=${profileId}`);
      
      if (likes && likes.length > 0) {
        isLiked = true;
        existingLikeId = likes[0].id; // Store the existing like ID
      }
    } catch (error) {
      console.error('Error fetching like status:', error);
    }
  });

  // Toggle like status
  async function toggleLike() {
    const endpoint = isLiked ? `/tm_likes/${existingLikeId}` : '/tm_likes';
    const method = isLiked ? 'DELETE' : 'POST';
    const data = isLiked ? null : { playlist: playlist.id, profile: profileId };

    try {
      await fetchApi(endpoint, method, data);
      isLiked = !isLiked; // Toggle the like state

      if (isLiked) {
        // If liked, fetch the new like's ID
        const likes = await fetchApi(`/tm_likes?filter[playlist][_eq]=${playlist.id}&filter[profile][_eq]=${profileId}`);
        if (likes && likes.length > 0) {
          existingLikeId = likes[0].id; // Update the like ID
        }
      } else {
        // If unliked, clear the existing like ID
        existingLikeId = null;
      }
    } catch (error) {
      console.error('Failed to toggle like:', error);
    }
  }
</script>

<article>
  <div class="playlist-image flex-items">
    <img src="{image}" alt="">
  </div>
  <h3 class="playlist-title">{title}</h3>
  <div class="playlist-playtime flex-items">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#F3A22A"/>
      <path d="M17.0874 13.0613C17.7817 12.5241 17.7817 11.4759 17.0874 10.9387C14.9891 9.31508 12.6461 8.03537 10.146 7.14743L9.68929 6.98522C8.8155 6.67488 7.89254 7.26607 7.77425 8.16805C7.44374 10.6882 7.44374 13.3118 7.77425 15.8319C7.89254 16.7339 8.8155 17.3251 9.68929 17.0148L10.146 16.8526C12.6461 15.9646 14.9891 14.6849 17.0874 13.0613Z" fill="white"/>
    </svg>      
    <p>{playtime}</p>
  </div>
  <div class="playlist-icons flex-items">
    <button on:click={toggleLike}>
      {isLiked ? 'Unlike' : 'Like'}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.6536 7.15238C11.8471 7.33832 12.1529 7.33832 12.3464 7.15238C13.1829 6.34871 14.326 5.75 15.6 5.75C18.1489 5.75 20.25 7.64769 20.25 10.0298C20.25 11.7261 19.4577 13.1809 18.348 14.428C17.2397 15.6736 15.7972 16.7316 14.4588 17.6376L12.1401 19.207C12.0555 19.2643 11.9445 19.2643 11.8599 19.207L9.54125 17.6376C8.20278 16.7316 6.76035 15.6736 5.65201 14.428C4.54225 13.1809 3.75 11.7261 3.75 10.0298C3.75 7.64769 5.85106 5.75 8.4 5.75C9.67403 5.75 10.8171 6.34871 11.6536 7.15238Z" stroke="#C4C4C4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
</article>

<style>
  :root {
    --small-space: .5em;
  }

  /* General */
  p {
    font-size: var(--small-space);
  }

  .flex-items {
    display: flex;
    align-items: center;
  }

  article {
    width: 8.5em;
    height: 12em;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);

    background-color: #fff;
    overflow: hidden;
    padding: var(--small-space);
    border-radius: 4px;
    color: black;

    gap: .5em;
  }

  .playlist-title {
    font-size: 0.8em;
    font-weight: 600;
    grid-area: 4 / 1 / 5 / 3;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    overflow: hidden;
  }

  .playlist-image {
    grid-area: 1 / 1 / 4 / 3;
    justify-content: center;
  }

  .playlist-image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }

  .playlist-playtime {
    grid-area: 5 / 1 / 6 / 2;
    gap: var(--small-space);
  }

  .playlist-icons {
    grid-area: 5 / 2 / 6 / 3; 
    justify-content: flex-end;
  }

  .playlist-playtime svg:hover circle {
    fill: #3A54DE;
  }

  .playlist-icons button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  .playlist-icons button svg:hover, .playlist-icons button svg:hover path{
    fill: #F33232;
    stroke: #F33232;
  }
</style>