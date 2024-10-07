<script>
    /** @type {import('./$types').PageData} */
    export let data;
    
</script>

<section>
    <article>
        {#if data.accounts && data.accounts.length > 0}
        {#each data.accounts as account}
            <ul>
                <li>{account.id}</li>
            </ul>
        {/each}
    {:else}
        <!-- This will show if no people are available -->
        <p>Er zitten geen studenten in deze squad</p>
    {/if}
    </article>
</section>