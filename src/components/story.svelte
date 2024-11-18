<script>
    let stories = [
        { title: 'Story One', summary: 'This is the description of the story. Some titles may be a little longer than usual. We need to build in an line-clamp for that.', image: '/stories/Story-pengiun.png', playtime: '2 min. 5 sec', language: 'English'},
        { title: 'Story Two', summary: 'This is the description of the story.', image: '/stories/Story-trees.png', playtime: '3 min. 6 sec', language: 'Dutch'},
        { title: 'Story Three', summary: 'This is the description of the story.', image: '/stories/Story-turtle.png', playtime: '1 min. 15 sec', language: 'French'},
        { title: 'Story Four', summary: 'This is the description of the story.', image: '/stories/Story-pengiun.png', playtime: '4 min. 53 sec', language: 'German'}
    ];
</script>

<section>
{#each stories as story}
    <article class="story-container">
        <div class=story-image>
            <img src="{story.image}" alt="">
        </div>
        <div class="story-title">
            <h6>{story.title}</h6>
        </div>
        <div class="story-summary">
            <p>{story.summary}</p>
        </div>
        <div class="story-language">
            <img src="/languages/{story.language}.svg" alt="{story.language} flag">
        </div>
        <div class="story-meta">
            <div class="story-playtime">
                <img src="/icons/story-playtime.svg" alt="Icon for playtime">
                <p>{story.playtime}</p>
            </div>
            <div class="story-icons">
                <img src="/icons/download-icon.svg" alt="Icon for download">
                <img src="/icons/add-to-playlist.svg" alt="Icon for adding to playlist">
            </div>
        </div>
    </article>
{/each}
</section>

<style>
    section {
        padding: 20px 0 20px 0;
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
    }

    article.story-container {
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

    .story-image { 
        grid-area: 1 / 1 / 4 / 3;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-right: 10px;
    }

    .story-image img {
        max-width: 60px;
        max-height: 64px;
    }

    .story-title{ 
        grid-area: 1 / 3 / 2 / 6; 
    }

    .story-title h6 {
        font-size: 10px;
        font-weight: bold;
    }

    .story-summary{ 
        grid-area: 2 / 3 / 3 / 7; 
        width: 275px;
        max-height: 24px;
    }

    .story-summary p{ 
        font-size: 8px;
    }

    .story-meta { 
        grid-area: 3 / 3 / 4 / 7; 
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .story-meta .story-playtime {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }

    .story-meta .story-playtime img {
        height: 18px;
        width: 18px;
    }

    .story-meta .story-playtime p {
        font-size: 8px;
    }

    .story-meta .story-icons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }

    .story-language { 
        grid-area: 1 / 6 / 2 / 7;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .story-language img {
        max-width: 16px;
        max-height: 12px;
    }
</style>