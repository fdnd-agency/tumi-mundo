<script>
  import { Menu, MakePlaylist, AllStories, PlaylistLike   } from '$lib/index';

  let currentPage = "lessons";

  /** @type {import('./$types').PageData} */
  export let data;

</script>

<div>
  <Menu {currentPage} />

  <header>
    <h1>Lessons</h1>
    <ul>
      <li>1. Listening</li>
    </ul>
  </header>

  <!-- {PLaylistLike} includes {Own playlists, Liked playlist & Suggested playlists} -->
  <PlaylistLike {data} />
  <MakePlaylist {data} />
  <AllStories {data} />
</div>

<style>

div {
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

@media (min-width: 600px) {
  div {
    align-items: center;
  }
}
</style>
