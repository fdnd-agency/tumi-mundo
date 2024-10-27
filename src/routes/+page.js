/** @type {import('./$types').PageLoad} */
export let csr = true
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
export async function load({ fetch }) {
	const directus = getDirectusInstance(fetch);
	return {
		accounts: await directus.request(readItems('tm24_account')),
        buddys: await directus.request(readItems('tm24_buddy')),
        profiles: await directus.request(readItems('tm24_profile')),
        stories: await directus.request(readItems('tm24_story')),
        personal_playlists: await directus.request(readItems('tm24_personal_playlist')),
        languages: await directus.request(readItems('tm24_language')),

	};
}