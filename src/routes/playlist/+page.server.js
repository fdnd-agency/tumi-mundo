// playlist/+page.server.js
import { fetchAllData, mapPlaylistsWithDetails } from '$lib/api';
import { fetchApi } from '$lib/fetchApi';

export async function load({ locals }) {
    const profileId = 122; //PROFILE ID BECAUSE WE DIDN'T CONNECT EVERYTHING TO DATA YET
    const data = await fetchAllData();

    const enrichedPlaylists = await Promise.all(
        mapPlaylistsWithDetails(data.playlists, data.stories, data.playlistStories).map(async (playlist) => {
            const likes = await fetchApi(`/tm_likes?filter[playlist][_eq]=${playlist.id}&filter[profile][_eq]=${profileId}`);
            return {
                ...playlist,
                isLiked: likes?.length > 0,
                likeId: likes?.[0]?.id || null,
            };
        })
    );

    return {
        ...data,
        playlists: enrichedPlaylists,
    };
}