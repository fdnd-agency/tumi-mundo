// +page.js
/** @type {import('./$types').PageLoad} */
import { fetchAllData, mapStoriesWithDetails } from '$lib/api';

export async function load({ fetch }) {
    const data = await fetchAllData(fetch);

    const storiesWithDetails = mapStoriesWithDetails(data.stories, data.audios, data.languages);

    return {
        stories: storiesWithDetails, // Zorg ervoor dat je 'stories' in de return waarde zit
        languages: data.languages    // En eventuele andere data die je nodig hebt
    };
}
