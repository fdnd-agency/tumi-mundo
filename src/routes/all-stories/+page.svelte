<script>
    import Story from '../../components/layout/story.svelte';
    import Search from '../../components/forms/search.svelte';

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<header>
    <div class="heading">
        <a href="/stories"><img src="/icons/back-button-2.svg" alt="backbutton" class="heading-back"></a>
        <h1>All stories</h1>
    </div>

    <Search/>

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
    <ul>
        {#each data.stories as story}
            <Story {story} />
        {/each}
    </ul>
</section>

<style>
/* styling for header */

.heading{
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    padding: 1rem;
}
.heading > h1{
    position: absolute;
    color: white;
    left: 50%;
    transform: translateX(-50%);
    font-size: 20px;
}
.heading-back{
    align-self: self-start;
}
header {
    position: fixed;
    z-index: 10;
    width: 100%; 
    height: 10vh; /* Stel een consistente hoogte in */
    /* background-color: white;  */
}
input{
    width: 100%;
    padding: .5rem;
    margin-bottom: .75rem;
}
.nav-ul{
    display: grid;
    color: white;
    /* justify-content: space-evenly; */
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: .5rem;
    list-style-type: none;
}
.nav-ul > li{
    background-color: #9264F4;
    font-size: 1em;
    padding: .2rem .3rem;
    border-radius: 5px;
}
details > summary{
    list-style-type: '>';
    /* rotate: 90deg; */
}


/* end */
    section {
        background-image: linear-gradient(#471871, #142151);
        padding: 20px;
        color: white;
        padding: calc(20px + 20vh) 20px 20px 20px;
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
