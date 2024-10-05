<script>
    import { goto } from '$app/navigation';
    import { clearUser } from '$lib/userStore.js';
    export let showSidebar = false;
    export let isLoggedIn;
</script>
  
<div
    class="fixed top-0 right-0 w-64 h-full bg-white text-black transform transition-transform duration-300 z-20"
    style="transform: translateX({showSidebar ? '0' : '100%'})"
  >
<nav class="flex flex-col items-start gap-4 p-4">
      <a href="#about">About The Developers</a>
      <a href="#reviews">Reviews</a>
      <button><a href="#FAQs">FAQs</a></button>
      {#if isLoggedIn}
        <button on:click={() =>{ 
          goto('/login');
          console.log('logout button clicked');
          clearUser();
          console.log('')
          }} class="logInButton mx-auto duration-200cursor-pointer">
          <p>Log Out</p>
        </button>
      {:else if !isLoggedIn}
          <button class="logInButton mx-auto duration-200 cursor-pointer" 
          on:click={() => goto('/login')}>
          <p>Log In</p>
          </button>
      {/if}
    </nav>
</div>
  
{#if showSidebar}
  <div
    class="fixed inset-0 bg-gray-900 opacity-50 z-10"
    on:click={() => showSidebar = false}
  ></div>
  {/if}
  
