import axios from "axios";

const API = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
});
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});


export const createPost = (FormData) => API.post(`/posts/`, FormData);
export const getPostbyId = (id) => API.get(`/posts/${id}`);
export const updatePost = (FormData) => API.post(`/posts/`, FormData);
export const DeletePost = (FormData) => API.post(`/posts/`, FormData);
export const getTimeLinePost = (FormData) => API.post(`/posts/${id}`, FormData);
export const likePost = (id, userId) => API.put(`/posts/${id}/like`, { userId: userId })