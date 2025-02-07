import { fetchCollection } from '$lib/api';

export async function load({ params, fetch }) {
    const playlistId = params.id; 
    const playlist = await fetchCollection(fetch, 'tm_playlist', playlistId);

    if (!playlist) {
        console.error("Playlist not found!");
        return {
            status: 404,
            error: new Error("Playlist not found"),
        };
    }
    return {
        playlist
    };
}
