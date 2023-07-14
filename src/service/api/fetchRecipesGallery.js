import axios from "axios";
import { toast } from "react-toastify";

export const fetchRecipesGallery = async (categoryName) => {
  try {
    const { data } = await axios.get(
      `api/recipes/${categoryName}`,
      categoryName
    );

    return data.data;
  } catch (error) {
    toast.error(error.response.data.message);
    return Promise.reject(error.message);
  }
};
