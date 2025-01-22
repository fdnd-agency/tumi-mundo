/** @type {import('./$types').PageLoad} */
export let csr = true;

import { fetchAllData, mapStoriesWithDetails } from '$lib/api';

export async function load({ fetch }) {
    const data = await fetchAllData(fetch);

    const storiesWithDetails = mapStoriesWithDetails(data.stories, data.audios, data.languages);

    return {
        ...data,
        stories: storiesWithDetails,
        languages: data.languages
    };
}
