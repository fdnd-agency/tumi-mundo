<script>
    let stories = [
        { title: 'Story One', summary: 'This is the description of the story. Some titles may be a little longer than usual. We need to build in an line-clamp for that. Now it will stop it from overflowing, cool huh?', image: '/stories/Story-pengiun.png', playtime: '2 min. 5 sec', language: 'English'},
        { title: 'Story Two', summary: 'This is the description of the story.', image: '/stories/Story-trees.png', playtime: '3 min. 6 sec', language: 'Dutch'},
        { title: 'Story Three', summary: 'This is the description of the story.', image: '/stories/Story-turtle.png', playtime: '1 min. 15 sec', language: 'French'},
        { title: 'Story Four', summary: 'This is the description of the story.', image: '/stories/Story-pengiun.png', playtime: '4 min. 53 sec', language: 'German'}
    ];
</script>

<section>
    <ul>
        {#each stories as story}
            <li class="story-container">
                <div class="story-image flex-items">
                    <img src="{story.image}" alt="">
                </div>
                <h2 class="story-title">{story.title}</h2>
                <div class="story-language flex-items">
                    <img src="/languages/{story.language}.svg" alt="{story.language} flag">
                </div>
                <p class="story-summary">{story.summary}</p>
                <div class="story-playtime flex-items">
                    <img src="/icons/story-playtime.svg" alt="Icon for playtime">
                    <p>{story.playtime}</p>
                </div>
                <div class="story-icons flex-items">
                    <img src="/icons/download-icon.svg" alt="Icon for download">
                    <img src="/icons/add-to-playlist.svg" alt="Icon for adding to playlist">
                </div>
            </li>
        {/each}
    </ul>
</section>

<style>
    ul {
        padding: 20px 0 20px 0;
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
    }

    li {
        width: 360px;
        max-height: 85px;
        display: grid;
        grid-template-columns: repeat(6, auto);
        grid-template-rows: repeat(3, 1fr);
        background-color: #fff;
        overflow: hidden;
        padding: 10px;
        border-radius: 4px;
    }

    .story-title {
        font-size: 10px;
        font-weight: 600;
        grid-area: 1 / 3 / 2 / 6;
    }

    p {
        font-size: 8px;
    }

    img {
        max-width: 18px;
    }

    .story-image {
        grid-area: 1 / 1 / 4 / 2;
    }

    .story-image img{
        max-width: 60px;
    }

    .story-language {
        grid-area: 1 / 6 / 2 / 7;
        justify-content: flex-end;
    }
    
    .story-summary {
        grid-area: 2 / 3 / 3 / 7;
        width: 275px;
        max-height: 24px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        overflow: hidden;
    }

    .story-playtime {
        grid-area: 3 / 3 / 4 / 6; 
    }

    .story-icons {
        grid-area: 3 / 6 / 4 / 7; 
        justify-content: flex-end;
    }

    .flex-items {
        display: flex;
        align-items: center;
        gap: 8px;
    }
</style>