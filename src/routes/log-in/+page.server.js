import { fetchAllData } from '$lib/api';

export const actions = {
  default: async ({ request }) => {
    const data = await fetchAllData();

    const userId = 10; // Example user ID
    const profileId = 121; // Example profile ID

    return {
        ...data,
        users: data.users,
        success: true,
        userId,
        profileId
    };
  }
};
