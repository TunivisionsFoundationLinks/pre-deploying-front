import axios from "axios";

const api = axios.create({
  baseURL: "https://tlinkbackendserver.onrender.com",
});

export async function fetchUsers() {
  try {
    const response = await api.get("/user/all", {
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
    throw new Error(error);
  }
}
export async function FetchOneUser(id) {
  try {
    const response = await api.get(
      `https://tlinkbackendserver.onrender.com/user/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("userInfo")).token
          }`,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET",
        },
      }
    );

    const data = response.data;
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function unfollow(id) {
  const response = await api.put(
    `https://tlinkbackendserver.onrender.com/user/${id}/unfollow`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo")).token
        }`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "PUT",
      },
      body: JSON.stringify(id),
    }
  );
  return response.json();
}

export async function updateProfile(User) {
  const response = await api.put(
    `https://tlinkbackendserver.onrender.com/user/${User._id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/formdata",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo")).token
        }`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "PUT",
      },
      body: JSON.stringify(User),
    }
  );
  return response.json();
}

export async function deleteUser(id) {
  const response = await api.delete(
    `https://tlinkbackendserver.onrender.com/user/${id}`,
    {
      method: "DELETE",
    }
  );
  return response.json();
}
