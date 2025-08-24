<script>
    import { LoginPopup, LoginIntro } from '$lib/index'
    export let data
</script>

<div>
  <LoginIntro />
  <LoginPopup users={data.users} />
</div>

<style>
  div {
    background: url(/log-in-background.png), var(--bg-image-blue);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    height: 100dvh;
    width: 100%;
    color: var(--color-text);
    display: flex;
    flex-direction: column;
  }
</style>
