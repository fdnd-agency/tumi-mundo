<script>
    let isMenuActive = false;

    function toggleMenu() {
        isMenuActive = !isMenuActive;
    }
</script>

<section>
    <article>
        <img src="/progress.svg" alt="Progress bar">
        <div class="progress-text">
            <p>Today's listening</p>
            <h1>00:00</h1>
            <p>Of your 5-minute goal</p>
        </div>
    </article>
    <article>
        <img src="/charachters/mouse.svg" alt="Mouse character"/>
    </article>
    <article class="nav">
        <nav class="menu" class:active={isMenuActive}>
            <ul>
                <li>
                    <a href="#">
                        <div>
                            <img src="/icons/home-icon.svg" alt="">
                        </div>
                        <p>Home</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div>
                            <img src="/icons/puzzle-icon.svg" alt="">
                        </div>
                        <p>Testing</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div>
                            <img src="/icons/book-icon.svg" alt="">
                        </div>
                        <p>Lessons</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div>
                            <img src="/icons/chart-icon.svg" alt="">
                        </div>
                        <p>Statistics</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div>
                            <img src="/icons/person-icon.svg" alt="">
                        </div>
                        <p>Profile</p>
                    </a>
                </li>
            </ul>
        </nav>
    </article>
    <button id="menuToggle" on:click={toggleMenu} aria-label="Toggle Menu">
        <img src="/icons/menu-open.svg" alt="Menu Toggle">
    </button>
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
    position: relative;
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

button#menuToggle {
    position: fixed;
    bottom: 2em;
    right: 2em;
    background-color: #1C1C1C;
    height: 56px;
    width: 56px;
    border-radius: 16px;
    opacity: 80%;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
}

article:first-of-type img {
    max-width: 290px;
}

.progress-text {
    position: absolute;
    text-align: center;
    transform: translateY(20%);
}

article:first-of-type h1{
    font-size: 36px;
    font-weight: 400;
}

article:first-of-type p:nth-of-type(2){
    font-size: 10px;
} 

article img {
    max-width: 290px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.menu {
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: #292929;
    opacity: 98%;
    color: white;
    box-sizing: border-box;
}

.menu ul {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-wrap: wrap;
    flex-direction: column;
    max-width: 240px;
    gap: 40px;
}

.menu li {
    display: flex;
    justify-content: center;
    align-items: center;
}

.menu li div{
    background-color: #1C1C1C;
    height: 100px;
    width: 100px;
    border-radius: 16px;
    opacity: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.menu li div img {
    height: 45px;
    width: 45px;
}

.menu li p {
    color: white;
    text-align: center;
}

.menu.active {
    left: unset;
}
</style>