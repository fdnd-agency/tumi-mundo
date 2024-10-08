<script>
    /** @type {import('./$types').PageData} */
    export let data;
    
</script>

<section>
    <h2>Accounts</h2>
    <article>
        {#if data.accounts && data.accounts.length > 0}
            <ul>
                {#each data.accounts as account}
                    <li>{account.name}</li>
                    <li>{account.email}</li>
                    <li>{account.password}</li>
                {/each}
            </ul>
    {:else}
        <!-- This will show if no people are available -->
        <p>Er zijn geen accounts</p>
    {/if}
    </article>

    <h2>Buddys</h2>
    <article>
        {#if data.buddys && data.buddys.length > 0}
            <ul>
                {#each data.buddys as buddy}
                    <li>{buddy.name}</li>
                    <li>{buddy.animal}</li>
                {/each}
            </ul>
    {:else}
        <!-- This will show if no people are available -->
        <p>Er zijn geen buddys</p>
    {/if}
    </article>

    <h2>Profiles</h2>
    <article>
        {#if data.profiles && data.profiles.length > 0}
            <ul>
                {#each data.profiles as profile}
                    <li>{profile.name}</li>
                    <li>{profile.date_of_birth}</li>
                    <li>{profile.languages}</li>
                    <li>{profile.buddy}</li>
                    <li>{profile.conditions}</li>
                    <li>{profile.gender}</li>
                    <li>{profile.liked_playlists}</li>
                    <li>{profile.liked_stories}</li>
                    <li>{profile.total_playtime}</li>
                    <li>{profile.todays_playtime}</li>
                    <li>{profile.stories_read}</li>
                    <li>{profile.tests_taken}</li>
                    <li>{profile.favourite_time}</li>
                {/each}
            </ul>
    {:else}
        <!-- This will show if no people are available -->
        <p>Er zijn geen profiles</p>
    {/if}
    </article>
    <h2>Stories</h2>
    <article>
        {#if data.stories && data.stories.length > 0}
            <ul>
                {#each data.stories as story}
                    <li>{story.title}</li>
                    <li>{story.summary}</li>
                    <li>{story.playtime}</li>
                    <li>{story.season}</li>
                    <li>{story.languages}</li>
                    <li>{story.animal}</li>
                {/each}
            </ul>
    {:else}
        <!-- This will show if no people are available -->
        <p>Er zijn geen stories</p>
    {/if}
    </article>
    <h2>Personal playlist</h2>
    <article>
        {#if data.personal_playlists && data.personal_playlists.length > 0}
            <ul>
                {#each data.personal_playlists as playlist}
                    <li>{playlist.name}</li>
                    <li>{playlist.stories}</li>
                    <li>{playlist.playtime}</li>
                    <li>{playlist.languages}</li>
                    <li>{playlist.creator}</li>
                {/each}
            </ul>
    {:else}
        <!-- This will show if no people are available -->
        <p>Er zijn geen stories</p>
    {/if}
    </article>

    <h2>Languages</h2>
    <article>
        {#if data.languages && data.languages.length > 0}
            <ul>
                {#each data.languages as language}
                    <li>{language.name}</li>
                {/each}
            </ul>
    {:else}
        <!-- This will show if no people are available -->
        <p>Er zijn geen stories</p>
    {/if}
    </article>
</section>