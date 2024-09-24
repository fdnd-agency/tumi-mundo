<section>
    <article>
        <img src ="/progress.svg" alt="Progress bar"/>
        <h3>Today's listening</h3>
        <h1>00:00</h1>
        <p>Of your 5-minute goal</p>
    </article>
    <article>
        <img src ="/charachters/mouse.svg" alt="Mouse charachter"/>
    </article>
</section>

<style>
section {
    background: url('/home-background.png'), linear-gradient(to bottom, #3F93B7, #1C5872);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
    height: 100vh;
    width: 100%;

    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(3, auto);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}

article:first-of-type { 
    grid-area: 1 / 1 / 2 / 2;
    flex-direction: column;
}
article:nth-of-type(2) { 
    grid-area: 3 / 1 / 4 / 2; 
}

article {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}

article img {
    max-width: 290px;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>