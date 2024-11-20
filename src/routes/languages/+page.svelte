<script>
    import Search from '../../components/search.svelte'; // Adjust the path
    import Continue from '../../components/continue-btn.svelte';

    export let data = {
        languages: [] // Empty languages array
    };

    let filteredLanguages = data.languages; // Initialize with full dataset
    let searchTerm = ""; // To store the search term
</script>

<main>
    <section>
        <div class="navigation">
            <a href="/onboarding">
                <img src="/icons/back-button-2.svg" alt="back-btn" />
            </a>
            <h1>We are going to learn!</h1>
        </div>

        <p>
            Now it is time to pick the language(s) your child will learn.
            You can pick a <strong>maximum of 3</strong> languages.
        </p>

        <!-- Use the Search Component -->
        <Search
            data={data.languages}
            bind:searchTerm
            on:filter={(e) => (filteredLanguages = e.detail)}
        />

        <div class="lijntje"></div>

        <!-- Display Filtered Languages -->
        {#if filteredLanguages.length > 0}
            <ul>
                {#each filteredLanguages as language}
                    <li class="languages">
                        <input
                            class="radio"
                            type="checkbox"
                            id="language-{language.name}"
                            name="language"
                            value="{language.name}"
                        />
                        <label for="language-{language.name}">
                            <strong>{language.name}</strong>
                        </label>
                    </li>
                {/each}
            </ul>
        {:else}
            <p>No languages found.</p>
        {/if}

        <!-- <input type="submit" value="Continue" /> -->
        <Continue type="button"/>

    </section>
</main>


<style>

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
}
main{
    background: linear-gradient(to bottom, #3F93B7, #1C5872);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
    height: 100%;
    color: white;
    overflow: hidden;
    font-family: Poppins;
}
.navigation{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
}
.navigation > a{
    align-self: start;
}
section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    position: relative;
}
h1{
    margin-bottom: 16px;
}
h1, p, input{
    width: 100%;
}
ul{
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
}
h1,p{
    text-align: center;
}
p{
    margin-bottom: 40px;
}
.lijntje{
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 2px;
    background-color: #9AC0D1;
    height: 5px;
    width: 100%;
}
.radio{
    width: 100%;
}
/* input for languages */
input[type="checkbox"]:not(:checked), 
input[type="checkbox"]:checked {
    position: absolute;
    left: -9999%;
}
input[type="checkbox"] + label {
    display: inline-block;
    color: black;
    background-color: white;
    list-style: none;
    align-self: self-end;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 16px;
    width: 100%;
    border-radius: 8px;
}
input[type="checkbox"]:checked + label {
    color: white;
    background-color: #1A188A;
} 
input[type="checkbox"] + label:focus {
    border: 3px solid red;
}

</style>