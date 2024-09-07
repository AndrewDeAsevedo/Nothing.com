<script>
  import Header from '../../components/Header.svelte';
  import { onMount } from 'svelte';
  import CreatePost from '../../components/dashboard/CreatePost.svelte';
  import PostList from '../../components/dashboard/PostList.svelte';
  import pb from '../../lib/pocketbase.js';

  let posts = [];

  const fetchPosts = async () => {
    const records = await pb.collection('posts').getFullList(); // Fetch posts from PocketBase
    posts = records.map(record => ({ id: record.id, content: record.content }));
    console.log(posts)
  };

  // Fetch posts when the component mounts
  onMount(() => {
    fetchPosts();
  });

  const addPost = async (newPostContent) => {
    await pb.collection('posts').create({ content: newPostContent });
    await fetchPosts(); // Refresh post list
  };
</script>

<Header />

<main class="container mx-auto mt-10">
  <CreatePost on:createPost={event => addPost(event.detail)} />
  <PostList {posts} />
</main>
