import axios from "axios";
import { toast } from "react-toastify";

export const searchByTitle = async (query) => {
  try {
    const data = await axios.post("/api/search", query);
    const recipesData = data.data;
    if (recipesData?.data.length <= 0) {
      toast.success("Recipes with this name don't exist");
    } else {
      toast.success("Search successfully");
    }
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    return Promise.reject(error.message);
  }
};
export const searchByIngredients = async (query) => {
  try {
    const data = await axios.post("/api/ingredients", query);
    const recipesData = data.data;
    if (recipesData?.data.length <= 0) {
      toast.success("Recipes with this name don't exist");
    } else {
      toast.success("Search successfully");
    }
    return data;
  } catch (error) {
    toast.error(error.message);
    return Promise.reject(error.message);
  }
};
