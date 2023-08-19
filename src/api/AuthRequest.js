import axios from "axios";
import { toast } from "react-toastify";
const API = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
export async function register(FormData) {
  try {
    const response = await API.post("/auth/register", FormData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
      },
    });

    toast.success("welcome to Our Comunity T-Link", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    return response;
  } catch (error) {
    toast.error(error.message, {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    throw error;
  }
}
export const login = async (FormData) =>
  await API.post("/auth/login", FormData);
export const forgetPassword = (FormData) =>
  API.post("/auth/forget-password", FormData);
export const resetPassword = (FormData) =>
  API.post(
    `/auth/reset-password/${FormData.id}/${FormData.ac_token}`,
    FormData.inputs
  );
