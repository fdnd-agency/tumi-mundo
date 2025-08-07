<script>
  import { FormHeading , SignUpForm} from '$lib/index.js'
  export let form
</script>

<main>
  <FormHeading />
  <SignUpForm {form} />
</main>

<style>

main {
  padding: var(--space-md);
  max-width: 31.25em;
  margin: 0 auto;
}

</style>