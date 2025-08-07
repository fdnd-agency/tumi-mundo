<script>
  import { Input } from '$lib/index';
  export let form;
  let password = '';
  let showPassword = false;
  let showCriteria = false;

  const criteria = [
    { label: 'A lowercase letter', test: pw => /[a-z]/.test(pw) },
    { label: 'An uppercase letter', test: pw => /[A-Z]/.test(pw) },
    { label: 'A number', test: pw => /\d/.test(pw) },
    { label: 'Minimum 8 characters', test: pw => pw.length >= 8 }
  ];
</script>

<div class="password-field-wrapper">
  <Input
    bind:value={password}
    inputClass={form?.errors?.password ? 'is-invalid' : ''}
    type={showPassword ? 'text' : 'password'}
    name="password"
    placeholder="Enter your password"
    label="Password" 
    on:focus={() => showCriteria = true}
    on:blur={() => showCriteria = false}
  />

  <button
    type="button"
    class="toggle-password-btn"
    aria-label={showPassword ? "Hide password" : "Show password"}
    on:click={() => showPassword = !showPassword}
  >
    {#if showPassword}
      <!-- Open eye -->
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="#444" stroke-width="2" d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z"/>
        <circle cx="12" cy="12" r="3" stroke="#444" stroke-width="2"/>
      </svg>
    {:else}
      <!-- Closed eye -->
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="#444" stroke-width="2" d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z"/>
        <circle cx="12" cy="12" r="3" stroke="#444" stroke-width="2"/>
        <line x1="4" y1="20" x2="20" y2="4" stroke="#444" stroke-width="2"/>
      </svg>
    {/if}
  </button>
</div>

{#if form?.errors?.password}
  <div class="field-error">{form.errors.password}</div>
{/if}

{#if showCriteria || password.length > 0}
  <div class="password-criteria">
    <h3>Password must contain the following:</h3>
    <ul>
      {#each criteria as item}
        <li class={item.test(password) ? 'valid' : 'invalid'}>
          {#if item.test(password)}
            <!-- Check icon -->
            <svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27 9L13 23L6 16" stroke="#2ecc40" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          {:else}
            <!-- Cross icon -->
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6L14 14M14 6L6 14" stroke="#d32f2f" stroke-width="3" stroke-linecap="round"/>
            </svg>
          {/if}
          {item.label}
        </li>
      {/each}
    </ul>
  </div>
{/if}

<style>
.password-field-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
}
.toggle-password-btn {
  position: absolute;
  right: 1em;
  top: 2.7em;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}
.password-field-wrapper .toggle-password-btn {
  position: absolute;
  top: 50%;
  right: 1rem;
  border: none;
}

.field-error {
  color: #d32f2f;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}
.password-criteria {
  background: #f7fafd;
  border: 1px solid #e2e8f0;
  border-radius: 0.6em;
  padding: 1em;
  margin-top: 0.75em;
}
.password-criteria h3 {
  font-size: 1em;
  margin-bottom: 0.5em;
}
.password-criteria ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.password-criteria li {
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-bottom: 0.3em;
}
.password-criteria li.valid {
  color: #2ecc40;
  font-weight: 500;
}
.password-criteria li.invalid {
  color: #d32f2f;
  font-weight: 400;
}
</style>
