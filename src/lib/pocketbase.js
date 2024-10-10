import PocketBase from 'pocketbase';
import { PUBLIC_API_URL } from '$env/static/public';
import { clearUser } from '$lib/userStore.js';

// Create and export a single PocketBase instance
const pb = new PocketBase(PUBLIC_API_URL);

// Utility function to log in
export const login = async (email, password) => {
    try {
        await pb.collection('users').authWithPassword(email, password);
    } catch (error) {
        console.error('Login failed:', error);
        return;
    }
};

// Utility function to log out
export const logout = () => {
    console.log('Logout successful');
    pb.authStore.clear();
    clearUser();
};

// Export the instance for other files to use
export default pb;
