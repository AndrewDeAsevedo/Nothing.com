<script>
  import SectionWrapper from "./SectionWrapper.svelte";
  import Header from "./Header.svelte";
  import CTAs from "./CTAs.svelte";

</script>

<SectionWrapper>
    <Header headerType={'loggedOut'}/> <!-- Todo: import logic for whether user is logged in -->
    <div class="flex flex-col gap-10 flex-1 items-center justify-center pb-10 md:pb-14">
        <h2 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl macx-w-[1200px] mx-auto w-full text-center font-semibold">
            Welcome To Your <span class="text-indigo-400 font-sans">Community</span>
        </h2>
        <p class="text-xl sm:text-2xl md:text-3xl text-center max-w-[1000px] mx-auto w-full">
            A new way to connect with your peers
        </p>
        <CTAs />
    </div>
</SectionWrapper>