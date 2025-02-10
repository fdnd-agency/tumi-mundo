import { fetchCollection } from '$lib/api';

export async function load({ params, fetch }) {
    if (!params.id || !/^\d+$/.test(params.id)) {
        throw error(400, 'Invalid playlist ID');
    }

     const playlistId = params.id;
    try {
        const playlist = await fetchCollection(fetch, 'tm_playlist', playlistId);
        if (!playlist) {
            throw error(404, 'Playlist not found');
        }

        const storyIds = playlist.stories || [];
        const stories = await Promise.all(
            storyIds.map(id => 
                fetchCollection(fetch, 'tm_story', id)
                    .catch(err => {
                        console.warn(`Failed to fetch story ${id}:`, err);
                        return null;
                    })
            )
        );

        return {
            playlist: {
                ...playlist,
                stories: stories.filter(Boolean),
            }
        };
    } catch (err) {
        throw error(500, 'Failed to fetch playlist data');
    }
 }
