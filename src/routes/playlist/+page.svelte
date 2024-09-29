<a href="/">Go to Home</a>

<body>
  <main>
    <header>
      <h1>Lessons</h1>
      <a href="/" class="button-listening">Listening</a>
    </header>

    <section class="content">
      <h2>Own playlists</h2>

      <article class="kaart">
        <!-- Octopus kaart -->
        <article class="octopus-kaart">
          <img src="/Frame 27.svg" class="octopus" alt="octopus" />
          <p class="octopus-tekst">The octopus who was very hungry</p>

          <div class="tijd-en-playbutton">
            <img
              src="/Group 316.svg"
              class="playbutton-orange"
              alt="play-button"
            />
            <p class="tijd">31 min. 55 sec</p>
          </div>
        </article>

        <!-- Maak playlist kaart -->
        <article class="maak-playlist">
          <img src="/Group 321.svg" class="playlist-icon" alt="playlist-icon" />
          <p class="playlist-text">Make a playlist !</p>
          <p></p>
          <p class="favorite-text">Add your favorite stories in one playlist</p>
        </article>
      </article>
    </section>

    <section class="content">
      <h2 class="storie-titel">All stories</h2>

      <div class="buttons">
        <div class="button-ned">
          <img
            src="/Rectangle 133.svg"
            class="ned-vlag"
            alt="nederlandse-vlag"
          />
          <a href="/" class="button-text">Dutch</a>
        </div>

        <div class="button-eng">
          <img
            src="/Rectangle 135.svg"
            class="engelse-vlag"
            alt="engelse-vlag"
          />
          <a href="/" class="button-text">English</a>
        </div>
      </div>
    </section>

    <article class="stories">
      <article class="story-content">
        <img src="/Frame 103.svg" class="schildpad" alt="schilpad" />

        <div class="tekst">
          <p class="title">The dinosaur family</p>
          <p class="description">
            Long ago there was a family of dinosaurs that lived in a deserted
            place. The little dinosaur is making a new friend.
          </p>
        </div>

        <img src="/Rectangle 135.svg" class="vlag-icon" alt="engelse-vlag" />

        <div class="iconen-onder">
          <img
            src="/Group 316 (1).svg"
            class="links-onder"
            alt="playbutton-blue"
          />
          <p class="time">3 min. 5 sec</p>

          <div class="rechts-onder">
            <img
              src="/Frame 64.svg"
              class="download-icon"
              alt="download-icon"
            />
            <img src="/Group 4.svg" class="add-icon" alt="add-icon" />
          </div>
        </div>
      </article>

      <article class=""></article>

      <article class=""></article>
    </article>
  </main>
</body>

<style>
  :root {
    --playlist-bg-color: #471871;
    --btn-color: #1cb854;

    --card-bg-color: white;
    --card-time-font-size: 8px;
    --card-description-font-size: 11px;
    --card-font-color: #000000;

    --languages-btn-color: white;
    --languages-font-color: #1f1230;
    --languages-font-size: 12px;
    --carousel-btn: #954be2;
  }

  body {
    font-family: "Poppins", sans-serif;
    background-color: var(--playlist-bg-color);
    margin: 0;
    padding: 0;
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 100%;
  }

  h1 {
    font-size: 2em;
    margin-bottom: 10px;
    color: white;
  }

  a.button-listening {
    font-size: 1em;
    color: white;
    background-color: var(--btn-color);
    padding: 8px 80px;
    text-decoration: none;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  a.button-listening:hover {
    background-color: var(--btn-color);
  }

  main {
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    background-color: var(--bg-color);
  }

  article.kaart article.maak-playlist {
    background-color: #494375;
  }

  article.kaart {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-right: 55px;
  }

  article.kaart article {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100px;
    height: 165px;
    border-radius: 10px;
    background-color: white;
    padding: 10px;
    transform: translateX(-22px);
  }

  .tijd-en-playbutton {
    display: flex;
    align-items: center;
  }

  img.octopus {
    width: 100px;
    height: 95px;
    object-fit: cover;
    border-radius: 8px;
  }

  img.playbutton-orange {
    width: 24px;
    height: 24px;
    transform: translateX(-7px);
  }

  img.playlist-icon {
    margin-top: 22px;
    margin-bottom: 8px;
  }

  h2 {
    font-size: 1em;
    text-align: left;
    color: white;
    margin-bottom: 8px;
    transform: translateX(-20px);
  }

  p {
    font-size: var(--card-time-font-size);
    line-height: 12px;
    text-align: left;
  }

  .octopus-tekst {
    font-size: var(--card-description-font-size);
    text-align: left;
    color: var(--card-font-color);
    line-height: 16.5px;
    margin: 0;
  }

  .tijd {
    padding-right: 10px;
  }

  .playlist-text {
    color: white;
    font-weight: 600;
    margin: 0;
    font-size: 12px;
    line-height: 16.5px;
    margin-bottom: 3px;
  }

  .favorite-text {
    color: white;
    margin: 0;
    margin-bottom: 15px;
    margin-left: 5px;
    margin-right: 5px;
    font-size: 9px;
    font-weight: 300;
    line-height: 16.5px;
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
    transform: translateX(-82px);
    text-decoration: none;
  }

  .button-ned,
  .button-eng {
    display: flex;
    align-items: center;
    color: black;
    background-color: white;
    padding: 3px 8px;
    border-radius: 10px;
    margin-bottom: 10px;
    text-decoration: none;
  }

  .button-text {
    margin-bottom: 0;
    text-decoration: none;
    color: var(--card-font-color);
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    margin-left: 3px;
  }

  .ned-vlag,
  .engelse-vlag {
    width: 24px;
    height: 24px;
    margin-right: 3px;
    transform: translateX(-3px);
  }

  h2.storie-titel {
    margin-top: 3em;
    transform: translateX(-75px);
  }

  article.stories {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-right: 10px;
  }

  article.stories article {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 320px;
    max-width: 800px;
    height: 80px;
    border-radius: 10px;
    background-color: white;
    padding: 10px;
    position: relative;
  }

  .title {
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 5px;
    margin-top: 5px;
  }

  .description {
    margin-bottom: 35px;
    line-height: 12px;
    width: 220px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
    font-size: 10px;
  }

  .time {
    margin-top: 10px;
    margin-right: 135px;
  }

  .tekst {
    flex-grow: 1;
    font-size: 8px;
    padding: 0;
  }

  img.schildpad {
    object-fit: cover;
    width: 70px;
    height: 75px;
    border-radius: 8px;
    margin-bottom: 5px;
    margin-right: 8px;
  }

  .vlag-icon {
    position: absolute;
    top: 11px;
    right: 10px;
  }

  .iconen-onder {
    position: absolute;
    margin-right: 10px;
    margin-bottom: 5px;
    margin-top: 10px;
    bottom: 5px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
  }

  .links-onder {
    margin-left: 87px;
  }

  .rechts-onder {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 2px;
  }
</style>
