import axios from "axios";

// Fetch all albums
export const fetchAlbums = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/albums");
    return response.data;
};

// Fetch photos for a specific album
export const fetchPhotos = async (albumId: number) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
    return response.data;
};
// Fetch specific user
export const fetchUsers = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    return response.data;
};
export const fetchUser = async (userId: number) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return response.data;
};
