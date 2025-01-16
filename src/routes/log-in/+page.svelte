<script>
    import Input from '../../components/forms/input.svelte';
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
                            <img src="/icons/menu-close.svg" height="1em" width="0.9375em" alt="close button">
                            <label for="login-popup" class="popup-close-btn">Close</label>
                        </div>
                    </div>
                    <div class="popup-content">
                        <form action="/profile-selection">
                            <ul>
                                <li><Input type="email" /></li>
                                <li><Input type="password" /></li>
                                <li><button type="submit" class="login-popup">Log in</button></li>
                                <li><a href="/">I don't remember my password/username</a></li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
    
    <style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
    }
    section {
        padding: 0 2em;
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
        color: white;
        font-family: Poppins, sans-serif;
    }
    
    section {
        flex-grow: 1;
        justify-content: start;
    }
    
    h1 {
        margin-top: 4em;
        font-size: 3em;
        font-weight: bold;
        margin-bottom: 0.5em;
    }
    
    p, button, label {
        font-size: 1em;
    }
    
    .buttons {
        margin-top: auto;
        gap: 0.625em;
        margin-bottom: 3.75em;
        width: 100%;
    }
    
    button, .popup-button, .login-popup, .sign-up {
        text-decoration: none;
        border: 0.0625em solid white;
        border-radius: 0.625em;
        padding: 0.8em;
        max-width: 17em;
        background-color: #378DB3;
        color: white;
        text-align: center;
        cursor: pointer;
        margin: auto;
        display: block;
    }
    
    .popup-button {
        width: 100%;
    }
    
    button, .sign-up {
        text-decoration: none;
        background-color: #F0F0F0;
        color: #535353;
        padding: 0.8em 1em;
    }
    
    button:hover, .popup-button:hover {
        background-color: #2a6d91;
    }
    
    a {
        color: #378EB4;
        text-decoration: underline;
        max-width: 22em;
        text-align: center;
    }
    
    /* Styling for popup heading */
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
        font-size: 1.25em;
    }
    
    .close-div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.3125em;
        margin-left: auto;
    }
    
    .close-div img, label {
        cursor: pointer;
    }
    
    .close-div img {
        margin-right: -0.625em;
    }
    
    .close-div label {
        font-size: 0.875em;
        color: #333;
        margin-right: -0.625em;
    }
    
    h2 {
        margin: auto;
    }
    
    h2, label {
        color: black;
    }
    
    input {
        padding: 1em;
        background-color: #EEEEEE;
        border: none;
        border-radius: 1.875em;
        margin-bottom: 1.25em;
        font-size: 1em;
        height: 3em;
    }
    
    label {
        margin-bottom: 0.625em;
        max-width: 20em;
    }
    
    /* Styling for popup */
    .popup-container {
        display: inline-block;
    }
    
    .popup-container .popup {
        position: fixed;
        top: 15%;
        top: 0;
        width: 100%;
        height: 150%;
        background: rgba(0, 0, 0, 0.7);
        z-index: 10;
        opacity: 0;
        visibility: hidden;
        transition: 250ms all;
    }
    
    .popup-container .popup .popup-inner {
        height: 31.25em;
        width: 25em;
        box-sizing: border-box;
        border-radius: 1.25em;
        padding: 1.25em;
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
        margin-bottom: 1.25em;
    }
    
    .popup-container .popup .popup-inner .popup-content ul li {
        margin-bottom: 0.625em;
    }
    
    .popup-container .popup .popup-inner .popup-content ul li:last-child {
        margin-bottom: 0;
    }
    
    .popup-container .popup .popup-inner .popup-content ul li input {
        width: 100%;
        border: 0.0625em solid #ddd;
        border-radius: 0.1875em;
        line-height: 2.125em;
        padding: 0 0.9375em;
        font-size: 0.875em;
        box-sizing: border-box;
    }
    
    .popup-container .popup .transparent-label {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        cursor: pointer;
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
    </style>
    