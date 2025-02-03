<main>
    <nav>
        <a href="/lessons"><img src="icons/back-icon.svg" class="back-btn" height="50" width="50"></a>
        <a href="#" class="dots">
            <div class="dot"></div>
          </a>
    </nav>
    <img src="/playlist-header.svg" alt="header" class="header-svg">
</main>

<style>

main{
    height: 100dvh;
    width: 100dvw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(#6577D3, #100E52);
    
}
.header-svg{
    position: absolute;
    top: 0;
    width: 100vw;
}
.back-btn{
    width: 50px;
}
nav{
    position: absolute;
    padding: 1em;
    top: 0;
    z-index: 1;
    width: 100dvw;
    margin-top: 3.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
a{
    z-index: 0;
}

/* styling for dots */
.dots {
    display: flex;
    justify-content: center;
    align-items: center;
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
</style>