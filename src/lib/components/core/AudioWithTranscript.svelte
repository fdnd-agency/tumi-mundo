<script>
  import { SkipBtn } from '$lib/index';
  import { onMount } from 'svelte';

  export let story;
  export let audio = null;
  export let showVisuals = false;
  export let prevHref = null;
  export let nextHref = null;
  export let plainTranscript = '';

  const audioSrc = story?.audios?.[0]?.file || '';

  let transcriptLines = [];
  let audioEl;
  let currentTime = 0;
  let currentLineIndex = -1;
  let transcriptRefs = [];
  let jsEnabled = false;

  $: transcriptLines = (() => {
    const text =
      (audio && audio.transcript) ||
      (story?.audios?.[0]?.transcript) ||
      '';
    return text ? parseVTT(text) : [];
  })();

  $: {
    const index = transcriptLines.findIndex(
      (line) => currentTime >= line.start && currentTime < line.end
    );
    if (index !== -1 && index !== currentLineIndex) {
      currentLineIndex = index;
      scrollToActiveLine();
    }
  }

  onMount(() => { jsEnabled = true; });

  function scrollToActiveLine() {
    const el = transcriptRefs[currentLineIndex];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  function parseVTT(vtt) {
    const lines = vtt.replace(/\r\n?/g, '\n').split('\n');
    const result = [];
    let current = null;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line === '' || line === 'WEBVTT') continue;
      if (line.includes('-->')) {
        const [start, end] = line.split('-->').map((s) => parseTime(s.trim()));
        current = { start, end, text: '' };
        continue;
      }
      if (current) {
        current.text += line + ' ';
        const nextLine = lines[i + 1]?.trim();
        if (!nextLine || nextLine.includes('-->')) {
          result.push({ ...current, text: current.text.trim() });
          current = null;
        }
      }
    }
    return result;
  }

  function parseTime(timeString) {
    const [h, m, s] = timeString.split(':');
    const [sec, ms = 0] = s.split('.');
    return (
      (parseInt(h) || 0) * 3600 +
      (parseInt(m) || 0) * 60 +
      (parseInt(sec) || 0) +
      ((parseInt(ms) || 0) / 1000)
    );
  }
</script>

