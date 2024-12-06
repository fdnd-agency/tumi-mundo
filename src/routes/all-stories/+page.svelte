<script>
    import Story from '../../components/layout/story.svelte';

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<header>
    <div class="heading">
        <a href="/stories"><img src="/icons/back-button-2.svg" alt="backbutton"></a>
        <h1>All stories</h1>
    </div>

    <input type="text" placeholder="Search for stories">

    <ul class="nav-ul">
        <li>
            <details>
                <summary>Animal</summary>Animal
            </details>
        </li>
        <li>
            <details>
                <summary>Season</summary>Summer
            </details>
        </li>
        <li>
            <details>
                <summary>Language</summary>English
            </details>
        </li>
        <li>
            <details>
                <summary>Sorting</summary>Length
            </details>
        </li>
    </ul>
</header>


<section>
    <h2>Stories</h2>
    <ul>
        {#each data.stories as story}
            <Story {story} />
        {/each}
    </ul>
</section>

<style>
/* styling for header */



/* end */
    section {
        background-color: purple;
        padding: 20px;
        color: white;
    }

    ul {
        list-style: none;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
    }

    h2 {
        font-size: 24px;
        margin-bottom: 16px;
    }
</style>
