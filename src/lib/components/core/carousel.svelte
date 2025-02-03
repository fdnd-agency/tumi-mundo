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

<section class="all-stories">

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


<style>


nav{
    display: flex;
    margin-top: var(--space-md);
    align-items: center;
    justify-content: center;
} 
nav > ul {
    display: flex;
    margin: 0 var(--space-lg);
}
nav > button {
    border: none;
    border-radius: var(--border-radius);
    padding: var(--space-sm);
    height: 2em;
    width: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #9264F4;
}
input[type=radio] {
    height: 1.2em;
    width: 1.2em;
    margin: var(--space-sm);
    padding: var(--space-md);
}
.story-list {
    margin: var(--space-md);
}
.story-list > li {
    scroll-snap-align: center;
}
.story-list {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: var(--grid-rows);
    gap: var(--space-xs);
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding: var(--space-md) 0;
    width: 24em;
    box-sizing: border-box;
}
    
@media only screen and (min-width: 600px) {
    main {
        align-items: center;
    }
    .story-list {
        grid-template-rows: repeat(4, auto);
    }
}
@media only screen and (min-width: 800px) {
    .story-list {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(4, auto);
        width: 48em;
    }
}

</style>
