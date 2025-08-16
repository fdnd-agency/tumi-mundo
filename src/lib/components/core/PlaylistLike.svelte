<script>
  import { OwnPlaylists, LikedPlaylists, SuggestedPlaylists } from '$lib/index';
  export let data;

  function handleLikeToggle(event) {
    const { playlistId, isLiked } = event.detail;
    data.playlists = data.playlists.map(playlist =>
      playlist.id === playlistId
        ? { ...playlist, isLiked }
        : playlist
    );
  }
</script>

<OwnPlaylists {data} on:likeToggle={handleLikeToggle} />
<LikedPlaylists {data} on:likeToggle={handleLikeToggle} />
<SuggestedPlaylists {data} on:likeToggle={handleLikeToggle} />
