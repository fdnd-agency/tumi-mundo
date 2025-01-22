
<script>
    import { Story, Playlist, Menu } from '$lib/index';

    let currentPage = "lessons";

    /** @type {import('./$types').PageData} */
    export let data;

    let storyList;

    function scrollCarousel(direction) {
        const scrollAmount = storyList.clientWidth; 
        storyList.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth',
        });
    }

</script>

<main>
<Menu {currentPage}/>

<header>
    <h1>Lessons</h1>

    <ul>
        <li>1. Listening</li>
    </ul>
</header>

<section class="own-playlist">
    <h2>Own playlists</h2>
    <ul>
        <li class="playlist-1">
            <img src="https://fdnd-agency.directus.app/assets/263e541a-9dd8-4978-8ad0-9a6e5b9dfe1a" class="story-img" alt="story">
            <h3>The octopus who was very hungry</h3>
            <small>    
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="#F3A22A"/>
                    <path d="M17.0874 13.0613C17.7817 12.5241 17.7817 11.4759 17.0874 10.9387C14.9891 9.31508 12.6461 8.03537 10.146 7.14743L9.68929 6.98522C8.8155 6.67488 7.89254 7.26607 7.77425 8.16805C7.44374 10.6882 7.44374 13.3118 7.77425 15.8319C7.89254 16.7339 8.8155 17.3251 9.68929 17.0148L10.146 16.8526C12.6461 15.9646 14.9891 14.6849 17.0874 13.0613Z" fill="white"/>
                </svg><a href="all-stories">31 min. 55 sec
            </a></small>
        </li>
        <li class="create-playlist">
            <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="30" width="8" height="68" rx="4" fill="white"/>
                <rect x="68" y="30" width="8" height="68" rx="4" transform="rotate(90 68 30)" fill="white"/>
            </svg>                
            <h3>Make a playlist !</h3>
            <small><a href="/create-playlist">Add your favorite stories in one playlist</a></small>
        </li>
    </ul>
</section>

