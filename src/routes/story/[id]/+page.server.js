import { fetchAudioById, fetchCollection, mapStoriesWithDetails } from '$lib/api';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params, cookies }) {
  const routeStoryId = String(params.id);

// Extract the VTT string from audio/story (string | array | object with transcript/text)
function getVtt(audio, story) {
  const pick = (x) => {
    if (!x) return '';
    if (typeof x === 'string') return x;
    if (Array.isArray(x)) return x.join('\n');
    if (typeof x === 'object') {
      return pick(x.transcript ?? x.text ?? x.content ?? x.value ?? x.raw);
    }
    return '';
  };
  return pick(audio?.transcript) || pick(story?.audios?.[0]?.transcript) || '';
}

function vttToText(vtt = '') {
  return String(vtt)
    .replace(/\r/g, '')
    .replace(/^\s*WEBVTT.*$/mi, '') 
    .replace(/^\d+\s*$/gm, '')      
    .replace(/^.*-->.*/gm, '')      
    .replace(/<[^>]+>/g, '')        
    .split('\n').map(s => s.trim()).filter(Boolean).join(' ')
    .replace(/\s+([.,!?;:])/g, '$1') 
    .replace(/\s{2,}/g, ' ')
    .trim();
}

  // current story + audio
  const storyRaw     = await fetchCollection(fetch, 'tm_story', routeStoryId);
  const allAudios    = await fetchCollection(fetch, 'tm_audio');
  const allLanguages = await fetchCollection(fetch, 'tm_language');
  const [story]      = mapStoriesWithDetails([storyRaw], allAudios, allLanguages);

  const firstAudioId = story.audio?.[0];
  const audio        = firstAudioId ? await fetchAudioById(fetch, firstAudioId) : null;

  // plain transcript for <noscript>
  const plainTranscript = vttToText(getVtt(audio, story));

  // prev/next urls
  const allStories       = await fetchCollection(fetch, 'tm_story');
  const getStoryId       = (s) => String(s.id);
  const currentStoryId   = getStoryId(story);
  const storyIndex       = allStories.findIndex((s) => getStoryId(s) === currentStoryId);
  const prevHref = storyIndex > 0
    ? `/story/${encodeURIComponent(getStoryId(allStories[storyIndex - 1]))}`
    : null;
  const nextHref = (storyIndex >= 0 && storyIndex < allStories.length - 1)
    ? `/story/${encodeURIComponent(getStoryId(allStories[storyIndex + 1]))}`
    : null;

  // UI preferences
  const showVisuals = cookies.get('showVisuals') === 'true';
  const theme = cookies.get('theme') ?? 'dark';

  return { 
    story, 
    audio, 
    showVisuals, 
    theme, 
    prevHref, 
    nextHref,
    plainTranscript
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
