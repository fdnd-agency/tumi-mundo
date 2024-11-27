<main>
    <div class="top-bar">
        <h1>Select account</h1>
        <a href="" class="edit-button">
            <img src="/icons/edit-icon.svg" alt="Edit icon" />
            <p>Edit</p>
        </a>
    </div>
    <ul>
        <li>
            <a href="">
                <img src="/temp/profile-test.png" alt="Daan">
                <h3>Daan</h3>
            </a>
        </li>
        <li>
            <a href="">
                <img src="/temp/profile-test2.png" alt="Daan">
                <h3>Sarah</h3>
            </a>
        </li>
        <li>
            <a href="">
                <img src="/icons/add-button.svg" alt="Add profile">
                <h3>Add profile</h3>
            </a>
        </li>
    </ul>
</main>

<style>
    /* Background styling */
    main {
        background: linear-gradient(to bottom, #3A9ECA, #2B627A);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: bottom;
        height: 100vh;
        color: white;
        margin: auto;
        padding: 1em;
        padding-top: 3em;
    }

    /* Top bar styling */
    .top-bar {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 0 1em;
    }

    .top-bar h1 {
        flex-grow: 1;
        text-align: center;
        font-size: 1.5em;
    }

    .edit-button {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 0.2em;
    }

    .edit-button img {
        width: 1.5em;
        height: 1.5em;
    }

    .edit-button p {
        font-size: 0.9em;
        margin: 0;
    }

    /* Profiles styling */
    ul {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        grid-row-gap: 5em;
        list-style: none;
        padding: 0;
        margin: 2em 0;
    }

    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 0.5em;
    }

    li a img {
        width: 6.5em;
        height: 6.5em;
        border-radius: 50%;
    }

    /* General styling */

    h1 {
        font-size: 1.25em;
        text-align: center;
        margin-bottom: 1em;
    }

    h3 {
        font-size: 1em;
    }
</style>
