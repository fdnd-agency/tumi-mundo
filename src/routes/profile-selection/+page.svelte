<script>
	import { goto } from '$app/navigation';
	import { userState, Edit, AddProfile, TopBarProfile, ProfileList } from '$lib/index';
	import { onMount } from 'svelte';

	export let data;
	let profiles = data.profiles || [];
	let profileUsers = data.profileUsers || [];
	let userId = $userState.userId;
	let filteredProfiles = [];

	onMount(() => {
		if (!userId) {
			goto('/profile-selection');
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

		await goto('/');
	}
</script>

<main>
	<TopBarProfile />

	<ProfileList {filteredProfiles} on:select={e => handleProfileSelection(e.detail)} />
</main>

<style>
	main {
		background: var(--bg-image-blue);
		background-size: contain;
		background-repeat: no-repeat;
		background-position: bottom;
		height: 100dvh;
		color: var(--color-white);
		margin: auto;
		padding: 1em;
		padding-top: 3em;
	}
</style>
