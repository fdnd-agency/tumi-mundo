import { fetchAllData, mapProfilesWithImages } from '$lib/api';

export async function load({ locals }) {
    // Fetch the necessary data (users, profiles, profileUsers)
    const data = await fetchAllData();
    const enhancedProfiles = mapProfilesWithImages(data.profiles);

    return {
        ...data,
        profiles: enhancedProfiles
    };
}
