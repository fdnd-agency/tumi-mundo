<script>
	import { AddProfile, ProfileItem } from '$lib/index';
	import { createEventDispatcher } from 'svelte';
	export let filteredProfiles = [];

	const dispatch = createEventDispatcher();

	function handleSelect(profileId) {
		dispatch('select', profileId);
	}
</script>

<ul>
	{#each filteredProfiles as profile}
		<li>
			<ProfileItem {profile} on:click={() => handleSelect(profile.id)} />
		</li>
	{/each}
	<li>
		<a href="/">
			<AddProfile />
			<h2>Add profile</h2>
		</a>
	</li>
</ul>

<style>
ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-row-gap: 5em;
    list-style: none;
    padding: 0;
    margin: 2em 0;
}

li {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.5em;
}

h2 {
    font-size: 1em;
}
</style>
