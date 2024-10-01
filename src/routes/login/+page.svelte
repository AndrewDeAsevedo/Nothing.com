<script>
  let email = "";
  let password = "";

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Access the PocketBase API URL from environment variable
    const apiUrl = import.meta.env.VITE_POCKETBASE_LOGIN_URL;

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identity: email,  
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful", data);
      } else {
        console.error("Login failed", response.statusText);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
</script>

<div class= 'Welcome message'>
<h2 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl macx-w-[1200px] mx-auto w-full text-center font-semibold mt-36">
  Welcome Back! <span class="text-indigo-400 font-sans"></span>
</h2>
<p class="text-xl sm:text-2xl md:text-3xl text-center max-w-[1000px] mx-auto w-full">
  Log into your account below
</p>
</div>

<div class='login-form'>
    <h2>Log In </h2>
    <form on:submit={handleSubmit}>
        <input type="email" bind:value={email} placeholder="Email" required />
        <input type="password" bind:value={password} placeholder="Password" required />
        <button type="submit">Log In</button>
    </form>
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
      margin-top:5ch;
    }
    input, button {
      width: 100%;
      padding: 0.5em;
      margin: 0.5em 0;
      border-radius: 3px;
      border: 1px solid #ccc;
    }
  </style>