import { writable } from 'svelte/store';
import { logout } from './pocketbase.js';

// Create a writable store to hold user information
export const userStore = writable({ 
    isAuthenticated: false, user: null 
});

// Function to update authentication state
export const setUser = (user) => {
    userStore.set({ 
        isAuthenticated: !!user, 
        user: user
    });
};

// Function to clear user data on logout
export const clearUser = () => {
    userStore.set({ 
        isAuthenticated: false, 
        user: null
    });
    logout(); 
};