
<script>
    import Story from '../../components/layout/story.svelte';

    /** @type {import('./$types').PageData} */
    export let data;

</script>

<main>

<h1>Lessons</h1>

<section>
    <h2>Own playlist</h2>

    <ul>
        <li>
            <img>
            <h3>The octopus who was very hungry</h3>
            <a>31 min. 55 sec</a>
        </li>
        <li>
            <img>
            <h3>Make a playlist !</h3>
            <a>Add your favorite stories in one playlist</a>
        </li>
    </ul>
</section>

<section>
    <h2>All stories</h2>
    <div>
        <input type="checkbox">
        <input type="checkbox">

        <a href="/all-stories">Show all</a>
    </div>

    <ul>
        {#each data.stories as story}
            <Story {story} />
        {/each}
    </ul>

</section>

</main>

<style>

main{
    height: 100dvh;
    color: white;
    background-image: linear-gradient(#471871, #142151);
}

</style>