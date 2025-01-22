<script>
import { Input } from '$lib/index';

</script>

<title>sign-up</title>
<main>
    <section>
        <div class="heading">
            <a href="/onboarding"><img src="/icons/back-button.svg" alt="back button"></a>
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
    padding: 20px;
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
    height: 80px;
    margin-bottom: 30px;
    margin-top: 10px;
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
    font-size: 20px;
}                                                                                
p{
    font-size: 16px;
    max-width: 40ch;
}

input{
    padding: 1rem;
    background-color: #EEEEEE;
    border: none;
    border-radius: 10px;
    margin-bottom: 20px ;
    font-size: 16px;
}
label{
    margin-bottom: 10px;
}
div{
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
}

/* Styling for toggle button */
.switch {
  position: relative;
  display: inline-block;
  width: 80px;
  height: 20px;
  margin-right: 10px;
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
  height: 15px;
  width: 15px;
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
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(20px);
  transform: translateX(20px);
}
.slider.round {
  border-radius: 17px;
}
.slider.round:before {
  border-radius: 50%;
}
.sign-upbtn{
    align-self: center;
    bottom: 0;
    border-radius: 10px;
    width: 95%;
    background-color: #3D7A95;
    padding: 10px;
    text-align: center;
    font-size: 16px;
    color: white;
    text-decoration: none; 
    margin-top: auto;  
    margin-bottom: 60px;
}
.click-here{
    color: #599AE7;
}

</style>
