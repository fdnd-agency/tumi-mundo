<script>
    import Story from '../../components/layout/story.svelte';
    import Search from '../../components/forms/search.svelte';

    /** @type {import('./$types').PageData} */
    export let data;

    console.log(data.languages)
    // console.log(data.languages);

</script>

<header>
    <div class="heading">
        <a href="/stories"><img src="/icons/back-button-2.svg" alt="backbutton" class="heading-back"></a>
        <h1>All stories</h1>
    </div>

    <!-- <input type="text" placeholder="Search for stories"> -->
     <Search/>

    <ul class="nav-ul">
        <li>
            <select name="animal" id="animal-select">
            <option value="animal">Animal</option>
            <option value="Animal">Dog</option>
        </li>
        <li>
            <select name="season" id="season-select">
                <option value="season">Season</option>
                <option value="summer">summer</option>
        </li>
        <li>
            <select name="language" id="language">
                {#each data.languages as language}
                <option value="{ language.language }">{ language.language}</option>
                {/each}
        </li>

        <li>
            <select name="sorting" id="sorting">
                <option value="sorting">Sorting</option>
                <option value="skibidi sigma">skibidi sigma</option>
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

:root{
    background-image: linear-gradient(#471871, #142151);
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
/* styling for header */
.heading{
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    padding: 1rem;
    margin-top: 1rem;
    position: relative; 
}
.heading > h1{
    position: absolute;
    color: white;
    left: 50%;
    font-size: 1.7rem;
    transform: translateX(-50%);
}
.heading-back{
    align-self: self-start;
}
header {
    z-index: 10;
    width: 100%; 
    height: 100%;
    padding: 10px;
    justify-content: space-between; 
    width: 100%;
    padding: 10px 20px;
    background-color: transparent;
}
/* styling for the nav and dropdowns */
.nav-ul > li {
    background-color: #9264F4;
    font-size: 1em;
    padding: .2rem .3rem;
    border-radius: 5px;
    width: 100%;
}

.nav-ul {
    margin-top: .3rem;
    display: grid;
    color: white;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: .5rem;
    list-style-type: none;
    overflow-x: auto;
}

select {
    background-color: transparent;
    color: white;
    width: 100%; 
    overflow-x: auto; 
    border: none;
}
option{
    color: black;
}
option:active{
    color: black;
}

section {
    padding: 20px;
    color: white;
}

ul {
    list-style: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
}

h2 {
    font-size: 24px;
    margin-bottom: 16px;
}

@media only screen and (min-width: 865px) {
  .nav-ul {
    gap: 1rem;
}
}
</style>
