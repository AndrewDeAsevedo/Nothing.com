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

<div class='login-form'>
    <h2>Log In</h2>
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
    }
    input, button {
      width: 100%;
      padding: 0.5em;
      margin: 0.5em 0;
      border-radius: 3px;
      border: 1px solid #ccc;
    }
  </style>