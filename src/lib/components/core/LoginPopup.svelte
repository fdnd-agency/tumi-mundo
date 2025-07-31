<script>
  import { Input, Close, userState } from '$lib/index';
  import { goto } from '$app/navigation';

  export let users = [];
  let email = '';
  let password = '';
  let errorMessage = '';

  async function handleLogin() {
    if (!email || !password) {
      errorMessage = 'Please fill out both fields.';
      return;
    }

    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      userState.set({ userId: user.id, profileId: null });
      await goto('/profile-selection');
    } else {
      errorMessage = 'Invalid email or password.';
    }
  }
</script>

<div class="popup-container">
  <input type="checkbox" id="login-popup" />
  <div class="popup">
    <label for="login-popup" class="transparent-label"></label>
    <div class="popup-inner">
      <div class="popup-title">
        <h2>Log in</h2>
        <label for="login-popup" class="popup-close-btn close-div">
            <Close />Close
        </label>

      </div>

      <div class="popup-content">
        <form on:submit|preventDefault={handleLogin}>
          <ul>
            <li><Input type="email" placeholder="Email" bind:value={email} /></li>
            <li><Input type="password" placeholder="Password" bind:value={password} /></li>
            <li><button type="submit" class="login-popup">Log in</button></li>
            {#if errorMessage}
              <li class="error-message">{errorMessage}</li>
            {/if}
            <li><a href="/">I don't remember my password/username</a></li>
          </ul>
        </form>
      </div>
    </div>
  </div>
</div>

<style>

:root {
  --color-text: white;
  --color-link: #378EB4;
  --color-bg-light: var(--color-bg-light);
  --color-white: #fff;
  --color-popup-bg: rgba(0, 0, 0, 0.6);
  --color-login-bg: #378DB3;
  --color-login-bg-hover: #2a6d91;;

  --padding-small: 0.8rem;
  --padding-medium: 1rem;
  --padding-large: 2rem;

  --gap-small: 0.3em;
  --gap-medium: 0.6em;

  --popup-width: 25em;
  --popup-height: 31.25em;
}

input {
  width: 100%;
  height: 3rem;
  padding: var(--padding-medium);
  margin-bottom: 1.25em;
  background-color: var(--color-bg-light);
  border: none;
  border-radius: 1.875em;
  font-size: var(--font-size-md);
}

a {
  color: var(--color-link);
  text-decoration: underline;
  max-width: 22rem;
  text-align: center;
  display: inline-block;
}

/* Popup container & overlay */
.popup-container {
  display: inline-block;
}

.popup-container > input {
  display: none;
}

.popup {
  position: fixed;
  top: 0;
  width: 100%;
  height: 155%;
  background: var(--color-popup-bg);
  z-index: 10;
  opacity: 0;
  visibility: hidden;
  transition: 250ms all;
}

.popup-inner {
  position: absolute;
  top: 150%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: var(--popup-width);
  height: var(--popup-height);

  background: var(--color-white);
  border-radius: 1.25em;
  padding: 1.25em;
  box-sizing: border-box;

  transition: 0.25s all;
}

/* Active popup (checkbox checked) */
.popup-container > input:checked + .popup {
  opacity: 1;
  visibility: visible;
}

.popup-container > input:checked + .popup .popup-inner {
  top: 50%;
}

/* Popup title & close btn */
.popup-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: 1.25em;
}

.popup-title h2 {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  margin: 0 auto;
  text-align: center;
  font-size: var(--font-size-lg);
}

.close-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-small);

  margin-left: auto;
  margin-right: -0.6em;

  cursor: pointer;
  color: hsla(0, 0%, 20%, 1);
}

/* Popup content & form */
.popup-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.popup-content li:last-child {
  display: flex;
  justify-content: center;
  margin-top: 0.8em;
}

.popup-content li:last-child a {
  text-align: center;
}

/* Login button & error */
.login-popup {
  width: 100%;
  padding: 0.8rem;

  background-color: var(--color-login-bg);
  color: var(--color-white);
  border: 1px solid var(--color-white);
  border-radius: 0.6em;

  text-align: center;
  cursor: pointer;
  margin-bottom: 1em;
}

.login-popup:hover {
  background-color: var(--color-login-bg-hover);
}

.error-message {
  color: red;
  text-align: center;
}

</style>
