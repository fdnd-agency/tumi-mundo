/** @type {import('./$types').PageLoad} */
export let csr = true;

import { fetchAllData, mapStoriesWithDetails, mapUsersWithProfiles } from '$lib/api';

export async function load({ fetch }) {
    const data = await fetchAllData(fetch);

    const storiesWithDetails = mapStoriesWithDetails(data.stories, data.audios, data.languages);
    const UsersWithProfiles = mapUsersWithProfiles(data.users, data.profiles, data.profileUsers);

    return {
        ...data,
        stories: storiesWithDetails,
        users: UsersWithProfiles
        
    };
}
