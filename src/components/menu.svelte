<script>
    let isMenuActive = false;

    function toggleMenu() {
        isMenuActive = !isMenuActive;
    }
</script>

<article class="nav">
    <nav class="menu" class:active={isMenuActive} aria-hidden="true">
        <ul>
            <li class="active">
                <a href="#">
                    <div>
                        <img src="/icons/home-icon.svg" alt="Home">
                    </div>
                    <p>Home</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <div>
                        <img src="/icons/puzzle-icon.svg" alt="Testing">
                    </div>
                    <p>Testing</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <div>
                        <img src="/icons/book-icon.svg" alt="Lessons">
                    </div>
                    <p>Lessons</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <div>
                        <img src="/icons/chart-icon.svg" alt="Statistics">
                    </div>
                    <p>Statistics</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <div>
                        <img src="/icons/person-icon.svg" alt="Profile">
                    </div>
                    <p>Profile</p>
                </a>
            </li>
        </ul>
    </nav>
</article>

{#if !isMenuActive}
    <button class="btn open" on:click={toggleMenu} aria-label="Open Menu" aria-expanded={isMenuActive}>
        <img src="/icons/menu-open.svg" alt="Open menu">
    </button>
{:else}
    <button class="btn close" on:click={toggleMenu} aria-label="Close Menu" aria-expanded={isMenuActive}>
        <img src="/icons/menu-close.svg" alt="Close menu">
    </button>
{/if}

<style>

button.btn {
    position: fixed;
    bottom: 2em;
    right: 2em;
    height: 56px;
    width: 56px;
    border-radius: 16px;
    background-color: #1C1C1C;
    opacity: 80%;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.5s ease, transform 0.5s ease;
}

button.btn.close {
    background-color: white;
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
    transition: left 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
}

.menu ul {
    display: flex;
    flex-wrap: wrap;
    max-height: 470px;
    height: 470px;
    max-width: 240px;
    margin: 0;
    padding: 0;
}

.menu li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    box-sizing: border-box;
    list-style: none;
}

.menu li div {
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

.menu li.active div {
    border: 5px solid white;
}

.menu li:nth-of-type(1) div {
    background-color: #3F92B6;
}

.menu li:nth-of-type(2) div {
    background-color: #599AE7;
}

.menu li:nth-of-type(3) div {
    background-color: #954BE2;
}

.menu li:nth-of-type(4) div {
    background-color: #06A192;
}

.menu li:nth-of-type(5) div {
    background-color: #FD8C73;
}

.menu.active {
    left: 0;
}
</style>