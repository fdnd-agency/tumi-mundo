
<script>

    export let data; 
    // Reactieve zoekterm
    let searchTerm = "";

    import Search from '../../components/search.svelte';

    // Reactieve filtering
    $: filteredLanguages = searchTerm
        ? data.languages.filter(language =>
            language.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : data.languages;
</script>

<main>
<section>

    <div class="navigation">
        <a href="/onboarding">
            <img src="/icons/back-button-2.svg" alt="back-btn">
        </a>
        <h1>We are going to learn!</h1>
    </div>

    <p>
        Now it is time to pick the language(s) your child will learn. 
        You can pick a <strong>maximum of 3</strong> languages.
    </p>

    <input 
    type="text" 
    id="searchbar"
    placeholder="Search language" 
    class="search"
    bind:value={searchTerm} 
    />
    <!-- <Search {data}/> -->


    <div class="lijntje"></div>

    <!-- Talenlijst -->
    {#if filteredLanguages && filteredLanguages.length > 0}
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
        <!-- Geen resultaten -->
        <p>No languages found.</p>
    {/if}

    <input type="submit" value="Continue">
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
    /* background-color: black; */
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
    height: 100vh;
    color: white;
    overflow: hidden;
    font-family: Poppins;
}
.navigation{
    /* position: absolute; */
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
}
.navigation > a{
    align-self: start;
}
.search{
    background-image: url(/icons/search-icon.svg);
    background-repeat: no-repeat;
    background-position: 2% 50%;
    padding: 13px 30px;
    border-radius: 7px;
    border: none;
}
section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    position: relative;
    overflow-y: hidden;
}
h1{
    margin-bottom: 16px;
}
h1, p, input{
    width: 100%;
}
ul{
    width: 100%;
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
input:nth-of-type(2){
    font-family: Poppins;
    width: 85%;
    padding: 13px;
    border-radius: 7px;
    border: none;
    font-size: 18px;
    color: #797979;
    background-color: #C0C0C0 ;
    position: fixed;
    bottom: 0;
    margin-bottom: 40px;
}
input:nth-of-type(2):hover{
    cursor: pointer;
    color: white;
    background-color: #215165 ;
}

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

</style>