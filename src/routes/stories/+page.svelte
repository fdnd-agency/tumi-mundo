<script>
    import Story from '../../components/layout/story.svelte';

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<section>
    <h2>Stories</h2>
    <ul>
        {#each data.stories as story}
            <Story {story} />
        {/each}
    </ul>
</section>

<style>
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
