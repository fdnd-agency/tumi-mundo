<script>
    import { Story } from '$lib/index';

    /** @type {import('./$types').PageData} */
    export let data;

    // console.log(data);
</script>

<main>
    <nav>
        <a href="/lessons"><img src="icons/back-icon.svg" class="back-btn" height="50" width="50"></a>
        <a href="#" class="dots">
            <div class="dot"></div>
        </a>
    </nav>
    <img src="/playlist-header.svg" alt="header" class="header-svg">

    <section class="meta-section">
        <h1>Penguin snow adventures</h1>
        <p>All the stories about Loeky! Here are all Daan’s favorite stories that he can listen to before bed time or at the start of the day.</p>

        <div class="meta-info">
            <img src="/icons/profile-icon.svg">
            <p>Made by <strong>Sarah</strong></p>
            <img src="/icons/clock.svg">
            <p>2u 11m</p>
        </div>

        <div class="meta-play">
            <a><img src="/icons/download.svg"></a>
            <a class="heart-svg"><img src="/icons/heart.svg"></a>
            <a><img src="/icons/play.svg"></a>
        </div>
    </section>

    <section class="stories-section">
            <ul>
                {#each data.stories as story }
                    <li>
                        <Story {story} />
                    </li>
                {/each}
            </ul>
    </section>
    
</main>

<style>

* {
    color: var(--color-text-light);
}
nav, .meta-section {
    padding: var(--space-md);
}
nav, .meta-section, .meta-info, .meta-play{
    max-width: 31.25em;
}
main {
    height: max-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(#6577D3, #100E52);
}
.header-svg {
    position: absolute;
    top: 0;
    z-index: 0;
}
.back-btn {
    width: 3.125em;
}
nav {
    position: absolute;
    top: 0;
    z-index: 10;
    width: 100%;
    margin-top: 3.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
a {
    z-index: 0;
}
/* styling for dots */
.dots {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 50px; 
    height: 50px;
}
.dot, .dot:before, .dot:after {
  position: absolute;
  width: .4em;
  height: .4em;
  border-radius: 20px;
  background-color: black;
}
.dot {
  top: 50%;
  left: 50%;
  margin-top: -10px;
  margin-left: -10px;
}
.dot:before, .dot:after {
  content: "";
}
.dot:before {
  right: .8em;
}
.dot:after {
  left: .8em;
}
/* styling for meta info */
.meta-info, .meta-play {
    display: flex;
    align-items: center;
}
.meta-info {
    margin-top: 1em;
}
.meta-info > p:nth-of-type(1) {
    margin-right: auto;
}
.meta-section {
    margin-top: 37vh;
}
.meta-info > img {
    padding-right: .3em;
}
.heart-svg {
    margin: 0 auto 0 .5em;
}
/* styling for stories section */
.stories-section {
    height: 25em; 
    overflow-y: scroll;
    width: 100%; 
    scrollbar-width: none;
    
}
.stories-section > ul {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
}
@media only screen and (min-width: 600px) {
  main {
    background-color: lightblue;
  }
}

</style>
