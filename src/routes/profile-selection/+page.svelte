<script>
    import { userState } from '$lib/index';
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';

    export let data;
    let profiles = data.profiles || [];
    let profileUsers = data.profileUsers || [];
    let userId = $userState.userId;
    let filteredProfiles = [];

    onMount(() => {
        if (!userId) {
            goto('/log-in');
        }
    });

    $: {
        if (userId) {
            filteredProfiles = profiles.filter(profile => {
                return profileUsers.some(profileUser => profileUser.user_id === userId && profileUser.profile_id === profile.id);
            });
        }
    }

    async function handleProfileSelection(profileId) {
        userState.update(state => ({
            ...state,
            profileId: profileId
        }));
        await goto('/home');
    }
</script>

<main>
    <section class="top-bar">
        <h1>Select account</h1>
        <button class="edit-button">
            <img src="/icons/edit-icon.svg" alt="Edit icon" />
            <p>Edit</p>
        <button>
    </section>
    <ul>
        {#each filteredProfiles as profile}
            <li>
                <button on:click={() => handleProfileSelection(profile.id)}>
                    <img src="{profile.avatar}" alt="Profile avatar of {profile.name_of_child}" />
                    <h2>{profile.name_of_child}</h2>
                </button>
            </li>
        {/each}
        <li>
            <a href="/home">
                <svg width="104" height="104" viewBox="0 0 116 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_1_4992)">
                        <circle cx="58" cy="58.3855" r="50" fill="#256783"/>
                        <rect x="54.4707" y="28.3855" width="7.05882" height="60" rx="3.52941" fill="white"/>
                        <rect x="88" y="54.8562" width="7.05882" height="60" rx="3.52941" transform="rotate(90 88 54.8562)" fill="white"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_1_4992" x="0" y="0.385498" width="116" height="116" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset/>
                            <feGaussianBlur stdDeviation="4"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_4992"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_4992" result="shape"/>
                        </filter>
                    </defs>
                </svg>                    
                <h2>Add profile</h2>
            </a>
        </li>
    </ul>
</main>

<style>
:root {
    --color-primary: #3A9ECA;
    --color-secondary: #2B627A;
    --color-text: white;

    --font-size-base: 1em;
    --font-size-h1: 1.5em;
    --font-size-h2: 1em;
    --font-size-edit: 0.9em;

    --padding-small: 0.2em;
    --padding-medium: 1em;
    --padding-large: 3em;

    --gap-small: 0.2em;
    --gap-medium: 0.5em;
    --gap-large: 5em;

    --button-size: 6.5em;
    --icon-size: 1.5em;

    --border-radius: 50%;
}

main {
    background: linear-gradient(to bottom, var(--color-primary), var(--color-secondary));
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
    height: 100vh;
    height: 100dvh; /* for dynamic viewport height */
    color: var(--color-text);
    margin: auto;
    padding: var(--padding-medium);
    padding-top: var(--padding-large);
}

.top-bar {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 var(--padding-medium);
}

.top-bar h1 {
    flex-grow: 1;
    text-align: center;
    font-size: var(--font-size-h1);
}

.edit-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: var(--gap-small);
}

.edit-button img {
    width: var(--icon-size);
    height: var(--icon-size);
}

.edit-button p {
    font-size: var(--font-size-edit);
    margin: 0;
}

button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
}

ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-row-gap: var(--gap-large);
    list-style: none;
    padding: 0;
    margin: var(--padding-large) 0;
}

li {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: var(--gap-medium);
}

li button img {
    width: var(--button-size);
    height: var(--button-size);
    border-radius: var(--border-radius);
}

h1 {
    font-size: 1.25em;
    text-align: center;
    margin-bottom: var(--padding-medium);
}

h2 {
    font-size: var(--font-size-h2);
}
</style>    