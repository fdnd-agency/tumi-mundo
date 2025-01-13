<!-- <div class="popup">
    <p>Goodmorning.</p>
    <p>Shall we start with a story?</p> 
    <a href="/lessons">Let's do it!</a>
</div> -->

<!-- <dialog open class="popup">
    <form method="dialog">  
        <button>x</button>
      </form>
    <p>Goodmorning.</p>
    <p>Shall we start with a story?</p>
    <a href="/lessons">lessons</a>
  </dialog> -->

  <dialog open>
    <!-- <form method="dialog">
      <button><img src="/icons/popup-close.svg" alt="close-button"></button>
    </form> -->
    <div class="popup">
      <div class="heading-close">
        <p>Goodmorning,</p>
        <form method="dialog">
          <button><img src="/icons/popup-close.svg" alt="close-button"></button>
        </form>
      </div>
        <p>Shall we start with a story?</p> 
        <a href="/lessons">Let's do it!</a>
    </div>
  </dialog>


<style>
.heading-close{
  width: 100%;
  display: flex;
}
form{
  margin-left: auto;
}
dialog{
    border: none;
    border-radius: .75rem;
    margin: 0; /* `margin: auto;` is the default. */
    transform: translateX(-50%);
    left: 50%;
}
button{
  margin-left: auto;
  padding: .2em;
  border: none;
  background-color: transparent;
}
.popup{
    display: flex;
    flex-direction: column;
    background-color: white;
    color: black;
    height: 5rem;
    width: 60dvw;
    border-radius: .75rem;
    padding: .5rem;
}
.popup > a{
    background-color: #954BE2;
    color: white;
    width: 95%;
    /* height: 100%; */
    border-radius: 5px;
    /* padding: 5px; */
    text-align: center;
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
    width: 55dvw;
  }
}

</style>