<section class="all-stories">
    <h2>All stories</h2>

    <nav class="language-filter">
        
        <label for="checkbox-nl"><img src="/languages/Dutch.svg" alt="dutch">Dutch</label>
        <input type="checkbox" id="checkbox-nl">
        
        <label for="checkbox-en"><img src="/languages/English.svg" alt="english">English</label>
        <input type="checkbox" id="checkbox-en">
    
        <a href="/all-stories">Show all</a>
    </nav>

    <ul bind:this={storyList} class="story-list">
        {#each data.stories as story}
        <li>
            <Story {story} />
        </li>
        {/each}
    </ul>

    <nav class="carousel-nav">
        <button aria-label="Previous" on:click={() => scrollCarousel(-1)}>
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Previous">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3357 5.10128C16.7796 5.54525 16.7796 6.26506 16.3357 6.70902L11.0764 11.9683L16.3357 17.2276C16.7796 17.6716 16.7796 18.3914 16.3357 18.8353C15.8917 19.2793 15.1719 19.2793 14.7279 18.8353L8.66476 12.7722C8.2208 12.3282 8.2208 11.6084 8.66476 11.1644L14.7279 5.10128C15.1719 4.65732 15.8917 4.65732 16.3357 5.10128Z" fill="white"/>
            </svg>                
        </button>
        <ul>
            <li><input type="radio" aria-label="nav-button"></li>
            <li><input type="radio" aria-label="nav-button"></li>
            <li><input type="radio" aria-label="nav-button"></li>
        </ul>
        <button aria-label="Next" on:click={() => scrollCarousel(1)}>
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Next">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.66476 18.8358C8.2208 18.3919 8.2208 17.6721 8.66476 17.2281L13.924 11.9688L8.66476 6.70951C8.2208 6.26555 8.2208 5.54574 8.66476 5.10177C9.10873 4.65781 9.82853 4.65781 10.2725 5.10177L16.3357 11.1649C16.7796 11.6089 16.7796 12.3287 16.3357 12.7727L10.2725 18.8358C9.82853 19.2798 9.10872 19.2798 8.66476 18.8358Z" fill="white"/>
            </svg>                
        </button>
    </nav>
</section>


<section class="own-playlist">
    <h2>Liked playlists</h2>
    <section class="playlist-list">
      {#each data.playlists.filter(playlist => playlist.isLiked) as playlist}
        <Playlist {playlist} />
      {/each}
    </section>
</section>

<section class="own-playlist suggested-playlist">
    <h2>Suggested playlists</h2>
    <section class="playlist-list">
        {#each data.playlists.filter(playlist => !playlist.isLiked) as playlist}
            <Playlist {playlist} />
        {/each}
    </section>
</section>


</main>

<style>

:root{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
main{
    height: 100%;
    color: white;
    background-image: linear-gradient(#471871, #142151);
    display: flex;
    flex-direction: column;
}
section{
    padding: 1rem;
}
h1{
    margin-top: 2rem;
    margin-bottom: 1rem;
}
h2{
    font-size: 1.3em;
    margin-bottom: .75rem;
}
header{
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
/* Styling for "own playlist" section */
.create-playlist, .playlist-1{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.playlist-1 > img{
    width: 100%;
}
.playlist-1{
    background-color: white;
}
.playlist-1 > a small{
    color: black;
}
.playlist-1 > h3{
    font-weight: bold;
}
.own-playlist{
    display: flex;
    flex-direction: column;
}
.own-playlist > ul{
    display: flex;
    gap: 10px;
    overflow-x: auto;
}
.own-playlist > ul > li{
    height: 12.5rem;
    width: 9rem;
    color: black;
    border-radius: .5rem;
    padding: .7em;
}

/* Styling for "all stories" section & carousel nav */

.all-stories{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.all-stories > h2{
    align-self: start;
    margin: 0;
}
nav{
    display: flex;
    margin-top: 1em;
    align-items: center;
    justify-content: center;
}
nav > ul{
    display: flex;
    margin: 0 1.5em;
}
nav > button{
    border: none;
    border-radius: .5em;
    padding:  1em;
    height: 2em;
    width: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #9264F4;
}

input[type=radio]{
    height: 1.2em;
    width: 1.2em;
    margin: .5em;
    padding: 1em;
}
.story-list{
    margin: 1em;
}
.story-list > li{
    scroll-snap-align: center;
}
.language-filter{
    display: flex;
    align-items: center;
    width: 100%;
}
.language-filter > a{
    margin-left: auto;
}
.language-filter > a:hover{
    text-decoration: underline;
}
label{
    display: flex;
    align-items: center;
    padding: .3em;
    padding-right: .5em;
    background-color: #998DB2;
    color: black;
    border-radius: .5em;
}
label:nth-of-type(1){
    margin-right: 1em;
}
input[type=checkbox]{
    opacity: 0;
    position: absolute;
}
input[type=checkbox]:checked + label{
    background-color: white;
    font-weight: bold;
}
label > img{
    height: 1.5em;
    width: auto;
    margin-right: 0.5em;
}
/* Styling for "create playlist" section */
.create-playlist{
    background-color: #494375;
    text-align: center;
    color: white;
}
.create-playlist > h3{
    margin-bottom: 1em;
    color: white;
    font-weight: bold;
    font-size: 1em;
}
.create-playlist > small{
    color: white;
}
.playlist-1 > small{
    align-self: start;
    margin-top: auto;
}

/*  styling for suggested playlist page*/

section.playlist-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    overflow-x: auto;
    padding-bottom: 1rem; 
    scroll-snap-type: x mandatory; 
}

.story-list {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(3, auto);
  gap: .5em;
  overflow-x: auto; 
  scroll-snap-type: x mandatory;
  padding: 1rem 0;
  width: 100%;
  box-sizing: border-box;
}

@media only screen and (min-width: 600px) {
    main{
    align-items: center;
}
    .story-list{
        grid-template-rows: repeat(4, auto);
    }
}
</style>