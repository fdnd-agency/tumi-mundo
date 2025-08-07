<script>
  import { Back } from '$lib/index';
</script>

<header class="form-header">
  <a href="/onboarding" aria-label="go back"><Back color="black" /></a>
  <h1>Sign up</h1>
</header>

<style>
.form-header {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-md);
  position: relative;
  height: 5em;
}
.form-header h1 {
  font-size: 1.5em;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
}
</style>
