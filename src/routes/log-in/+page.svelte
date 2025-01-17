<script>
    export let data;

    import Input from '../../components/forms/input.svelte';
    import { userState } from '$lib/account';
    import { goto } from '$app/navigation';

    let users = data.users;
    let email = '';
    let password = '';
    let errorMessage = '';

    async function handleLogin(event) {
        event.preventDefault();

        if (!email || !password) {
            errorMessage = 'Please fill out both fields.';
            return;
        }

        const user = users.find((user) => user.email === email && user.password === password);

        if (user) {
            userState.set({ userId: user.id, profileId: null });
            
            await goto('/profile-selection');
        } else {
            errorMessage = 'Invalid email or password.';
        }
    }
</script>

<main>
    <section>
        <h1>Tumi Mundo</h1>
        <p>Your language learning app</p>

        <div class="buttons">
            <label class="popup-button" for="login-popup">Login</label>
            <a href="/onboarding" class="sign-up">New to Tumi Mundo? Sign up!</a>
            <a href="/log-in">I don't remember my password/username</a>
        </div>
    </section>

    <div class="popup-container">
        <input type="checkbox" id="login-popup">
        <div class="popup">
            <label for="login-popup" class="transparent-label"></label>
            <div class="popup-inner">
                <div class="popup-title">
                    <h2>Log in</h2>
                    <div class="close-div">
                        <svg width="15" height="15" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.49997 24.125L24.1248 2.50024" stroke="#282828" stroke-width="4.58731" stroke-linecap="round"/>
                            <path d="M2.49997 2.49997L24.1248 24.1248" stroke="#282828" stroke-width="4.58731" stroke-linecap="round"/>
                        </svg>
                        <label for="login-popup" class="popup-close-btn">Close</label>
                    </div>
                </div>
                <div class="popup-content">
                    <form on:submit|preventDefault={handleLogin}>
                        <ul>
                            <li><Input type="email" name="email-input" placeholder="Email" bind:value={email} /></li>
                            <li><Input type="password" name="password-input" placeholder="Password" bind:value={password} /></li>
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
</main>


<style>

:root {
    --color-primary: #378DB3;
    --color-primary-hover: #2a6d91;
    --color-secondary: #F0F0F0;
    --color-secondary-text: #535353;
    --color-text: white;
    --color-link: #378EB4;
    --color-bg-light: #EEEEEE;
    --color-popup-bg: rgba(0, 0, 0, 0.7);

    --font-family: 'Poppins', sans-serif;
    --font-size-base: 16px;
    --font-size-heading: 3rem;
    --font-size-popup-title: 20px;

    --border-radius: 10px;
    --border-color: white;

    --padding-small: 0.8rem;
    --padding-medium: 1rem;
    --padding-large: 2rem;

    --gap-small: 5px;
    --gap-medium: 10px;

    --popup-width: 400px;
    --popup-height: 500px;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
}

section {
    padding: 0 var(--padding-large);
}

main, section, .buttons {
    display: flex;
    flex-direction: column;
}

section, .buttons {
    align-items: center;
}

main {
    background: url(/log-in-bg.svg), linear-gradient(to bottom, #3F93B7, #1C5872);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    height: 100vh;
    height: 100dvh; /* for dynamic viewport height */
    width: 100%;
    color: var(--color-text);
    font-family: var(--font-family);
}

section {
    flex-grow: 1;
    justify-content: start;
}

h1 {
    margin-top: 10rem;
    font-size: var(--font-size-heading);
    font-weight: bold;
    margin-bottom: 0.5rem;
}

p, button, label {
    font-size: var(--font-size-base);
}

.buttons {
    margin-top: auto;
    gap: var(--gap-medium);
    margin-bottom: 60px;
    width: 100%;
}

button, .popup-button, .login-popup, .sign-up {
    text-decoration: none;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    padding: var(--padding-small);
    max-width: 17rem;
    background-color: var(--color-primary);
    color: var(--color-text);
    text-align: center;
    cursor: pointer;
    margin: auto;
    display: block;
}

.popup-button {
    width: 100%;
}

button, .sign-up {
    background-color: var(--color-secondary);
    color: var(--color-secondary-text);
    padding: var(--padding-small) var(--padding-medium);
}

button:hover, .popup-button:hover {
    background-color: var(--color-primary-hover);
}

a {
    color: var(--color-link);
    text-decoration: underline;
    max-width: 22rem;
    text-align: center;
}

.popup-title {
    display: flex;
    align-items: center; 
    justify-content: space-between; 
    position: relative; 
}

.popup-title h2 {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: var(--font-size-popup-title);
}

.close-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--gap-small);
    margin-left: auto;
}

.close-div svg {
    cursor: pointer;
    margin-right: -10px;
}

.close-div label {
    cursor: pointer;
    font-size: 14px;
    color: #333;
    margin-right: -10px;
}

h2 {
    margin: auto;
}

h2, label {
    color: black;
}

input {
    padding: var(--padding-medium);
    background-color: var(--color-bg-light);
    border: none;
    border-radius: 30px;
    margin-bottom: 20px;
    font-size: var(--font-size-base);
    height: 3rem;
}

label {
    margin-bottom: var(--gap-medium);
    max-width: 20rem;
}

.popup-container {
    display: inline-block;
}

.popup-container .popup {
    position: fixed;
    top: 0;
    width: 100%;
    height: 150%;
    background: var(--color-popup-bg);
    z-index: 10;
    opacity: 0;
    visibility: hidden;
    transition: 250ms all;
}

.popup-container .popup .popup-inner {
    height: var(--popup-height);
    width: var(--popup-width);
    box-sizing: border-box;
    border-radius: 20px;
    padding: 20px;
    background: #fff;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 150%;
    transition: 250ms all;
}

.popup-container .popup .popup-inner .popup-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.popup-container > input {
    display: none;
}

.popup-container > input:checked + .popup {
    opacity: 1;
    visibility: visible;
}

.popup-container > input:checked + .popup .popup-inner {
    top: 50%;
}

.error-message {
    color: red;
    font-size: 14px;
    margin-top: 10px;
    text-align: center;
}
</style>    