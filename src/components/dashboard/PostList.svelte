<script>
  export let posts = [];
</script>

<div class="space-y-4">
  {#if posts.length > 0}
    {#each posts as post (post.id)}
      <div class="bg-white shadow-md rounded-lg p-4">
        <p>{post.content}</p>
      </div>
    {/each}
  {:else}
    <p class="text-gray-500">No posts yet. Be the first to post!</p>
  {/if}
</div>
