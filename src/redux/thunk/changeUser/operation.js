import axios from "axios";

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
