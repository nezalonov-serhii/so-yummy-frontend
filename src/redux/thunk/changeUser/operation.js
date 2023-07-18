import axios from "axios";

// axios.defaults.baseURL = "https://so-yummy-426w.onrender.com";
axios.defaults.baseURL = "http://localhost:3003";

export const fetchChangeUser = async (formData) => {
  try {
    const response = await axios.patch("/api/users/avatars", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response.data);
    return await response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