<section class="story-wrap">
  <div class="story-grid" class:has-visuals={showVisuals && story}>
    <div class="image-title-wrapper">
      {#if showVisuals && story}
        <picture class="story-image">
          <source srcset="{story.image}?width=320&format=avif" type="image/avif" />
          <source srcset="{story.image}?width=320&format=webp" type="image/webp" />
          <img src="{story.image}?width=320" alt="{story.summary} cover image" width="320" height="270" />
        </picture>
      {/if}
      <h2 class="title">{story.title}</h2>
    </div>

    <div class="transcript-panel">
      {#if jsEnabled}
        <div class="transcript-lines transcript">
          {#if transcriptLines.length > 0}
            {#each transcriptLines as line, i (i)}
              <p class:active={i === currentLineIndex} bind:this={transcriptRefs[i]}>
                {line.text}
              </p>
            {/each}
          {:else}
            <p>No transcript available</p>
          {/if}
        </div>
      {:else}
        <noscript class="transcript-fallback">
          <details>
            <summary>Read audio transcript</summary>
            {#if plainTranscript}
              <div class="transcript-scroll">
                <p class="transcript-plain">{plainTranscript}</p>
              </div>
            {/if}
          </details>
        </noscript>
      {/if}
    </div>

    <div class="player" class:js-on={jsEnabled}>
      <div class="story-buttons">
        <a class="navfab" href={prevHref || undefined} aria-label="Previous story" aria-disabled={!prevHref} tabindex={prevHref ? 0 : -1}>
          <SkipBtn direction="left" />
        </a>
        <a class="navfab" href={nextHref || undefined} aria-label="Next story" aria-disabled={!nextHref} tabindex={nextHref ? 0 : -1}>
          <SkipBtn direction="right" />
        </a>
      </div>

      {#if audioSrc}
        <audio
          bind:this={audioEl}
          on:timeupdate={(e) => (currentTime = e.currentTarget.currentTime)}
          controls
        >
          <source src={audioSrc} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      {:else}
        <p>No audio available</p>
      {/if}
    </div>
  </div>
</section>

<style>

.story-wrap {
  container-type: inline-size;
  container-name: story;
  inline-size: 100%;
}

.story-grid {
  /* sizing vars */
  --player-h: 4rem;
  --btns-h: 3.25rem;
  --title-h: clamp(2.75rem, 6vh, 5.25rem);
  --vpad: 1.75rem;
  --image-h: 0rem;
  --shrink: 30vh;
  --media-w: clamp(16.25rem, 80vw, 21.25rem);

  display: grid;
  gap: 1.25rem;
  padding: 1rem;
  max-inline-size: 60rem;
  margin-inline: auto;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "media"
    "transcript"
    "player";

  align-items: start;
  justify-items: center;
  position: relative;
}

.story-grid:has(.story-image) {
  --image-h: min(92vw, 2.25rem);
}

.image-title-wrapper {
  grid-area: media;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .75rem;
  inline-size: var(--media-w);
}

.story-image {
  display: block;
  inline-size: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 1rem;
  overflow: hidden;
}

.story-image img {
  display: block;
  inline-size: 100%;
  block-size: 100%;
  object-fit: cover;
}

.title {
  margin-block: .25rem .5rem;
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-white);
}

.transcript-panel {
  grid-area: transcript;
  text-align: center;
  inline-size: min(36rem, 92vw);
}

.transcript-lines {
  max-block-size: calc(
    100svh
    - var(--player-h)
    - var(--btns-h)
    - var(--title-h)
    - var(--image-h)
    - var(--vpad)
    - var(--shrink)
  );
  overflow-y: auto;
  scroll-behavior: smooth;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block-end: 1rem;
  margin-block-end: 10em;
}

.transcript-lines::-webkit-scrollbar {
  display: none;
}

.transcript-lines p {
  margin-block: .2em;
  transition: background-color .3s, color .3s;
  font-size: 1.5em;
  color: var(--color-white);
  inline-size: 11em;
}

.transcript-lines p.active {
  color: #f3a22a;
  background: rgba(255,255,255,.1);
  padding: .2em .4em;
  border-radius: .25em;
}

.player {
  grid-area: player;
  inline-size: var(--media-w);
  margin-block-start: .25rem;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
}

.player.js-on {
  bottom: 1em;
}

.player audio {
  inline-size: 100%;
}

.story-buttons {
  display: flex;
  gap: .875rem;
  justify-content: center;
  margin-block-end: .5rem;
  position: relative;
  z-index: 2;
}

.navfab {
  display: grid;
  place-items: center;
}
.navfab[aria-disabled="true"] {
  opacity: .4;
  pointer-events: none;
}

.transcript-fallback {
  inline-size: var(--media-w);
  margin-inline: auto;
  background: rgba(255,255,255,.04);
  text-align: left;
  overflow: visible;
}

/* Summary styling */
details > summary {
  list-style: none;
  display: inline-flex;
  align-items: center;
  gap: .35rem;
  padding: .4rem 0;
  margin: 0;
  cursor: pointer;
}

details > summary::-webkit-details-marker {
  display: none;
}

details > summary::after {
  content: "▸";
  font-size: 1.7em;
  line-height: 1;
  transform: translateY(1px);
  transition: transform .2s;
}

details[open] > summary::after {
  content: "▾";
}

/* Summary text */
.transcript-fallback summary{
  font-weight: 700;
  font-size: clamp(1rem, 0.95rem + 0.3vw, 1.125rem);
  line-height: 1.4;
  color: var(--color-white);
  text-align: left;
  cursor: pointer;
  margin: 0;
  padding: .5rem 0;
}

.transcript-scroll{
  max-block-size: clamp(12rem, 45vh, 22rem);
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  padding-inline-end: .25rem;
}

.transcript-plain{
  max-inline-size: 30em;
  line-height: 1.6;
  font-size: 1.125rem;
  color: var(--color-white);
  margin: 0;
  white-space: normal;
  text-align: left;
}

/* =============== Desktop (container query) =============== */

@container story (min-width: 900px) {
  .story-grid {
    --media-w: 22.5rem;

    grid-template-columns: 26.25rem 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      "media transcript"
      "player transcript";

    align-items: start;
    column-gap: clamp(1rem, 4vw, 3rem);
    row-gap: .25rem;
  }

  .transcript-panel {
    text-align: left;
    inline-size: auto;
    max-inline-size: 52ch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .title {
    text-align: left;
    font-size: clamp(1.8rem, 1.2rem + 1.2vw, 2.2rem);
    margin-block-start: .25rem;
  }

  .transcript-lines {
    max-block-size: calc(100dvh - 13rem);
    padding-block-end: 0;
    align-items: flex-start;
  }
  .transcript-lines p {
    inline-size: 100%;
  }

  .player {
    inline-size: var(--media-w);
    position: relative;
    left: auto;
    transform: none;
    bottom: auto;
    z-index: auto;
    margin-block-start: 0;
  }

  /* NOSCRIPT desktop tweaks */
  .transcript-fallback {
    inline-size: min(52ch, 92vw);
    margin-inline: 0;
    padding: .75rem 1rem;
    border-radius: .75rem;
  }

  .transcript-scroll {
    max-block-size: min(60vh, 28rem);
  }

  .transcript-plain {
    font-size: 1.25rem;
  }
}

@container story (min-width: 1200px) {
  .story-grid {
    grid-template-columns: 30rem 1fr;
  }
}

</style>
