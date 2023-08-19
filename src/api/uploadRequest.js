import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("userInfo")).token
    }`;
  }

  return req;
});
export const downloadFile = (dossierFileName) =>
  API.get(`/upload/dossier-download/${dossierFileName}`);

export const uploadImage = (formData) => API.post("/upload/many", formData);
export const getImage = (formData) => API.post("/upload/", formData);
export const uploadPost = (formData) => API.post("/posts", formData);
