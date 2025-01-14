import { fetchApi } from '$lib/fetchApi';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, url }) {
  try {
    const formData = await request.formData();
    const method = formData.get('_method') || 'POST';

    if (method === 'DELETE') {
      const likeId = formData.get('likeId');
      if (!likeId) {
        return new Response(JSON.stringify({ error: 'Missing likeId' }), { status: 400 });
      }

      // Handle unlike (DELETE)
      await fetchApi(`/tm_likes/${likeId}`, 'DELETE');
    } else {
      const playlistId = formData.get('playlistId');
      const profileId = formData.get('profileId');

      if (!playlistId || !profileId) {
        return new Response(JSON.stringify({ error: 'Missing playlistId or profileId' }), { status: 400 });
      }

      // Handle like (POST)
      await fetchApi('/tm_likes', 'POST', {
        playlist: playlistId,
        profile: parseInt(profileId),
      });
    }

    // Redirect back
    return new Response(null, {
      status: 303,
      headers: {
        Location: '/playlist',
      },
    });
  } catch (error) {
    console.error('Error in /like:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
