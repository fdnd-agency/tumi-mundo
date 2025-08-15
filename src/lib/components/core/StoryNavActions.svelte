<script>
	import { Back, VisualsSVG, DarkModeSVG, CloudsSVG } from '$lib/index';
	import { onMount } from 'svelte';
    import { enhance } from '$app/forms';

    export let story
	export let showVisuals = false;
	export let darkMode = false;
	let jsEnabled = false;

	onMount(() => {
		jsEnabled = true;
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
	<a href="/lessons" aria-label="Go back">
		<Back color={darkMode ? 'white' : 'black'} />
	</a>

	<div class="actions">
		<form method="POST" action="?/toggleTheme" use:enhance on:submit|preventDefault={toggleTheme}>
            <button type="submit" aria-label="Toggle theme">
                <DarkModeSVG {darkMode} />
            </button>
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

{#if showVisuals && story}
	<section class="visuals">
		<picture class="story-image flex-items">
			<source srcset="{story.image}?width=320&format=avif" type="image/avif">
			<source srcset="{story.image}?width=320&format=webp" type="image/webp">
			<source srcset="{story.image}?width=320" type="image/jpeg">
			<img
				src="{story.image}?width=320"
				alt="{story.summary} cover image"
				height="270"
				width="320"
			/>
		</picture>
	</section>
{/if}

{#if darkMode}
    <CloudsSVG style="view-transition-name:clouds" color="dark" />
    <div class="moon" style="view-transition-name:clouds"></div>
{:else}
    <CloudsSVG style="view-transition-name:clouds" color="light" />
    <div class="sun" style="view-transition-name:clouds"></div>
{/if}

<style>

header, .visuals{
  padding: 1em;
  max-width: 31.25em;
}

header {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

header a {
  font-size: 1.5em;
  color: white;
  text-decoration: none;
}

.actions {
  display: flex;
}

.actions button {
  background: none;
  border: none;
  color: white;
  font-size: 1.2em;
  margin-left: 0.5em;
  cursor: pointer;
}

/* visuals */

.visuals {
  margin: auto;
}

.visuals img {
  max-width: 20em;
  max-height: 20em;
  border-radius: 1em;
  transition: 1s;
}

/* sun and moon */
.sun,
.moon {
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

.sun {
  background: radial-gradient(circle, #ffe066, #ffcc00);
}

.moon {
  background: radial-gradient(circle, #d3d3d3, #838383);
  box-shadow: 0 0 30px #d6d6d6;
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(2em);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
