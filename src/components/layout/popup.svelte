<div class="popup">
    <p>Goodmorning.</p>
    <p>Shall we start with a story?</p> 
    <a href="/lessons">Let's do it!</a>
</div>

<style>

.popup{
    display: flex;
    flex-direction: column;
    background-color: white;
    color: black;
    height: 11.5dvh;
    width: 55dvw;
    border-radius: .75rem;
    padding: .5rem;
    transform: translateX(-2.5rem);
}
.popup > p:nth-of-type(2){
    padding-bottom: 1rem;
}
.popup > a{
    background-color: #954BE2;
    color: white;
    width: 95%;
    border-radius: 5px;
    padding: 5px;
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
}

</style>