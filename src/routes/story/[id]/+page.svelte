<script>
  import { StoryNavActions, AudioWithTranscript } from '$lib/index';
  export let data;

  $: story = data.story;
  $: audio = data.audio;
  $: prevHref = data.prevHref;
  $: nextHref = data.nextHref;
  $: showVisuals = data.showVisuals;
  $: darkMode = data.theme === 'dark';
  $: plainTranscript = data
</script>

<div class:light-mode={!darkMode} style="view-transition-name:main-bg;">
  <StoryNavActions bind:showVisuals bind:darkMode {story} />

  {#key story?.id ?? story?.slug ?? story}
    <AudioWithTranscript
      {story}
      {audio}
      {showVisuals}
      {prevHref}
      {nextHref}
      plainTranscript={data.plainTranscript}  
    />
  {/key}
</div>

<style>
div {
  background: var(--bg-story-dark);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 0;
  overflow-y: hidden;
}

main.light-mode { 
  background: var(--bg-image-blue); 
}

main.light-mode :global(.title), main.light-mode :global(.player p), main.light-mode :global(.transcript-plain), main.light-mode :global(.transcript-fallback summary){
  color: black;
}

main.light-mode :global(.transcript p.active){
  background-color: rgba(0, 0, 0, 0.05);
  color: #000000;
  font-weight: bold;
}

main.light-mode :global(.transcript p){
  color: #272727;
}



::view-transition-old(main-bg),
::view-transition-new(main-bg) { 
  animation: fade-color 0.6s ease forwards; 
}

@keyframes fade-color { 
  from { 
    opacity: .2; 
    } 
  to { 
    opacity: 1; 
    } 
}
</style>
