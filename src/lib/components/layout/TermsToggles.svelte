<script>
  export let form;
</script>

<article>
  {#if form?.errors?.terms}
    <div class="terms-error">{form.errors.terms}</div>
  {/if}

  <div class="toggle-row">
    <label class="switch {form?.errors?.terms ? 'is-invalid' : ''}">
      <input 
        type="checkbox" 
        aria-label="toggle-button"
        name="terms"
        checked={form?.values?.terms}
      >
      <span class="slider round"></span>
    </label>
    <p>Agree to the terms of services and the privacy policy <a href="/click" class="click-here">(click here for more information)</a>*</p>
  </div>

  <div class="toggle-row">
    <label class="switch">
      <input type="checkbox" aria-label="toggle-button">
      <span class="slider round"></span>
    </label>
    <p>Agree to share data with research universities and participate in research <a href="/" class="click-here">(click here for more information)</a></p>
  </div>
</article>

<style>
.terms-error {
  color: #d32f2f;
  margin-bottom: 0.4em; 
  margin-top: 0.5em;
}

.toggle-row {
  position: relative;
  margin-bottom: 1.25em;
  display: flex;
  align-items: center;
  gap: 1em;
}

.toggle-row p {
  margin: 0;
  margin-left: 1em;
  line-height: 1.4;
  max-width: 40ch;
}

.switch {
  display: inline-block;
  width: 5em;
  height: 1.25em;
  margin-right: .6em;
  display: inline-block;
  width: 3em;
  height: 1.5em;
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
  width: 2.5em;
  height: 1.4em;
  background-color: grey;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1em;
  width: 1em;
  left: 2px;
  bottom: 4px;
  background-color: var(--color-white);
  transition: .4s;
}

input:checked + .slider {
  background-color: hsla(217, 91%, 60%, 1);
}

input:focus + .slider {
  box-shadow: 0 0 1px hsla(217, 91%, 60%, 1);
}

input:checked + .slider:before {
  transform: translateX(1.2em);
}

.slider.round {
  border-radius: 1em;
}

.slider.round:before {
  border-radius: 50%;
}

.click-here {
  color: hsla(217, 75%, 65%, 1);
}
</style>
