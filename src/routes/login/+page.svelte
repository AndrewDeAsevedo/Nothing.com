<script>
  import { onMount } from 'svelte';
  import Header from "../../components/Header.svelte";
  import pb from '$lib/pocketbase.js';
  import { setUser, userStore } from '$lib/userStore.js';
  import { login } from '../../lib/pocketbase';

  let email = "";
  let password = "";

  onMount(async () => {
    console.log(userStore);
    console.log(pb.authStore.isValid); 
    if (pb.authStore.isValid) {
        console.log(pb.authStore.token); 
        console.log(pb.authStore.model.id); 
    }
  });

  // Handle login form submission
  const handleSubmit = async (event) => {
      event.preventDefault();

      try {
          login(email, password);
          console.log('Authentication successful');
          setUser({ email, password });
      } catch (error) {
          console.error('Authentication failed:', error);
      }
  };
</script>

<Header type='login'/>

<div class="border-4 mt-36 ml-4 mr-4 pb-10 border-blue-400 md:mx-56">
  <div class='Welcome message mt-5'>
      <h2 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-[1200px] mx-auto w-full text-center font-semibold text-blue-400">
          Welcome Back!
      </h2>
      <p class="text-xl sm:text-2xl md:text-3xl text-center max-w-[1000px] mx-auto w-full">
          <span class="text-purple-400"> Log into your account below </span>
      </p>
  </div>

  <div class='login-form'>
      <h2>Log In</h2>
      <form on:submit={handleSubmit}>
          <input type="email" bind:value={email} placeholder="Email" required />
          <input type="password" bind:value={password} placeholder="Password" required />
          <button type="submit">Log In</button>
      </form>
      <p>
          Forgot something? <a href="/register" style="color:blueviolet"> Click to reset password </a>
      </p>
  </div>
</div>

<style>
  .login-form {
      display: flex;
      flex-direction: column;
      max-width: 400px;
      margin: auto;
      padding: 1em;
      border-radius: 5px;
      background-color: #f9f9f9;
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
      margin-top: 5ch;
  }
  input, button {
      width: 100%;
      padding: 0.5em;
      margin: 0.5em 0;
      border-radius: 3px;
      border: 1px solid #ccc;
  }
</style>
