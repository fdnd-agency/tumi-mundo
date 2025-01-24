<script>
import { Input } from '$lib/index';

</script>

<title>sign-up</title>
<main>
    <section>
        <div class="heading">
            <a href="/onboarding">
                <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3398 0.554956C14.0797 1.2949 14.0797 2.49458 13.3398 3.23452L4.5743 12L13.3398 20.7655C14.0797 21.5054 14.0797 22.7051 13.3398 23.445C12.5998 24.185 11.4002 24.185 10.6602 23.445L0.554955 13.3398C-0.184985 12.5998 -0.184985 11.4002 0.554955 10.6602L10.6602 0.554956C11.4002 -0.184985 12.5998 -0.184985 13.3398 0.554956Z" fill="black"/>
                </svg>                    
            </a>
            <h1>Sign up</h1> 
        </div>
    
        <form action="/profile-selection">
                <Input type="text"/>
                <Input type="email"/>
                <Input type="password"/>

            <article>
                <div>
                    <label class="switch">
                        <input type="checkbox" aria-label="toggle-button">
                        <span class="slider round"></span>
                    </label>

                    <p>Agree to the terms of services and the privacy policy <a href="/click" class="click-here">(click here for more information)</a></p>
                </div>
        
                <div>
                    <label class="switch">
                        <input type="checkbox" aria-label="toggle-button">
                        <span class="slider round"></span>
                    </label>

                    <p>Agree to share data with research universities and participate in research <a href="/" class="click-here">(click here for more information)</a></p>
                </div>
            </article>

            <input type="submit" value="Sign up!" class="sign-upbtn">
        </form>
    </section>
</main>


<style>
*{
    padding: 0;
    margin: 0;
}
section, form, main{
    display: flex;
    flex-direction: column;
}
main{
    align-items: center;
}
section {
    padding: 1.25em;
    max-width: 30em ;
    height: 100dvh; 
}
form {
    flex-grow: 1;
}
.heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    height: 5em;
    margin-bottom: 1.8em;
    margin-top: .6em;
}

.heading h1 {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    font-size: 1.5rem;
}

.heading a {
    text-decoration: none;
    margin-left: 0; 
    display: flex; 
    align-items: center;
}

label{
    font-size: 1.25em;
}                                                                                
p{
    max-width: 40ch;
}

input{
    padding: 1rem;
    background-color: #EEEEEE;
    border: none;
    border-radius: .6em;
    margin-bottom: 1.25em ;
    font-size: 1em;
}
label{
    margin-bottom: .6em;
}
div{
    display: flex;
    flex-direction: row;
    margin-bottom: 1.25em;
}

/* Styling for toggle button */
.switch {
  position: relative;
  display: inline-block;
  width: 5em;
  height: 1.25em;
  margin-right: .6em;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 2em;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 1em;
  width: 1em;
  left: 2px;
  bottom: 3px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}
input:checked + .slider {
  background-color: #2196F3;
}
input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}
input:checked + .slider:before {
  -webkit-transform: translateX(1.25em);
  -ms-transform: translateX(1.25em);
  transform: translateX(1.25em);
}
.slider.round {
  border-radius: 1em;
}
.slider.round:before {
  border-radius: 50%;
}
.sign-upbtn{
    align-self: center;
    bottom: 0;
    border-radius: .6em;
    width: 95%;
    background-color: #3D7A95;
    padding: .6em;
    text-align: center;
    font-size: 1em;
    color: white;
    text-decoration: none; 
    margin-top: auto;  
    margin-bottom: 3.75em;
}
.click-here{
    color: #599AE7;
}

</style>
