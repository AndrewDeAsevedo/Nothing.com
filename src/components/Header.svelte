<script>
    import { goto } from '$app/navigation';
    import Sidebar from './Sidebar.svelte';
    let showSidebar = false;
    export let headerType = 'loggedOut';
    const toggleSidebar = () => {
    showSidebar = !showSidebar;
  };
</script>

<header class="flex flex-col relative z-5">
    <div class="max-w-[1400px] mx-auto w-full flex items-center justify-between p-4 py-6">
        <a href="/">
            <h1 class="text-indigo-400 font-bold text-3xl z-5">Nothing<span class="text-blue-400">.com</span></h1>
        </a>
        <button on:click={toggleSidebar} class="md:hidden grid place-items-center">
            <i class="fa-solid fa-bars"></i>
        </button>

        {#if headerType === 'loggedOut'}
            <nav class="hidden md:flex items-center gap-4 lg:gap-6">
                <a href="#About" class="duration-200 hover:text-indigo-400 cursor-pointer">About The Developers</a>
                <a href="#Reviews" class="duration-200 hover:text-indigo-400 cursor-pointer">Reviews</a>
                <a href="#FAQs" class="duration-200 hover:text-indigo-400 cursor-pointer">FAQs</a>
                <button on:click={() => goto('/login')} class="logInButton duration-200cursor-pointer">
                    <p>Log In</p>
                </button>
            </nav>
        {:else if headerType === 'loggedIn'}
            <nav class="hidden md:flex items-center gap-4 lg:gap-6">
                <a href="#About" class="duration-200 hover:text-indigo-400 cursor-pointer">About The Developers</a>
                <a href="#Reviews" class="duration-200 hover:text-indigo-400 cursor-pointer">Reviews</a>
                <a href="#FAQs" class="duration-200 hover:text-indigo-400 cursor-pointer">FAQs</a>
                <button on:click={() => goto('/login')} class="logInButton duration-200cursor-pointer">
                    <p>Log out</p>
                </button>
            </nav>
        {/if}
    </div>

</header>

<Sidebar {showSidebar} headerType={headerType}/>
