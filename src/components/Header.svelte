<script>
    import { goto } from '$app/navigation';
    import Sidebar from './Sidebar.svelte';
    import { clearUser, userStore } from '../lib/userStore.js';
    let showSidebar = false;
    export let isLoggedIn = userStore.isAuthenticated;
    export let type = '';
    const toggleSidebar = () => {
    showSidebar = !showSidebar;

    console.log(isLoggedIn);

  };
</script>

<header class="flex flex-col relative z-5">
    <div class="max-w-[1400px] mx-auto w-full flex items-center justify-between p-4 py-6">
        <a href="/">
            <h1 class="text-indigo-400 font-bold text-3xl z-5">Olley<span class="text-blue-400">.com</span></h1>
        </a>
        {#if type !== 'login'}
        <button on:click={toggleSidebar} class="md:hidden grid place-items-center">
            <i class="fa-solid fa-bars"></i>
        </button>
            <nav class="hidden md:flex items-center gap-4 lg:gap-6">
                <a href="#About" class="duration-200 hover:text-indigo-400 cursor-pointer">About The Developers</a>
                <a href="#Reviews" class="duration-200 hover:text-indigo-400 cursor-pointer">Reviews</a>
                <a href="#FAQs" class="duration-200 hover:text-indigo-400 cursor-pointer">FAQs</a>
                {#if isLoggedIn === true}
                    <button on:click={() =>{ 
                        goto('/login');
                        console.log('logout button clicked');
                        clearUser();
                        }} class="logInButton mx-auto duration-200curso``r-pointer">
                        <p>Log Out</p>
                    </button>
                {:else if isLoggedIn === false}
                    <button class="logInButton mx-auto duration-200 cursor-pointer" 
                    on:click={() => 
                        goto('/login')
                    }>
                    <p>Log In</p>
                    </button>
                {/if}
        </nav>
        {/if}
    </div>

</header>

<Sidebar {showSidebar} isLoggedIn={isLoggedIn}/>
