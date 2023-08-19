import axios from "axios";

const api = axios.create({
  baseURL: "https://tlink-server.onrender.com",
  withCredentials: true,
});

export async function CreatePost(data) {
  try {
    const response = await api.post(`/posts`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo")).token
        }`,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}
export async function getAllPostes() {
  try {
    const response = await api.get("/posts", {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo")).token
        }`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
}
