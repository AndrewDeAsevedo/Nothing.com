<script>
    import { goto } from '$app/navigation';
</script>

<div class="flex items-center gap-4">
    <button class="specialButton duration-200 cursor-pointer">
        <p class="text-base sm:text-lg md:text-xl">Get Started</p>
    </button>
    <button on:click={() => goto('/dashboard')} class="specialButton duration-200= cursor-pointer">
        <p class="text-base sm:text-lg md:text-xl"> Browse As Guest</p>
    </button>
</div>