/** @type {import('./$types').PageLoad} */
export let csr = true
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
export async function load({ fetch }) {
	const directus = getDirectusInstance(fetch);
	return {
        languages: await directus.request(readItems('tm24_language')),

	};
}