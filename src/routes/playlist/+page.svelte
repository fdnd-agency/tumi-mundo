<script>
  import Carousel from '../../components/carousel.svelte'
  import Likedstory from "../../components/liked_story.svelte";
  import Playlist from '../../components/playlist.svelte';

  export let data; // Hier komt de data van de load functie binnen
  const { persons = [] } = data; // Destructureer de data en geef een fallback waarde aan 'persons'

  // Log om te controleren of 'persons' correct wordt doorgegeven
  console.log(persons, 'personen in Svelte');


</script>


<body>
  <main>
    <h1>Lessons</h1>
    <nav>
      <a href="/" class="button-listening">Listening</a>
      <img src="/Music Note 2.svg" class="music-note" alt="music-note" />

      <a href="/" class="button-listening">2.</a>
    </nav>

    <div>
      
      {#if persons && persons.length > 0}
        <ul>
          {#each persons as person}
            <li>
              <h2>{person.name} {person.surname}</h2>
              <img src="{person.avatar}" alt="{person.name}" style="width: 100px; height: 100px; border-radius: 50%;" />
              <p><strong>Bio:</strong> {person.bio}</p>
              <p><strong>Nickname:</strong> {person.nickname}</p>
              <p><strong>Roles:</strong> {#each person.role as r}{r} {/each}</p>
            </li>
          {/each}
        </ul>
      {:else}
        <p>Geen personen gevonden.</p>
      {/if}
    </div>
    

    <Playlist/>

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

    <Carousel/>

    <Likedstory />
    
  </main>
</body>

<style>
  :root {
    --playlist-bg-color: #471871;
    --btn-color: #1cb854;
    --btn-color-two: #37c6ab;
    --card-bg-color-two: #494375;
    --card-bg-color: #f3f3f3;
    --card-time-font-size: 8px;
    --card-description-font-size: 11px;
    --card-font-color: #000000;
    --languages-btn-color: white;
    --languages-font-color: #1f1230;
    --languages-font-size: 12px;
    --carousel-btn: #9264f4;
    --label-btn: #ccc;
    --heading-font-color: white;
    --playlistcard-font-color:white;
    --icon-btn-color: white;
  }

  body {
    font-family: "Poppins", sans-serif;
    background-color: var(--playlist-bg-color);
    margin: 0;
    padding: 0;
  }

  nav {
    display: flex;
    flex-direction: row;
    transform: translateX(120px);
    gap: 10px;
  }

  h1 {
    font-size: 2em;
    margin-bottom: 10px;
    margin-top: 50px;
    color: var(--heading-font-color);
  }

  a.button-listening {
    font-size: 1em;
    color: var(--heading-font-color);
    background-color: var(--btn-color);
    padding: 8px 90px;
    text-decoration: none;
    border-radius: 5px;
    margin-bottom: 30px;
    transform: translateX(-18px);
  }

  a.button-listening:hover {
    background-color: var(--btn-color);
  }

  a.button-listening:nth-child(3) {
    background-color: var(--btn-color-two);
    opacity: 40%;
  }

  img.music-note {
    position: absolute;
    left: 190px;
    top: 7px;
  }

  main {
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    background-color: var(--bg-color);
  }

      
  h2 {
        font-size: 1.3em;
        text-align: left;
        color: var(--heading-font-color);
        margin-bottom: 10px;
      }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
    transform: translateX(-52px);
    text-decoration: none;
  }

  .button-ned,
  .button-eng {
    display: flex;
    align-items: center;
    color: var(--languages-font-color);
    background-color: var(--languages-btn-color);
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
    margin-top: 1em;
    transform: translateX(-50px);
  }

  @media screen and (min-width: 375px) {


    h2.storie-titel {
    transform: translateX(-72px);
    }

  .buttons{
    transform: translateX(-74px);
    }

    
  }


</style>
