import axios from "axios";
import { toast } from "react-toastify";

export const searchByTitle = async (query) => {
   try {
      const data = await axios.post("/api/search", query);

      toast.success("Search successfully");

      return data;
   } catch (error) {
      toast.error(error.response.data.message);
      return Promise.reject(error.message);
   }
};
export const searchByIngridients = async (query) => {
   try {
      const data = await axios.post("/api/ingridients", query);

      toast.success("Search successfully");
      return data;
   } catch (error) {
      toast.error(error.message);
      return Promise.reject(error.message);
   }
};