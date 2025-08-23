<script>
  import { Back, VisualsSVG, DarkModeSVG, CloudsSVG } from '$lib/index';
  import { onMount } from 'svelte';
  import { enhance } from '$app/forms';

  export let story;
  export let showVisuals = false;
  export let darkMode = false;

  onMount(() => {
    const storedVisuals = localStorage.getItem('showVisuals');
    const storedTheme = localStorage.getItem('theme');
    if (storedVisuals !== null) showVisuals = storedVisuals === 'true';
    if (storedTheme) darkMode = storedTheme === 'dark';
  });

  function toggleVisuals() {
    showVisuals = !showVisuals;
    localStorage.setItem('showVisuals', showVisuals);
  }
  function toggleTheme() {
    darkMode = !darkMode;
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }
</script>

<header>
  <a class="back-link" href="/lessons" aria-label="Go back">
    <Back color={darkMode ? 'white' : 'black'} />
  </a>

  <div class="actions">
    <form method="POST" action="?/toggleTheme" use:enhance on:submit|preventDefault={toggleTheme}>
      <button type="submit" aria-label="Toggle theme"><DarkModeSVG {darkMode} /></button>
    </form>
    <form method="POST" action="?/toggleVisuals" use:enhance on:submit|preventDefault={toggleVisuals}>
      <button type="submit" aria-label="Toggle visuals">
        {#if showVisuals}
          <VisualsSVG mode="off" />
        {:else}
          <VisualsSVG mode="on" />
        {/if}
      </button>
    </form>
  </div>
</header>

{#if darkMode}
  <CloudsSVG style="view-transition-name:clouds" color="dark" />
  <div class="moon" style="view-transition-name:clouds"></div>
{:else}
  <CloudsSVG style="view-transition-name:clouds" color="light" />
  <div class="sun" style="view-transition-name:clouds"></div>
{/if}

<style>
header{
  --page-width: min(60rem, 92vw);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
  z-index: 1;
}

.back-link{
  margin-left: calc((100vw - var(--page-width)) / 2);
  display: inline-grid;
  place-items: center;
  text-decoration: none;
}

.actions{ 
  display: flex; 
  gap: .5rem; 
  margin-right: max(1rem, env(safe-area-inset-right)); 
}
.actions button{
  background: none; 
  border: 0; 
  color: white; 
  font-size: 1.2em; 
  cursor: pointer;
}

.sun, .moon{
  position: absolute; 
  top: -2em; 
  left: -1em; 
  width: 10em; 
  height: 10em;
  border-radius: 50%; 
  box-shadow: 0 0 30px #ffcc00;
  animation: rise 1s ease-out forwards; 
  z-index: -1;
}
.sun{ 
  background: radial-gradient(circle,#ffe066,#ffcc00); 
}
.moon{ 
  background: radial-gradient(circle,#d3d3d3,#838383); 
  box-shadow: 0 0 30px #d6d6d6; 
}

@keyframes rise{ 
  from{
    opacity:0; 
    transform:translateY(2em)
  } 
  to{
    opacity:1; 
    transform:translateY(0)
  } 
}

:global(main.light-mode) .back-link :global(svg path){ fill:#111; }

@media (max-width: 28rem){
  .back-link{ margin-left: 1rem; }
}

@media (max-width: 56.25rem){
  .back-link{
    inline-size: 2.5rem;
    block-size: 2.5rem;
    border-radius: 9999px;
    background: rgba(0,0,0,.35);
    backdrop-filter: saturate(120%) blur(4px);
    -webkit-backdrop-filter: saturate(120%) blur(4px);
    border: 1px solid rgba(255,255,255,.45);
    box-shadow: 0 2px 8px rgba(0,0,0,.25);
  }

  .back-link:hover{ 
    background: rgba(0,0,0,.45); 
  }

  .back-link:focus-visible{
    outline: 2px solid #fff; 
    outline-offset: 2px; 
  }
}

header .actions button{
  color:#fff;            
  --icon-main:#fff;      
  --icon-detail:#fff;   
}

/* Light (alles zwart) */
:global(main.light-mode) header .actions button{
  color:#111;
  --icon-main:#000;
  --icon-detail:#000;
}
:global(main.light-mode) header .actions button{
  color:#111;
  --icon-main:#111;
  --icon-detail:#555; 
}



</style>
