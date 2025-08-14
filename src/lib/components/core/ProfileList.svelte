<script>
	import { AddProfile, ProfileItem, userState } from '$lib/index';
	import { goto } from '$app/navigation';

	export let profiles = [];
	export let profileUsers = [];
	export let userId;

	$: filteredProfiles = userId
		? profiles.filter(profile =>
			profileUsers.some(profileUser =>
				profileUser.user_id === userId && profileUser.profile_id === profile.id
			)
		  )
		: [];

	async function handleSelect(profileId) {
		userState.update(state => ({
			...state,
			profileId: profileId
		}));
		await goto('/');
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
