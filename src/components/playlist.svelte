<script>
    export let playlist;
</script>

<li class="playlist-container">
    <div class="playlist-image flex-items">
        <img src="{playlist.image}" alt="">
    </div>
    <h3 class="playlist-title">{playlist.title}</h3>
    <div class="playlist-playtime flex-items">
        <img src="/icons/playlist-playtime.svg" alt="Icon for playtime">
        <p>{playlist.playtime}</p>
    </div>
    <div class="playlist-icons flex-items">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6536 7.15238C11.8471 7.33832 12.1529 7.33832 12.3464 7.15238C13.1829 6.34871 14.326 5.75 15.6 5.75C18.1489 5.75 20.25 7.64769 20.25 10.0298C20.25 11.7261 19.4577 13.1809 18.348 14.428C17.2397 15.6736 15.7972 16.7316 14.4588 17.6376L12.1401 19.207C12.0555 19.2643 11.9445 19.2643 11.8599 19.207L9.54125 17.6376C8.20278 16.7316 6.76035 15.6736 5.65201 14.428C4.54225 13.1809 3.75 11.7261 3.75 10.0298C3.75 7.64769 5.85106 5.75 8.4 5.75C9.67403 5.75 10.8171 6.34871 11.6536 7.15238Z" stroke="#C4C4C4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>            
    </div>
</li>

<style>
    li {
      width: 8.5em;
      min-width: 8.5em;
      height: 11.87em;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(5, 1fr);
      background-color: #fff;
      overflow: scroll;
      padding: 10px;
      border-radius: 8px;
      color: black;
    }

    .playlist-title {
      font-size: 10px;
      font-weight: 600;
      grid-area: 4 / 1 / 5 / 3;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      overflow: hidden;
    }

    p {
      font-size: 8px;
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
      display: flex;
      align-items: center;
      grid-area: 5 / 1 / 6 / 2;
    }

    .playlist-icons {
      grid-area: 5 / 2 / 6 / 3; 
      justify-content: flex-end;
    }

    .playlist-icons.liked svg, .playlist-icons.liked svg path {
        fill: #F33232;
        stroke: #F33232;
    }

    .flex-items {
      display: flex;
      align-items: center;
      gap: 8px;
    }
</style>