<script>
	import { Edit } from '$lib/index';
</script>

<section class="top-bar">
	<h1>Select account</h1>
	<button class="edit-button">
		<Edit />
		<p>Edit</p>
	</button>
</section>

<style>
.top-bar {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 1em;
}

.top-bar h1 {
    flex-grow: 1;
    text-align: center;
    font-size: 1.5em;
}

.edit-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.2em;
    border: none;
    background-color: transparent;
}

.edit-button p {
    font-size: 0.9em;
    margin: 0;
    color: var(--color-white);
}
</style>
