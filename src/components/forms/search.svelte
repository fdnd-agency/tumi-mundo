<script>
    import { onMount } from "svelte";
    import { createEventDispatcher } from "svelte";

    export let data = [];
    export let searchTerm = "";

    const dispatch = createEventDispatcher();

    // Reactive client-side filtered data
    $: filteredData = searchTerm
        ? data.filter(item =>
            item.language.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : data;

    // Emit filtered data to the parent whenever it changes
    $: dispatch("filter", filteredData);

    // Emit the full dataset on component load
    onMount(() => {
        dispatch("filter", data);
    });
</script>

<div>
    <!-- Server-side fallback -->
    <form action="/languages" method="GET">
        <input
            type="text"
            id="searchbar"
            placeholder="Search..."
            class="search"
            bind:value={searchTerm}
            name="search"
        />
    </form>
</div>

<style>
/* Styling remains the same */
.search {
    background-image: url(/icons/search-icon.svg);
    background-repeat: no-repeat;
    background-position: 2% 50%;
    padding: 13px 30px;
    border-radius: 8px;
    border: none;
    width: 100%;
    max-width: 460px;
    margin: 10px auto;
    box-sizing: border-box;
}
div {
    width: 100%;
}
</style>
