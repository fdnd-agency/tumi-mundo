
<section class="content">
    <h2 class="titel">Own playlists</h2>

    <article class="kaart">
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

      <article class="maak-playlist">
        <img src="/Group 321.svg" class="playlist-icon" alt="playlist-icon" />
        <p class="playlist-text">Make a playlist !</p>
        <p></p>
        <p class="favorite-text">Add your favorite stories in one playlist</p>
      </article>
    </article>
  </section>

<style>

    article.kaart article.maak-playlist {
        background-color: var(--card-bg-color-two);
      }
    
      article.kaart {
        display: flex;
        flex-direction: row;
        gap: 10px;
        transform: translateX(-26px);
        margin-bottom: 30px;
      }
    
      article.kaart article {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 105px;
        height: 175px;
        border-radius: 10px;
        background-color:var(--card-bg-color);
        padding: 10px;
        transform: translateX(10px);
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
        transform: translateX(-10px);
      }
    
      img.playlist-icon {
        margin-top: 22px;
        margin-bottom: 8px;
      }
    
      .titel {
        font-size: 1.3em;
        transform: translateX(10px);
        margin-top: 20px;
      }
    
      h2 {
        font-size: 1.3em;
        text-align: left;
        color: var(--heading-font-color);
        margin-bottom: 10px;
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
        margin-left: 5px;
      }
    
      .playlist-text {
        color: var(--playlistcard-font-color);
        font-weight: 600;
        margin: 0;
        font-size: 12px;
        line-height: 16.5px;
        margin-bottom: 3px;
      }
    
      .favorite-text {
        color: var(--playlistcard-font-color);
        margin: 0;
        margin-bottom: 10px;
        margin-left: 5px;
        margin-right: 5px;
        font-size: 9px;
        font-weight: 300;
        line-height: 12px;
      }


  img.playlist-icon {
    margin-top: 22px;
    margin-bottom: 8px;
  }

  @media screen and (min-width: 375px) {
  
  .titel {
  font-size: 1.3em;
  transform: translateX(-39px);
}

  article.kaart {
  transform: translateX(-52px);
}
  }
    
    </style>