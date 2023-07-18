import axios from "axios";
import { toast } from "react-toastify";

export const getFavoriteRecipes = async () => {
   try {
      const { data } = await axios.get("api/favorite");

      return data;
   } catch (error) {
      toast.error(error.response.data.message);
      return Promise.reject(error.response.statusText);
   }
};

export const deleteRecipeFromFavorite = async (id) => {
   try {
      const { data } = await axios.delete(`api/favorite/${id}`);

      return data;
   } catch (error) {
      toast.error(error.response.data.message);
      return Promise.reject(error.response.statusText);
   }
};
