import axios from "axios";

const api = axios.create({
  baseURL: "https://tlink-server.onrender.com",
});

export async function getClub() {
  try {
    const response = await api.get("/Clubs/", {
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
export async function getOneClub(id) {
  try {
    const response = await api.get(`/Clubs/${id}/`, {
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

export async function CreateClub(data) {
  try {
    const response = await api.post(`/Clubs/`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo")).token
        }`,
      },
    });
    return response;
  } catch (error) {
    return error.message;
  }
}

export async function addTunimateur(data) {
  try {
    const response = await api.put(`/Clubs/${data.id}/addTunimateur`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo")).token
        }`,
      },
    });
    return response;
  } catch (error) {
    return error.message;
  }
}

export async function addBureau(data) {
  try {
    const response = await api.put(`/Clubs/${data.id}/addBureau/`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo")).token
        }`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}
export async function UpdateBureau(data) {
  try {
    const response = await api.put(`/Clubs/${data.id}/updateBureau/`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo")).token
        }`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}
export async function requestJoinIn(data) {
  try {
    const response = await api.put(`/Clubs/${data.id}/reqjoin/`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo")).token
        }`,
      },
    });
    return response;
  } catch (error) {
    return error.message;
  }
}
