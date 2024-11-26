import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';

// Helper function to fetch data for a specific collection
export async function fetchCollection(fetch, collectionName) {
    const directus = getDirectusInstance(fetch);
    return await directus.request(readItems(collectionName));
}

// Helper function to fetch all required data
export async function fetchAllData(fetch) {
    const directus = getDirectusInstance(fetch);

    // Fetch all required data in parallel
    const [
        accounts,
        profiles,
        profileStatistics,
        buddys,
        languages,
        audios,
        playlists,
        speakers,
        stories,
        likes
    ] = await Promise.all([
        fetchCollection(fetch, 'tm_users'),
        fetchCollection(fetch, 'tm_profile'),
        fetchCollection(fetch, 'tm_profile_statistics'),
        fetchCollection(fetch, 'tm_buddy'),
        fetchCollection(fetch, 'tm_language'),
        fetchCollection(fetch, 'tm_audio'),
        fetchCollection(fetch, 'tm_playlist'),
        fetchCollection(fetch, 'tm_speaker_profile'),
        fetchCollection(fetch, 'tm_story'),
        fetchCollection(fetch, 'tm_likes')
    ]);

    return {
        accounts,
        profiles,
        profileStatistics,
        buddys,
        languages,
        audios,
        playlists,
        speakers,
        stories,
        likes
    };
}

// Helper function to convert seconds to "min sec" format
function formatPlaytime(seconds) {
    const minutes = Math.floor(seconds / 60); // Calculate minutes
    const remainingSeconds = seconds % 60;   // Calculate remaining seconds
    return `${minutes} min ${remainingSeconds} sec`;
}

// Helper function to enrich stories with audio and language details
export function mapStoriesWithDetails(stories, audios, languages) {
    const assetBaseUrl = "https://fdnd-agency.directus.app/assets/";

    return stories.map((story) => {
        const language = languages.find((lang) => lang.id === story.language)?.language || "unknown.svg";
        const storyAudios = story.audio.map((audioId) => {
            const audioData = audios.find((audio) => audio.id === audioId);
            if (audioData) {
                return {
                    id: audioData.id,
                    file: `${assetBaseUrl}${audioData.audio_file}`,
                    voice_colours: audioData.voice_colours,
                    speaker_profile: audioData.speaker_profile
                };
            }
            return null;
        }).filter(Boolean);

        story.image = story.image ? `${assetBaseUrl}${story.image}` : "unknown.svg";

        if (story.playtime) {
            story.playtime = formatPlaytime(story.playtime);
        }

        story.language = language;

        return {
            ...story,
            audios: storyAudios
        };
    });
}

// Helper function to enrich playlists with their image, language, and stories
export function mapPlaylistsWithDetails(playlists, stories, languages) {
    const assetBaseUrl = "https://fdnd-agency.directus.app/assets/";

    return playlists.map((playlist) => {
        const language = languages.find((lang) => lang.id === playlist.language_id)?.language || "Unknown";
        const playlistStories = playlist.stories.map((storyId) => {
            return stories.find((story) => story.id === storyId) || null;
        }).filter(Boolean);

        playlist.image = playlist.image ? `${assetBaseUrl}${playlist.image}` : "unknown.svg";

        if (playlist.playtime) {
            playlist.playtime = formatPlaytime(playlist.playtime);
        }

        playlist.language = language;

        return {
            ...playlist,
            stories: playlistStories
        };
    });
}
