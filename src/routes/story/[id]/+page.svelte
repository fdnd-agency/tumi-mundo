<script>
  import { CloudsSVG, StoryNavActions } from '$lib/index';
  export let data;
  const { story, audio} = data;
  const audioSrc = story.audios?.[0]?.file || '';

  let transcriptLines = audio?.transcript ? parseVTT(audio.transcript) : [];
  let audioEl;
  let currentTime = 0;
  let currentLineIndex = -1;
  let transcriptRefs = [];

  let showVisuals = data.showVisuals;
  let darkMode = data.theme === 'dark';
  let jsEnabled = false;

 
  function parseVTT(vtt) {
    const lines = vtt.split('\n');
    const result = [];
    let current = null;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line === '' || line === 'WEBVTT') continue;

      if (line.includes('-->')) {
        const [start, end] = line.split('-->').map(s => parseTime(s.trim()));
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
      parseInt(h) * 3600 +
      parseInt(m) * 60 +
      parseInt(sec) +
      (parseInt(ms) || 0) / 1000
    );
  }

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

</script>

<main class:light-mode={!darkMode} style="view-transition-name:main-bg;">
 
	<StoryNavActions bind:showVisuals bind:darkMode {story}/>

  <section class="transcript">
    <h2>{story.title}</h2>
    <div class="transcript-lines">
      {#if transcriptLines.length > 0}
        {#each transcriptLines as line, i}
          <p
            class:active={i === currentLineIndex}
            bind:this={transcriptRefs[i]}
          >
            {line.text}
          </p>
        {/each}
      {:else}
        <p>No transcripts available.</p>
      {/if}
    </div>
  </section>

  <section class="player">
    {#if audioSrc}
      <audio
        bind:this={audioEl}
        on:timeupdate={() => currentTime = audioEl.currentTime}
        controls
      >
        <source src={audioSrc} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    {:else}
      <p>No audio available</p>
    {/if}
  </section>

</main>

<style>
main {
  background: var(--bg-story-dark);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 0;
  overflow-y: hidden;
}

main.light-mode {
  background: var(--bg-image-blue);
}

.transcript, .player {
  padding: 1em;
  max-width: 31.25em;
}

.transcript {
  text-align: center;
  font-size: 2em;
  font-weight: bold;
  line-height: 1.4;
  max-width: 15em;
  color: white;
}

.transcript h2 {
  margin-bottom: 0.5em;
  position: sticky;
  top: 0;
  background: inherit;
  z-index: 1;
}

.transcript-lines {
  max-height: 5em;
  overflow-y: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.transcript-lines::-webkit-scrollbar {
  display: none;
}

.transcript p {
  margin: 0.4em 0;
  transition: background-color 0.3s, color 0.3s;
}

.transcript p.active {
  color: #f3a22a;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.2em 0.4em;
  border-radius: 0.25em;
}

main.light-mode .transcript p.active {
  background-color: rgba(0, 0, 0, 0.05);
  color: #000000;
}

main.light-mode .transcript p {
  color: #272727;
}

.player {
  position: relative;
  width: 100%;
  height: 8em;
  padding: 1em;
  border-top-left-radius: 2em;
  border-top-right-radius: 2em;
  color: white;
  margin: 1em 0 0;
}

.player audio {
  width: 100%;
}

::view-transition-old(main-bg),
::view-transition-new(main-bg) {
  animation: fade-color 0.6s ease forwards;
}

@keyframes fade-color {
  from { opacity: 0.2; }
  to { opacity: 1; }
}

::view-transition-old(visuals),
::view-transition-new(visuals) {
  animation: fade-visual-img 0.4s ease;
}

@keyframes fade-visual-img {
  from {
    opacity: 0;
    transform: scale(0.1);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
