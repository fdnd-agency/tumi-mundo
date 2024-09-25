<script>
    let isMenuActive = false;

    function toggleMenu() {
        isMenuActive = !isMenuActive;
        const menu = document.querySelector('.menu');
        const button = document.getElementById('menuToggle');
        const buttonImg = button.querySelector('img');

        if (isMenuActive) {
            menu.classList.add('active');
            button.style.backgroundColor = 'white';
            buttonImg.src = '/icons/menu-close.svg';
        } else {
            menu.classList.remove('active');
            button.style.backgroundColor = '#1C1C1C';
            buttonImg.src = '/icons/menu-open.svg';
        }
    }
</script>

<article class="nav">
    <nav class="menu" class:active={isMenuActive}>
        <ul>
            <li class="active">
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

<style>
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
    transition: background-color 0.5s ease, transform 0.5s ease;
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

.menu li.active div{
    border: 5px solid white;
}

.menu li:nth-of-type(1) div{
    background-color: #3F92B6;
}

.menu li:nth-of-type(2) div{
    background-color: #599AE7;
}

.menu li:nth-of-type(3) div{
    background-color: #954BE2;
}

.menu li:nth-of-type(4) div{
    background-color: #06A192;
}

.menu li:nth-of-type(5) div{
    background-color: #FD8C73;
}

.menu.active {
    left: 0;
}
</style>