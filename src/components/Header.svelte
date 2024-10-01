<script>
    import { goto } from '$app/navigation';
    import Sidebar from './Sidebar.svelte';
    let showSidebar = false;
    export let isLoggedIn = true;
    const toggleSidebar = () => {
    showSidebar = !showSidebar;
  };
</script>

<header class="flex flex-col relative z-5">
    <div class="max-w-[1400px] mx-auto w-full flex items-center justify-between p-4 py-6">
        <a href="/">
            <h1 class="text-indigo-400 font-bold text-3xl z-5">Olley<span class="text-blue-400">.com</span></h1>
        </a>
        <button on:click={toggleSidebar} class="md:hidden grid place-items-center">
            <i class="fa-solid fa-bars"></i>
        </button>
            <nav class="hidden md:flex items-center gap-4 lg:gap-6">
                <a href="#About" class="duration-200 hover:text-indigo-400 cursor-pointer">About The Developers</a>
                <a href="#Reviews" class="duration-200 hover:text-indigo-400 cursor-pointer">Reviews</a>
                <a href="#FAQs" class="duration-200 hover:text-indigo-400 cursor-pointer">FAQs</a>
                {#if isLoggedIn}
                    <button on:click={() => goto('/login')} class="logInButton mx-auto duration-200cursor-pointer">
                        <p>Log Out</p>
                    </button>
                {:else if !isLoggedIn}
                    <button on:click={() => goto('/login')} class="logInButton mx-auto duration-200cursor-pointer">
                        <p>Log In</p>
                    </button>
                {/if}
    </div>

</header>

<Sidebar {showSidebar} isLoggedIn={isLoggedIn}/>
