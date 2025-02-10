<script>
    import { Search, Button } from '$lib/index';

    export let data = {
        languages: [] 
    };

    let filteredLanguages = data.languages;
    let searchTerm = ""; 

    data.languages.forEach(language => {
        language.name = language.language;
    }); 

    function handleFilter(event) {
        filteredLanguages = event.detail;
    };

</script>

<main>
    <section>
        <nav class="navigation">
            <a href="/onboarding" aria-label="Go back to onboarding">
                <svg width="24" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3398 0.554956C14.0797 1.2949 14.0797 2.49458 13.3398 3.23452L4.5743 12L13.3398 20.7655C14.0797 21.5054 14.0797 22.7051 13.3398 23.445C12.5998 24.185 11.4002 24.185 10.6602 23.445L0.554955 13.3398C-0.184985 12.5998 -0.184985 11.4002 0.554955 10.6602L10.6602 0.554956C11.4002 -0.184985 12.5998 -0.184985 13.3398 0.554956Z" fill="white"/>
                </svg>
            </a>
            <h1>We are going to learn!</h1>
        </nav>

        <p>
            Now it is time to pick the language(s) your child will learn.
            You can pick a <strong>maximum of 3</strong> languages.
        </p>

        <Search
            data={data.languages}
            bind:searchTerm
            on:filter={handleFilter} 
        />
        <hr class="line" />

        {#if filteredLanguages.length > 0}
            <ul>
                {#each filteredLanguages as language}
                    <li class="languages">
                        <input
                            class="radio"
                            type="checkbox"
                            id="language-{language.language}"
                            name="language"
                            value="{language.language}"
                        />
                        <label for="language-{language.language}">
                            <img src="/languages/{language.language}.svg" alt="{language.language} flag" class="flag-svg" height="55" width="66">
                            <strong class="language-strong">{language.language}</strong>
                        </label>
                    </li>
                {/each}
            </ul>
        {:else}
            <p>No languages found.</p>
        {/if}
        <Button type="button"/>
    </section>
</main>

<style>
    main {
        background: var(--bg-image-blue);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: bottom;
        height: 100dvh;
        color: var(--color-white);
        overflow: hidden;
    }

    .navigation {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 100%;
    }

    .navigation > a {
        align-self: start;
    }

    img {
        aspect-ratio: 3 / 2;
        width: 100%;
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 1.25em;
        position: relative;
    }

    h1 {
        margin-bottom: 1em;
    }

    h1, p, input {
        width: 100%;
    }

    ul {
        width: 100%;
        height: 70vh;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
    }

    h1, p {
        text-align: center;
    }

    p {
        margin-bottom: 2.5em;
    }

    .line {
        margin-top: 0.625em;
        margin-bottom: 0.625em;
        border-radius: 0.125em;
        background-color: hsla(197, 38%, 72%, 1);
        height: 1px;
        width: 100%;
    }

    .radio {
        width: 100%;
    }

    input[type="checkbox"]:not(:checked),
    input[type="checkbox"]:checked {
        position: absolute;
        left: -9999%;
    }

    input[type="checkbox"] + label {
        display: inline-block;
        color: black;
        background-color: var(--color-white);
        list-style: none;
        align-self: self-end;
        margin-bottom: 0.125em;
        padding: 0.3125em;
        width: 100%;
        border-radius: 0.625em;
    }

    input[type="checkbox"]:checked + label {
        color: var(--color-white);
        background-color: hsla(241, 71%, 32%, 1);

    }

    label {
        position: relative;
        display: inline-block;
        height: 3.75em;
        width: 100%;
    }

    .flag-svg {
        position: absolute;
        top: 50%;
        left: 0.3125em;
        transform: translateY(-50%);
        width: 3.4375em;
        height: 100%;
    }

    .language-strong {
        position: absolute;
        top: 50%;
        left: 4.0625em;
        transform: translateY(-50%);
    }
</style>
