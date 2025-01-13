  <dialog open>
    <div class="popup">
      <div class="heading-close">
        <p>Goodmorning,</p>
        <form method="dialog">
          <button><img src="/icons/popup-close.svg" alt="close-button"></button>
        </form>
      </div>
        <p class="popup-message">Shall we start with a story?</p> 
        <a href="/lessons">Let's do it!</a>
    </div>
  </dialog>


<style>

dialog{
    border: none;
    border-radius: .75rem;
    margin: 0;
    transform: translateX(-50%);
    left: 50%;
    top: 30%;
}

button{
  margin-left: auto;
  border: none;
  background-color: transparent;
}

.popup{
    display: flex;
    flex-direction: column;
    background-color: white;
    color: black;
    height: 5em;
    width: 14em;
    border-radius: .75rem;
    padding: .5rem;
}
.heading-close{
  width: 100%;
  display: flex;
}

form{
  margin-left: auto;
}

.popup > a{
    background-color: #954BE2;
    color: white;
    width: 95%;
    border-radius: 5px;
    text-align: center;
}

.popup > a:hover{
    background-color: #6619ba;
}

.popup-message{
  margin-bottom: .5em;
}

.popup::after{
    content: '';
    position: absolute;
    width: 1.5rem;
    height: 1.58rem;
    background-color: white;
    bottom: -10%;
    right: 20%;
    border-radius: 1rem 0;
    z-index: -1;
}

@media only screen and (min-width: 388px) {
  .popup {
    width: 14em;
  }
}

</style>