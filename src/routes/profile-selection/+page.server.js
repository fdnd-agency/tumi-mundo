import { fetchAllData, ProfilesWithImages } from '$lib/api';

export async function load({ locals }) {
    // Fetch the necessary data (users, profiles, profileUsers)
    const data = await fetchAllData();
    const enhancedProfiles = ProfilesWithImages(data.profiles);

    return {
        ...data,
        profiles: enhancedProfiles
    };
}
