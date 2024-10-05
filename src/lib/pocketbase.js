import PocketBase from 'pocketbase';
import { PUBLIC_API_URL } from '$env/static/public';

// Create and export a single PocketBase instance
const pb = new PocketBase(PUBLIC_API_URL);

// Utility function to log in
export const login = async (email, password) => {
    return await pb.collection('users').authWithPassword(email, password);
};

// Utility function to log out
export const logout = () => {
    pb.authStore.clear();
};

// Export the instance for other files to use
export default pb;
