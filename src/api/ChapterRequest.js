import axios from "axios";

const api = axios.create({
  baseURL: process.env.SERVER_URL,
  withCredentials: true,
});

export async function getChapter() {
  try {
    const response = await api.get("/Chapters/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo")).token
        }`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
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
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
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
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo")).token
        }`,
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
export async function AddBureauChapter(data) {
  try {
    const response = await api.put("/Chapters/addM", data, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo")).token
        }`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "PUT",
      },
    });
    return response;
  } catch (error) {
    throw new error();
  }
}
