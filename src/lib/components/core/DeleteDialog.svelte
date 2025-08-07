<script>
  import { DeleteSVG } from '$lib/index';
  export let playlistId;
  export let onDelete;
</script>

<dialog id="delete">
  <div class="delete-content">
    <h2 class="black-text">Delete this playlist?</h2>
    <p class="black-text">
      It will be permanently removed from your profile, and you won't be able to recover it.
    </p>

    <div class="popup-btns">
      <a href="#cancelled" class="black-text cancel-btn">Cancel</a>
      <form method="POST" action={`/lessons/delete/${playlistId}`} on:submit|preventDefault={onDelete}>
        <button type="submit" class="delete-btn">Delete <DeleteSVG /></button>
      </form>
    </div>
  </div>
</dialog>

<style>

dialog{
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 110vh;
  border: none;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 9999;
}

.delete-content{
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: #fff;
  max-width: 25em;
  width: 90%;
  position: fixed;
  top: 50%;
  left: 50%;
  height: 14em;
  overflow: hidden;
  border: none;
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 1em;
  padding-left: 1.5em
}

.delete-content > h2{
  margin-bottom: 1em;
}

.popup-btns{
  margin-top: auto;
  margin-left: auto;
  display: flex;
}

.black-text{
  color: black;
}

dialog:target {
  opacity: 1;
  visibility: visible;
}

dialog:target .delete-content {
  opacity: 1;
}

.cancel-btn, .delete-btn{
  padding: .5em .7em .5em .7em;
  border-radius: var(--border-radius);
  font-weight: var(--font-weight-normal);
}

.cancel-btn{
  border: 1px solid black;
}

.delete-btn{
  margin-left: .5em;
  background-color: #D51D1D;
  color: var(--color-white);
  display: flex;
  align-items: center;
  gap: .3em;
  font-size: 1em;
  border: none;
}

.delete-btn:hover{
  cursor: pointer;
}

.popup-btns a {
  display: flex;
  align-items: center;
}

/* test */

dialog {
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 110vh;
  border: none;
  z-index: 9999;
}
.delete-content {
  background-color: #fff;
  max-width: 25em;
  width: 90%;
  height: 14em;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: var(--border-radius);
  padding: 1em 1.5em;
  display: flex;
  flex-direction: column;
  text-align: left;
}
.popup-btns {
  margin-top: auto;
  margin-left: auto;
  display: flex;
}
.black-text {
  color: black;
}
dialog:target {
  opacity: 1;
  visibility: visible;
}
.cancel-btn, .delete-btn {
  padding: .5em .7em;
  border-radius: var(--border-radius);
  font-weight: var(--font-weight-normal);
}
.cancel-btn {
  border: 1px solid black;
}
.delete-btn {
  margin-left: .5em;
  background-color: #D51D1D;
  display: flex;
  align-items: center;
  gap: .3em;
  border: none;
  font-size: 1em;
  cursor: pointer;
}


</style>