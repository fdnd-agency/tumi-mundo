<script>
   // Standard data
  export let title = "Goodmorning,";
  export let message = "Shall we start with a story?";
</script>

<dialog open>
  <div class="popup">
      <div class="heading-close">
          <p>{title}</p>
          <form method="dialog">
              <button>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.375 14.375L5.625 5.625" stroke="#3E0D0D" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14.375 5.625L5.625 14.375" stroke="#3E0D0D" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
          </form>
      </div>
      <p class="popup-message">{message}</p>
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
  height: 5.3em;
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
  width: 100%;
  border-radius: .25em;
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