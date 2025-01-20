import { fetchAllData, mapPlaylistsWithDetails, mapStoriesWithDetails } from '$lib/api';
import { fetchApi } from '$lib/index';

export async function load({ locals }) {
    const profileId = 122; //PROFILE ID BECAUSE WE DIDN'T CONNECT EVERYTHING TO DATA YET
    const data = await fetchAllData();

    const storiesWithDetails = mapStoriesWithDetails(data.stories, data.audios, data.languages);

    return {
        ...data,
        stories: storiesWithDetails
    };
}