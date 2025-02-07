// +page.js
/** @type {import('./$types').PageLoad} */
import { fetchAllData, mapStoriesWithDetails } from '$lib/api';

export async function load({ fetch }) {
    const data = await fetchAllData(fetch);

    const storiesWithDetails = mapStoriesWithDetails(data.stories, data.audios, data.languages);

    return {
        stories: storiesWithDetails, 
        languages: data.languages    
    };
}
