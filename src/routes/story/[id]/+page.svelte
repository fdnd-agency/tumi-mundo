<script>
  import { StoryNavActions, AudioWithTranscript } from '$lib/index';
  export let data;
  const { story, audio } = data;
  let showVisuals = data.showVisuals;
  let darkMode = data.theme === 'dark';
</script>

<main class:light-mode={!darkMode} style="view-transition-name:main-bg;">
  <StoryNavActions bind:showVisuals bind:darkMode {story} />
  <AudioWithTranscript {story} {audio} {showVisuals} />
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
main.light-mode { background: var(--bg-image-blue); }

::view-transition-old(main-bg),
::view-transition-new(main-bg) { animation: fade-color 0.6s ease forwards; }
@keyframes fade-color { from { opacity: .2; } to { opacity: 1; } }
</style>
