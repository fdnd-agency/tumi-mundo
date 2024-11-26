<main>
    <section>
        <h1>Tumi Mundo</h1>
        <p>Your language learning app</p>

        <div class="buttons">
            <button>Log in</button>
            <button>New to Tumi Mundo? Sign up!</button>
            <a href="/log-in">I dont remember my password/username</a>
        </div>
    </section>

</main>



<style>

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
}
main, section, .buttons{
    display: flex;
    flex-direction: column;
}
section, .buttons{
    align-items: center;
}
main{
    /* background: linear-gradient(to bottom, #3F93B7, #1C5872); */
    background-image: url(log-in-bg.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
    height: 100vh;
    width: 100%;
    color: white;
    font-family: Poppins;
}
section{
    flex-grow: 1; /* Zorgt ervoor dat de sectie de resterende ruimte opvult */
    justify-content: start;
}
h1{
    margin-top: 45%;
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: .5rem;
}
p, button{
    font-size: 16px;
}
.buttons{
    margin-top: auto;
    gap: 10px;
    margin-bottom: 60px;
    width: 100%;
}
button{
    border: 1px solid white;
    border-radius: 10px;
    padding: .8rem;
    width: 70%;
    background-color: #378DB3;
    color: white;
}
button:nth-of-type(2){
    background-color: #F0F0F0;
    color: #535353;
    padding: .8rem 1rem .8rem 1rem;
}
a{
    color: #378EB4;
    text-decoration: underline;
    width: 100%;
    text-align: center;
}
</style>