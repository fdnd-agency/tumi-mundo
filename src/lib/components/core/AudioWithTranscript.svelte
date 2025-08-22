<script>
  import { SkipBtn } from '$lib/index';
  export let story; 
  export let audio = null; 
  export let showVisuals = false;
  export let prevHref = null;
  export let nextHref = null;

  const audioSrc = story?.audios?.[0]?.file || '';

  let transcriptLines = [];
  let audioEl;
  let currentTime = 0;
  let currentLineIndex = -1;
  let transcriptRefs = [];

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
    </div>

    <div class="player">
      <div class="story-buttons">
        <a
          class="navfab"
          href={prevHref || undefined}
          aria-label="Previous story"
          aria-disabled={!prevHref}
          tabindex={prevHref ? 0 : -1}
          sveltekit:prefetch
        ><SkipBtn direction="left"/></a>

        <a
          class="navfab"
          href={nextHref || undefined}
          aria-label="Next story"
          aria-disabled={!nextHref}
          tabindex={nextHref ? 0 : -1}
          sveltekit:prefetch
        ><SkipBtn direction="right"/></a>
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
  width: 100%;
}

.story-grid {
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
  max-width: 60rem;
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

.image-title-wrapper{
  grid-area: media;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .75rem;
  width: var(--media-w);
}

.story-image{
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 1rem;
  overflow: hidden;
}

.story-image img{
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;  
}

.title {
  margin: .25rem 0 .5rem;
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-white);
}

.transcript-panel {
  grid-area: transcript;
  text-align: center;
  width: min(36rem, 92vw);
}

.transcript-lines {
  max-height: calc(
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
  padding-bottom: 1rem; 
  margin-bottom: 10em;
}

.transcript-lines::-webkit-scrollbar { 
  display: none; 
}

.transcript-lines p {
  margin: .2em 0;
  transition: background-color .3s, color .3s;
  font-size: 1.5em;
  color: var(--color-white);
  width: 11em;   
}

.transcript-lines p.active {
  color: #f3a22a;
  background: rgba(255,255,255,.1);
  padding: .2em .4em;
  border-radius: .25em;
}

.player {
  grid-area: player;
  width: var(--media-w);  
  margin-top: 0.25rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 1em;
  z-index: 20;
}

.player audio { 
  width: 100%; 
}

.story-buttons {
  display: flex;
  gap: 0.875rem;        
  justify-content: center;
  margin-bottom: .5rem;
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

/* desktop container query */
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
    width: auto;
    max-width: 52ch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .title {
    text-align: left;
    font-size: clamp(1.8rem, 1.2rem + 1.2vw, 2.2rem);
    margin-top: .25rem;
  }

  .transcript-lines {
    max-height: calc(100dvh - 13rem);
    padding-bottom: 0;
    align-items: flex-start;
  }

  .player {
    width: var(--media-w);
    position: relative; 
    left: auto; transform: none; bottom: auto; z-index: auto;
    margin-top: 0;     
  }
}

@container story (min-width: 1200px) {
  .story-grid { 
    grid-template-columns: 30rem 1fr;   
  }
}
</style>
