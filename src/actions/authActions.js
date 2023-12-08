import { createAsyncThunk } from "@reduxjs/toolkit";
import * as AuthApi from "../api/AuthRequest";
import { Flip, toast } from "react-toastify";

export const register = createAsyncThunk(
  "auth/register",
  async (FormData, thunkAPI) => {
    try {
      const res = await AuthApi.register(FormData.inputs);
      toast.success("Registred successfully", {
        position: "bottom-center",
        transition: Flip,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return FormData.history("/Login");
    } catch (err) {
      toast.error(err.response.data.message, {
        position: "bottom-center",
        autoClose: 5000,
        transition: Flip,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);
export const login = createAsyncThunk(
  "auth/login",
  async (FormData, thunkAPI) => {
    try {
      const res = await AuthApi.login(FormData.inputs);

      FormData.history("/");
      toast.success(
        `Welecome ${res.data.user.firstname} ${res.data.user.lastname}`,
        {
          position: "bottom-center",
          transition: Flip,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      return res.data;
    } catch (err) {
      toast.error(err.response.data, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const forgetPassword = createAsyncThunk(
  "auth/forget-password",
  async (FormData, thunkAPI) => {
    try {
      const res = await AuthApi.forgetPassword(FormData);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const resetPassword = createAsyncThunk(
  `auth/reset-password/`,
  async (FormData, thunkAPI) => {
    try {
      const res = await AuthApi.resetPassword(FormData);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
