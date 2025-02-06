import { fetchApi } from '$lib/components/helpers/fetchApi';

export async function load({ params, locals }) {
    const { id } = params;
    const profileId = 121;  

    const token = locals?.user?.token || null; 

    const playlistResponse = await fetchApi(`/playlists/${id}`, 'GET', null, token);
    const playlist = playlistResponse ? playlistResponse[0] : null;

    if (!playlist) {
        return { status: 404, error: new Error('Playlist not found') };
    }

    const likes = await fetchApi(`/tm_likes?filter[playlist][_eq]=${playlist.id}&filter[profile][_eq]=${profileId}`, 'GET', null, token);
    
    return {
        props: {
            playlist: {
                ...playlist,
                isLiked: likes?.length > 0,
                likeId: likes?.[0]?.id || null,
            }
        }
    };
}
