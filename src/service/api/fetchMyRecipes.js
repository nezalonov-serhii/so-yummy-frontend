import axios from "axios";

axios.defaults.baseURL = "https://so-yummy-426w.onrender.com";
// axios.defaults.baseURL = "http://localhost:3003";

const getMyRecipes = async (page) => {
   try {
     const { data } = await axios.get(`/api/own-recipes?page=${page}&limit=4`);

      return data;
   } catch (error) {
      return Promise.reject(error.response.statusText);
   }
};

const deleteMyRecipe = async (id) => {
   try {
      const { data } = await axios.patch(`/api/own-recipes/${id}`);
      return data;
   } catch (error) {
      return Promise.reject(error.response.statusText);
   }
};

export { getMyRecipes, deleteMyRecipe };
