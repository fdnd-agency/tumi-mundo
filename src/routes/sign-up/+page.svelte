<script>
  import { FormHeading , SignUpForm} from '$lib/index.js'
  export let form
</script>

<div>
  <FormHeading />
  <SignUpForm {form} />
</div>

<style>

div {
  padding: var(--space-md);
  max-width: 31.25em;
  margin: 0 auto;
}

</style>