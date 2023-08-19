import axios from "axios";

const api = axios.create({
  baseURL: "https://tlink-server.onrender.com",
});

export async function getChapter() {
  try {
    const response = await api.get("/Chapters/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo")).token
        }`,
      },
    });
    return response.data;
  } catch (error) {
    return error.message;
  }
}
export async function getOneChapter(id) {
  try {
    const response = await api.get(`/Chapters/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo")).token
        }`,
      },
    });
    return response.data;
  } catch (error) {
    return error.message;
  }
}

export async function CreateChapter(data) {
  try {
    const response = await api.post(`/Chapters/`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo")).token
        }`,
      },
    });
    return response.data;
  } catch (error) {}
}
