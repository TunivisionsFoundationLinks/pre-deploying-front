import { apiSlice } from "./apiSlice";


const USER_URL = process.env.SERVER_URL || "https://localhost:5000";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `http://localhost:5000/auth/login` || `${USER_URL}/auth/login`,
                method: 'POST',
                body: data
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: `http://localhost:5000/auth/logout` || `${USER_URL}/auth/logout`,
                method: 'POST',

            })
        }),
        UpdatePassword: builder.mutation({
            query: (data) => ({
                url: `http://localhost:5000/auth/reset-password/:id}/:ac_token` || `${USER_URL}/auth/reset-password/${data.id}/${data.ac_token}`,
                method: 'PUT',
                body: data.inputs,

            })
        })
    })
})


export const { useLoginMutation, useLogoutMutation, useUpdatePasswordMutation } = userApiSlice