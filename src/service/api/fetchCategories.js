import axios from "axios";
import { toast } from "react-toastify";

export const fetchCategories = async () => {
   try {
      const { data } = await axios.get("/api/recipes/category-list");

      return data.data;
   } catch (error) {
      toast.error(error.response.data.message);
      return Promise.reject(error.message);
   }
};
