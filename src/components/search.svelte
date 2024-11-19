<script>
	    // Reactieve zoekterm
        let searchTerm = "";

        export let data; 

        // Reactieve filtering
        $: filteredLanguages = searchTerm
            ? data.languages.filter(language =>
                language.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            : data.languages;
</script>

	    <!-- Zoekveld -->
        <input 
        type="text" 
        id="searchbar"
        placeholder="Search language" 
        class="search"
        bind:value={searchTerm} 
        />

<style>

.search{
    background-image: url(/icons/search-icon.svg);
    background-repeat: no-repeat;
    background-position: 2% 50%;
    padding: 13px 30px;
    border-radius: 10px;
    border: none;
    width: 85%;
}
</style>
