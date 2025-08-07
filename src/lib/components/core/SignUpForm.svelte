<script>
  import { Input, PasswordInput, TermsToggles } from '$lib/index.js'
  export let form;
</script>

<form method="POST" action="/sign-up" class="signup-form">
  <Input 
    inputClass={form?.errors?.name ? 'is-invalid' : ''}
    type="text" 
    name="name" 
    placeholder="Enter your full name"
    value={form?.values?.name ?? ''}
  />
  {#if form?.errors?.name}
    <div class="field-error">{form.errors.name}</div>
  {/if}

  <Input 
    inputClass={form?.errors?.email ? 'is-invalid' : ''}
    type="email" 
    name="email" 
    placeholder="email@example.com"
    value={form?.values?.email ?? ''}
  />
  {#if form?.errors?.email}
    <div class="field-error">{form.errors.email}</div>
  {/if}

  <PasswordInput {form} />

  <Input 
    inputClass={form?.errors?.passwordConfirm ? 'is-invalid' : ''}
    type="password" 
    name="passwordConfirm" 
    placeholder="Confirm your password"
    label="Confirm password"
  />
  {#if form?.errors?.passwordConfirm}
    <div class="field-error">{form.errors.passwordConfirm}</div>
  {/if}

  <TermsToggles {form} />

  <input type="submit" value="Sign up!" class="sign-upbtn">
</form>

<style>
    
.signup-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.field-error {
  color: #d32f2f;
  margin-top: -0.8em;
  margin-bottom: 0.8em;
  font-size: 0.875em;
}

.sign-upbtn {
  align-self: center;
  border-radius: .6em;
  width: 95%;
  background-color: hsla(198, 43%, 41%, 1);
  padding: .6em;
  text-align: center;
  font-size: 1em;
  color: var(--color-white);
  margin-top: auto;  
  margin-bottom: 3.75em;
  cursor: pointer;
  border: none;
}

.sign-upbtn:hover {
  background-color: var(--color-login-bg-hover);
}

</style>

