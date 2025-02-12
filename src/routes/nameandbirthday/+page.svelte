<script>
    import { Button } from '$lib/index';

//   import ContinueBtn from "../../lib/components/forms/continue-btn.svelte";

</script>

<main>
    <section class="container">
        <header>
            <div class="heading">
                <a href="/sign-up">back</a><!-- Implement "<Back/>" svg/component after merging> -->
                <h1>Name and birthday</h1>
            </div>
        </header>
        <p>For the accuracy of the pace of the method, please enter the birthday of your child. Enter the name to create a personal profile.</p>

        <section class="name">
            <h2>What's your childs name?</h2>
            <input type="text" placeholder="Your child's name">
        </section>

        <section class="birthdate">
            <h2>What's their date of birth?</h2>
            <input type="date">
        </section>

        <Button type="submit"/> <!-- Implement "<ContinueBtn/>" svg/component after merging> -->

    </section>

    <div class="white-border"></div>
</main>

<style>
.white-border{
    bottom: 0;
    position: absolute;
    width: 100vw;
  height: 200px;
  background: white;
}
.name, .birthdate{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
}
.name{
    margin-top: 2em;
}
*{
    color: var(--color-white);
}
main{
    background-image: var(--bg-image-blue);
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.container{
    margin-top: 3em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1em;
    max-width: 31.25em;
}
header{
    width: 100%;
}
.heading {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4em
}
.heading a {
    position: absolute;
    left: 0;
    text-decoration: none;
}
input{
    color: black;
    padding: 1.1em;
    border-radius: var(--border-radius);
    border: none;
}
.name > input{
    width: 100%;
    margin-bottom: 3em;
}
h2{
    font-size: 1em;
    font-weight: 100;
    margin-bottom: .3em;
}
p{
    font-weight: 100;
    max-width: 30em;
    padding: 1em 1em 0 1em;
}

</style>