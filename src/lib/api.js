import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
import { PUBLIC_APIURL } from '$env/static/public';

const assetBaseUrl = `${PUBLIC_APIURL}/assets/`;

export async function fetchCollection(fetch, collectionName) {
    const directus = getDirectusInstance(fetch);
    return await directus.request(readItems(collectionName));
}

export async function fetchAllData(fetch) {

    const [
        users,
        profiles,
        profileStatistics,
        buddys,
        languages,
        audios,
        playlists,
        speakers,
        stories,
        likes,
        playlistStories,
        profileUsers
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
        fetchCollection(fetch, 'tm_likes'),
        fetchCollection(fetch, 'tm_playlist_stories'),
        fetchCollection(fetch, 'tm_profile_user')
    ]);

    return {
        users,
        profiles,
        profileStatistics,
        buddys,
        languages,
        audios,
        playlists,
        speakers,
        stories,
        likes,
        playlistStories,
        profileUsers
    };
}

function retrieveFromAssets(url) {
    const link = `${assetBaseUrl}${url}`;
    return link
}

function formatPlaytime(seconds) {
    const minutes = Math.floor(seconds / 60); // Calculate minutes
    const remainingSeconds = seconds % 60;   // Calculate remaining seconds
    return `${minutes} min ${remainingSeconds} sec`;
}

export function mapStoriesWithDetails(stories, audios, languages) {

    return stories.map((story) => {
        const language = languages.find((lang) => lang.id === story.language)?.language || "unknown.svg";
        const storyAudios = story.audio.map((audioId) => {
            const audioData = audios.find((audio) => audio.id === audioId);
            if (audioData) {
                const audioFile = retrieveFromAssets(audioData.audio_file);
                return {
                    id: audioData.id,
                    file: audioFile,
                    voice_colours: audioData.voice_colours,
                    speaker_profile: audioData.speaker_profile
                };
            }
            return null;
        }).filter(Boolean);

        if (story.image) {
            story.image = retrieveFromAssets(story.image);
        }

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

export function mapPlaylistsWithDetails(playlists, stories, playlistStories) {
    const storyMap = new Map(stories.map((story) => [story.id, story]));

    return playlists.map((playlist) => {
        const relatedStoryIds = playlistStories
            .filter((link) => link.playlist_id === playlist.id)
            .map((link) => link.story_id);

        const playlistStoriesData = relatedStoryIds
            .map((storyId) => {
                const story = storyMap.get(storyId);
                return story;
            })
            .filter(Boolean);

        const totalPlaytime = playlistStoriesData.reduce((sum, story) => {
            return sum + (story.playtime || 0);
        }, 0);

        if (playlist.image) {
            playlist.image = retrieveFromAssets(playlist.image);
        }

        const formattedPlaytime = totalPlaytime > 0 ? formatPlaytime(totalPlaytime) : "0 min 0 sec";

        const enrichedPlaylist = {
            ...playlist,
            image: playlist.image,
            playtime: formattedPlaytime,
            stories: playlistStoriesData,
        };

        return enrichedPlaylist;
    });
}


export function mapProfilesWithImages(profiles) {

    return profiles.map((profile) => {

        if (profile.avatar) {
            profile.avatar = retrieveFromAssets(profile.avatar);
        }

        return {
            ...profile
        };
    });
}