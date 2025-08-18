<script>
  export let story; 
  export let audio = null; 

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

<section class="audio-transcript">
  <h2>{story?.title || 'Untitled Story'}</h2>

  <div class="transcript-lines">
    {#if transcriptLines.length > 0}
      {#each transcriptLines as line, i (i)}
        <p
          class:active={i === currentLineIndex}
          bind:this={transcriptRefs[i]}
        >
          {line.text}
        </p>
      {/each}
    {:else}
      <p>No transcript available</p>
    {/if}
  </div>

  <section class="player">
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
  </section>
</section>

<style>
.audio-transcript {
  max-width: 31.25em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.audio-transcript h2 {
  margin-bottom: 0.5em;
  text-align: center;
  font-size: 2em;
}

.player audio {
  width: 100%;
  margin-top: 1em;
}

.transcript-lines {
  max-height: 10em;
  overflow-y: auto;
  scroll-behavior: smooth;
  width: 100%;
  text-align: center;
}

.transcript-lines::-webkit-scrollbar {
  display: none;
}

.transcript-lines p {
  margin: 0.4em 0;
  transition: background-color 0.3s, color 0.3s;
  font-size: 1.5em;
}

.transcript-lines p.active {
  color: #f3a22a;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.2em 0.4em;
  border-radius: 0.25em;
}

.player {
  position: relative;
  width: 23em;
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
</style>
