import axios from "axios";
import { toast } from "react-toastify";

export const fetchRecipesGallery = async (categoryName, page) => {
  try {
    const { data } = await axios.get(
      `/api/recipes/${categoryName}?page=${page}`,
      categoryName
    );

    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    return Promise.reject(error.message);
  }
};
