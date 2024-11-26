/** @type {import('./$types').PageLoad} */
export let csr = true;

import { fetchAllData, mapPlaylistsWithDetails } from '$lib/api';

export async function load({ fetch }) {
    const data = await fetchAllData(fetch);

    // Enrich stories with details
    const enrichedPlaylists = mapPlaylistsWithDetails(data.playlists, data.stories, data.playlistStories);

    return {
        ...data,
        playlists: enrichedPlaylists, // Playlists now include enriched details like playtime
    };
}