<script>
  export let onOpenPopup;
</script>

<section>
  <h1>Tumi Mundo</h1>
  <p>Your language learning app</p>

  <div class="buttons">
    <label class="popup-button" for="login-popup" on:click={onOpenPopup}>Log in</label>
    <a href="/onboarding" class="sign-up">New to Tumi Mundo? Sign up!</a>
    <a href="/log-in">I don't remember my password/username</a>
  </div>
</section>

<style>

  section {
    padding: 0 var(--padding-large);
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }

  h1 {
    margin-top: 10rem;
    font-size: 3.5em;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: var(--font-size-md);
  }

  h1, p{
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4); 
  }

  .buttons {
    margin-top: auto;
    gap: var(--gap-medium);
    margin-bottom: 3.75em;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .popup-button,
  .sign-up,
  button {
    text-decoration: none;
    border: 1px solid var(--color-white);
    border-radius: .6em;
    padding: .8rem;
    width: 100%;
    max-width: 17rem;
    background-color: var(--color-login-bg);
    color: var(--color-white);
    text-align: center;
    cursor: pointer;
  }

  .popup-button:hover{
    background-color:var(--color-login-bg-hover) ;
  }

  .sign-up {
    background-color: #F0F0F0;
    color: hsla(0, 0%, 33%, 1);
  }

  a {
    color: var(--color-link);
    text-decoration: underline;
    max-width: 22rem;
    text-align: center;
  }
</style>
