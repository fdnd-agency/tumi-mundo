/** @type {import('./$types').PageLoad} */
export let csr = true;

import { fetchAllData, mapPlaylistsWithDetails } from '$lib/api';

export async function load({ fetch }) {
    const data = await fetchAllData(fetch);

    // Enrich stories with details
    const enrichedPlaylists  = mapPlaylistsWithDetails(data.playlists, data.stories, data.languages);

    return {
        ...data,
        playlists: enrichedPlaylists // Stories now include corresponding audios and languages
    };
}
