import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://so-yummy-426w.onrender.com";
// axios.defaults.baseURL = "http://localhost:3003";

const getMyRecipes = async () => {
  try {
    const { data } = await axios.get("api/own-recipes");

    return data.data;
  } catch (error) {
    toast.error(error.response.data.message);
    return Promise.reject(error.response.statusText);
  }
};

const deleteMyRecipe = async (id) => {
  try {
    const { data } = await axios.patch(`api/own-recipes/${id}`);

    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    return Promise.reject(error.response.statusText);
  }
};

export { getMyRecipes, deleteMyRecipe };
