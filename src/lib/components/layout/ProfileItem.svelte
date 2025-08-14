<script>
	export let profile;
</script>

<button>
	<img src={profile.avatar} alt="Profile avatar of {profile.name_of_child}" />
	<h2>{profile.name_of_child}</h2>
</button>

<style>
button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.5em;
}

button img {
    width: 6.5em;
    height: 6.5em;
    border-radius: 50%;
    object-fit: cover;
}

h2 {
    font-size: 1em;
}
</style>
