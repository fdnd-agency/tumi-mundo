
<script>
    import Story from '../../components/layout/story.svelte';

    /** @type {import('./$types').PageData} */
    export let data;

</script>

<main>

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
            <img src="/temp/temp-story.svg" class="story-img">
            <h3>The octopus who was very hungry</h3>
            <small><img src="/icons/playlist-playtime.svg" alt="Icon for playtime" height="17.59" width="17.59"><a href="all-stories">31 min. 55 sec</a></small>
        </li>
        <li class="create-playlist">
            <img src="/icons/create-playlist.svg">
            <h3>Make a playlist !</h3>
            <small><a href="/create-playlist">Add your favorite stories in one playlist</a></small>
        </li>
    </ul>
</section>

<section class="all-stories">
    <h2>All stories</h2>
    <nav class="language-filter">

        <input type="checkbox" id="checkbox-nl">
        <label for="checkbox-nl"><img src="/languages/Dutch.svg">Dutch</label>
    
        <input type="checkbox" id="checkbox-en">
        <label for="checkbox-en"><img src="/languages/English.svg">English</label>

        <a href="/all-stories">Show all</a>
    </nav>

    <ul>
        {#each data.stories as story}
            <Story {story} />
        {/each}
    </ul>

    <nav>
        <button><img src="/icons/carousel-left-button.svg"></button>
            <ul>
                <li><input type="radio"></li>
                <li><input type="radio"></li>
                <li><input type="radio"></li>
            </ul>
        <button><img src="/icons/carousel-right-button.svg"></button>
    </nav>

</section>

<section class="own-playlist">
    <h2>Liked playlists</h2>
    <ul>
        <li class="playlist-1">
            <img src="/temp/temp-story.svg" class="story-img">
            <h3>The octopus who was very hungry</h3>
            <small><img src="/icons/playlist-playtime.svg" alt="Icon for playtime" height="17.59" width="17.59"><a href="all-stories">31 min. 55 sec</a></small>
        </li>
        <li class="playlist-1">
            <img src="/temp/temp-story.svg" class="story-img">
            <h3>The octopus who was very hungry</h3>
            <small><img src="/icons/playlist-playtime.svg" alt="Icon for playtime" height="17.59" width="17.59"><a href="all-stories">31 min. 55 sec</a></small>
        </li>
    </ul>
</section>

<section class="own-playlist suggested-playlist">
    <h2>Suggested playlists</h2>
    <ul>
        <li class="playlist-1">
            <img src="/temp/temp-story.svg" class="story-img">
            <h3>The octopus who was very hungry</h3>
            <small>
                <img src="/icons/playlist-playtime.svg" alt="Icon for playtime" height="17.59" width="17.59">
                <a href="all-stories">31 min. 55 sec</a>
            </small>
        </li>
        <li class="playlist-1">
            <img src="/temp/temp-story.svg" class="story-img">
            <h3>The octopus who was very hungry</h3>
            <small>
                <img src="/icons/playlist-playtime.svg" alt="Icon for playtime" height="17.59" width="17.59">
                <a href="all-stories">31 min. 55 sec</a>
            </small>
        </li>
        <li class="playlist-1">
            <img src="/temp/temp-story.svg" class="story-img">
            <h3>The octopus who was very hungry</h3>
            <small>
                <img src="/icons/playlist-playtime.svg" alt="Icon for playtime" height="17.59" width="17.59">
                <a href="all-stories">31 min. 55 sec</a>
            </small>
        </li>
    </ul>
</section>


</main>

<style>

/* styling for all stories & carousel nav */
.all-stories{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
nav > button > img{
    height: 1.5em;
}
/*  */
/* styling for all stories page */
.language-filter{
    display: flex;
    align-items: center;
    margin-bottom: 1em;
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

/*  */
h1{
    margin-top: 2rem;
    margin-bottom: 1rem;
}
h2{
    font-size: 1.3em;
}
header{
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
h2{
    margin-bottom: .75rem;
}
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
.create-playlist > a{
    color: white;
    font-size: 1em;
}
.create-playlist > small{
    color: white;
}
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
    /* align-items: center; */
}
section{
    padding: 1rem;
}
.playlist-1 > small{
    align-self: start;
    margin-top: auto;
}
small img {
    vertical-align: middle;
    padding-right: .3em;
    height: 2em;
    width: 2em;
}

/*  styling for suggested playlist page*/

.suggested-playlist > ul {
    display: flex;
    gap: 10px;
    overflow-x: auto;
    padding-bottom: 1rem; 
    scroll-snap-type: x mandatory; 
}
.suggested-playlist > ul > li {
    flex: 0 0 auto;
    scroll-snap-align: center; 
}

@media only screen and (min-width: 600px) {
    main{
    align-items: center;
}
}


</style>