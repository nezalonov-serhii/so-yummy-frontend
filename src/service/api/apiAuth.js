import axios from "axios";
import { toast } from "react-toastify";

// axios.defaults.baseURL = "https://so-yummy-426w.onrender.com";
axios.defaults.baseURL = "http://localhost:3003";

const setToken = (token) => {
   axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const dellToken = () => {
   delete axios.defaults.headers.common["Authorization"];
};

export const signup = async (contact) => {
   try {
      const { data } = await axios.post("api/users/register", contact);
      setToken(data.token);

      return data.data;
   } catch (error) {
      toast.error(error.response.data.message);
      return Promise.reject(error.message);
   }
};

export const login = async (contact) => {
   try {
      const { data } = await axios.post("api/users/login", contact);
      setToken(data.token);

      return data;
   } catch (error) {
      toast.error(error.response.data.message);
      return Promise.reject(error.message);
   }
};

export const logout = async () => {
   try {
      dellToken();
      await axios.post("api/users/logout");
   } catch (error) {
      toast.error(error.response.data.message);
      return Promise.reject(error.message);
   }
};

export const currentUser = async (token) => {
   setToken(token);
   try {
      const { data } = await axios.get("api/users");

      return data;
   } catch (error) {
      dellToken();
      toast.error(error.response.data.message);
      return Promise.reject(error.response.statusText);
   }
};
