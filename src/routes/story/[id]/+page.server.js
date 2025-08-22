// +page.server.js
import { fetchAudioById, fetchCollection, mapStoriesWithDetails } from '$lib/api';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params, cookies }) {
  const routeStoryId = String(params.id);

  const storyRaw = await fetchCollection(fetch, 'tm_story', routeStoryId);
  const allAudios = await fetchCollection(fetch, 'tm_audio');
  const allLanguages = await fetchCollection(fetch, 'tm_language');
  const [story] = mapStoriesWithDetails([storyRaw], allAudios, allLanguages);

  const firstAudioId = story.audio?.[0];
  const audio = firstAudioId ? await fetchAudioById(fetch, firstAudioId) : null;

  const allStories = await fetchCollection(fetch, 'tm_story');
  const getStoryId = (s) => String(s.id); 
  const currentStoryId = getStoryId(story);
  const storyIndex = allStories.findIndex((s) => getStoryId(s) === currentStoryId);

  const previousHref =
    storyIndex > 0
      ? `/story/${encodeURIComponent(getStoryId(allStories[storyIndex - 1]))}`
      : null;

  const nextHref =
    storyIndex >= 0 && storyIndex < allStories.length - 1
      ? `/story/${encodeURIComponent(getStoryId(allStories[storyIndex + 1]))}`
      : null;

  const showVisuals = cookies.get('showVisuals') === 'true';
  const theme = cookies.get('theme') ?? 'dark';

  return { 
    story, 
    audio, 
    showVisuals, 
    theme, 
    prevHref: previousHref, 
    nextHref 
  };
}

/** @type {import('./$types').Actions} */
export const actions = {
  toggleVisuals: async ({ cookies, url }) => {
    const current = cookies.get('showVisuals') === 'true';
    cookies.set('showVisuals', (!current).toString(), { path: '/' });
    throw redirect(303, url.pathname);
  },
  toggleTheme: async ({ cookies, url }) => {
    const current = cookies.get('theme') ?? 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    cookies.set('theme', next, { path: '/' });
    throw redirect(303, url.pathname);
  }
};
