<script>
  import Header from '../../components/Header.svelte';
  import { onMount } from 'svelte';
  import CreatePost from '../../components/dashboard/CreatePost.svelte';
  import PostList from '../../components/dashboard/PostList.svelte';
  import pb from '../../lib/pocketbase.js';
  import Loader from '../../components/Loader.svelte';

  let posts = [];
  let loading = true;

  const fetchPosts = async () => {
    loading = true;
    const records = await pb.collection('posts').getFullList(); // Fetch posts from PocketBase
    posts = records.map(record => ({ id: record.id, content: record.content }));
    console.log(posts)
    loading = false;
  };

  // Fetch posts when the component mounts
  onMount(() => {
    fetchPosts();
  });

  const addPost = async (newPostContent) => {
    loading = true;
    await pb.collection('posts').create({ content: newPostContent });
    await fetchPosts(); // Refresh post list
    loading = false;
  };
</script>

<Header />

<main class="container mx-auto mt-10">
  {#if loading}
    <Loader />
  {:else}
    <CreatePost on:createPost={event => addPost(event.detail)} />
    <PostList {posts} />
  {/if}
</main>
