<script>
    import Menu from '../../components/core/menu.svelte';

    import Menu2 from '../../components/core/menu2.svelte';

    import Popup from '../../components/layout/popup.svelte';

    let currentPage = "home";
</script>

<section>
    <Menu2 {currentPage}/>
    <article>
        <img src="/progress.svg" alt="Progress bar">
        <div class="progress-text">
            <p>Today's listening</p>
            <h1>00:00</h1>
            <p>Of your 5-minute goal</p>
        </div>
    </article>

    <article>
        <Popup/>  
        <img src="/characters/Rat.svg" alt="Rat character"/>
    </article>
</section>

<style>

:root {
    --image-width: 30em;
    --text-font-size-large: 2.25em;
    --text-font-size-small: 0.625em;
    --max-image-width: 18.125em;
}

section {
    background: url('/home-background.png'), linear-gradient(to bottom, #3F93B7, #1C5872);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    height: 100vh;
    height: 100dvh; 
    width: 100%;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(3, auto);
    grid-column-gap: 0em;
    grid-row-gap: 0em;
}

article:first-of-type { 
    grid-area: 1 / 1 / 2 / 2;
    flex-direction: column;
    position: relative;
}

article:nth-of-type(2) { 
    display: flex;
    flex-direction: column;
}

article {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}

article img {
    max-width: var(--max-image-width);
    display: flex;
    justify-content: center;
    align-items: center;
}

article:first-of-type img {
    width: var(--image-width);
}

.progress-text {
    position: absolute;
    text-align: center;
    transform: translateY(20%);
}

article:first-of-type h1 {
    font-size: var(--text-font-size-large);
    font-weight: 400;
}

article:first-of-type p:nth-of-type(2) {
    font-size: var(--text-font-size-small);
}
</style>