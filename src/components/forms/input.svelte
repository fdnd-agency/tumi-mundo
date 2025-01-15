<script>

export let type = 'text';

</script>

{#if type === 'email'}
  <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="Your email" aria-label="email">


{:else if type === 'password'}
  <label for="password">Password</label>
    <input type="password" id="password" name="password" placeholder="Password (atleast 8 characters)" aria-label="password">

{:else if type === 'text'}
    <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" aria-label="name">
{/if}

<style>

label{
  color: black;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 1.2rem;
}
input{
  background-color: #EEEEEE;
  border: none;
  margin-bottom: 20px ;
  font-size: 1rem;
  height: 2rem;
  width: 100%;
  border-radius: 8px;
  padding: 1.5rem 1rem;
  box-sizing: border-box;
}
</style>