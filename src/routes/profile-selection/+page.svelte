<script>
	import { TopBarProfile, ProfileList, userState } from '$lib/index';
	export let data;
	let userId = $userState.userId;
</script>

<main>
	<TopBarProfile />
	<ProfileList
		{userId}
		profiles={data.profiles}
		profileUsers={data.profileUsers}
	/>
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
