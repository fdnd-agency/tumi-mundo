<script>
  import { Menu, MakePlaylist, OwnPlaylists, AllStories, LikedPlaylists, SuggestedPlaylists   } from '$lib/index';

  let currentPage = "lessons";

  /** @type {import('./$types').PageData} */
  export let data;

  function handleLikeToggle(event) {
    const { playlistId, isLiked } = event.detail;
    data.playlists = data.playlists.map(playlist =>
      playlist.id === playlistId
        ? { ...playlist, isLiked: isLiked }
        : playlist
    );
  }
</script>

<main>
  <Menu {currentPage} />

  <header>
    <h1>Lessons</h1>
    <ul>
      <li>1. Listening</li>
    </ul>
  </header>

  <OwnPlaylists {data} on:likeToggle={handleLikeToggle} />
  <MakePlaylist {data} />
  <AllStories {data} />
  <LikedPlaylists {data} on:likeToggle={handleLikeToggle} />
  <SuggestedPlaylists {data} on:likeToggle={handleLikeToggle} />
</main>

<style>
  :root {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  main {
    height: 100%;
    color: var(--color-text-light);
    background-image: var(--bg-image-purple);
    display: flex;
    flex-direction: column;
    padding-bottom: 5em;
  }

  header {
    margin-bottom: var(--space-lg);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    margin-top: var(--space-lg);
    margin-bottom: var(--space-md);
  }

  @media only screen and (min-width: 600px) {
    main {
      align-items: center;
    }
  }
</style>
