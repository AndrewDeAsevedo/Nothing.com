<script>
  let email = "";
  let password = "";
  let first_name = "";
  let last_name = "";
  let username = "";

    const handleSubmit = async (event ) => {
        event.preventDefault();
        if (!email.includes('@')) {
            alert('Please enter a valid email address.');
            return;
        }
        console.log('Registration successful');
    }
    
</script>

<form on:submit|preventDefault={handleSubmit}>
    <label>
        First Name:
        <input type="text" bind:value={first_name} />
    </label>
    <label>
        Last Name:
        <input type="text" bind:value={last_name} />
    </label>
    <label>
        Email:
        <input type="email" bind:value={email} />
    </label>
    <label>
        Username:
        <input type="text" bind:value={username} />
    </label>
    <label>
        Password:
        <input type="password" bind:value={password} />
    </label>
    <button type="submit">Sign Up</button>
</form>

<style>
form {
    max-width: 400px;
    
    margin: auto;
}

label {
    display: block;
    margin-bottom: 10px;
    
}

input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    margin-bottom: 15px;
    border: 1px solid #ccc; /* Add a border to the input boxes */
    border-radius: 4px; /* Optional: add rounded corners to input */
}

button {
    width: 100%;
    padding: 10px;
    background-color: #6f17b6;
    color: #fff;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #80a0e8;
}


</style>