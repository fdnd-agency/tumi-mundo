
<script>
    import { Story, Search } from '$lib/index';

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<main>
    <header>
        <div class="heading">
            <a href="/lessons" aria-label="Go back to lessons">
                <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="heading-back">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3398 0.554956C14.0797 1.2949 14.0797 2.49458 13.3398 3.23452L4.5743 12L13.3398 20.7655C14.0797 21.5054 14.0797 22.7051 13.3398 23.445C12.5998 24.185 11.4002 24.185 10.6602 23.445L0.554955 13.3398C-0.184985 12.5998 -0.184985 11.4002 0.554955 10.6602L10.6602 0.554956C11.4002 -0.184985 12.5998 -0.184985 13.3398 0.554956Z" fill="white"/>
                </svg>                
            </a>
            <h1>All Stories</h1>
        </div>
    
        <Search />
    
        <ul class="nav-ul">
            <li>
                <select name="animal" id="animal-select" aria-label="Choose an animal">
                    <option value="animal">Animal</option>
                        {#each data.buddys as buddy}
                            <option value="{ buddy.animal }">{ buddy.animal }</option>
                        {/each}
                </select>
            </li>
            <li>
                <select name="season" id="season-select" aria-label="Choose a season">
                    <option value="season">Season</option>
                    <option value="summer">Summer</option>
                </select>
            </li>
            <li>
                <select name="language" id="language"aria-label="Choose a language">
                    <option  value="languages">Languages</option>
                        {#each data.languages as language}
                            <option value="{ language.language }">{ language.language }</option>
                        {/each}
                </select>
            </li>
            <li>
                <select name="sorting" id="sorting"aria-label="Choose a sorting">
                    <option value="sorting">Sorting</option>
                    <option value="from a to z">From A - Z</option>
                    <option value="from z to a">From Z to A</option>
                    <option value="short to long playtime">Short to long playtime</option>
                    <option value="long to short playtime">Long to short playtime</option>
                </select>
            </li>
        </ul>
    </header>
    
    <section class="story-list">
        {#each data.stories as story}
            <Story {story} />
        {/each}
    </section>
</main>

<style>
main {
    background-image: linear-gradient(#471871, #142151);
}

.heading,
.nav-ul {
    display: flex;
    align-items: center;
}

select,
header,
.nav-ul > li {
    width: 100%;
}

.heading {
    justify-content: space-between;
    margin: 1em 0;
    padding: 1em;
    position: relative; 
}

.heading > h1 {
    position: absolute;
    left: 50%;
    font-size: 1.7em;
    transform: translateX(-50%);
}

.heading-back {
    align-self: flex-start;
}

header {
    z-index: 10;
    height: 100%;
    justify-content: space-between; 
    padding: 0.625em 1.25em;
    background-color: transparent;
}

.nav-ul > li {
    background-color: #571899;
    font-size: 1em;
    padding: 0.2em 0.3em;
    border-radius: 5px;
}

.nav-ul {
    margin-top: 0.3em;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5em;
    list-style-type: none;
    overflow-x: auto;
}

select {
    background-color: transparent;
    overflow-x: auto; 
    border: none;
}

option,
option:active {
    color: black;
}

section {
    padding: 1.25em;
}

ul {
    list-style: none;
    padding: 0;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1em;
}

.story-list {
    padding: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1em;
}

@media only screen and (min-width: 54.0625em) {
    .nav-ul {
        gap: 1em;
    }
}
</style>
