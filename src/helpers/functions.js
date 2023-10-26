import axios from "axios";
import { ACCOUNT_API } from "./consts";

let updateFunc; // Declare updateFunc outside the function

export const addDataToLocalStorage = (user, tokens) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("tokens", JSON.stringify(tokens));
};

export const updateToken = () => {
  updateFunc = setInterval(async () => {
    const tokens = JSON.parse(localStorage.getItem("tokens"));
    if (!tokens) return clearInterval(updateFunc);
    const Authorization = `Bearer ${tokens.access}`;
    const { data } = await axios.post(
      `${ACCOUNT_API}/account/refresh/`,
      { refresh: tokens.refresh },
      { headers: { Authorization } }
    );
    localStorage.setItem(
      "tokens",
      JSON.stringify({ refresh: tokens.refresh, access: data.access })
    );
  }, 1000 * 60 * 1);
  // Добавьте этот перехватчик там, где настраиваете Axios
  axios.interceptors.request.use(
    (config) => {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      if (tokens) {
        config.headers.Authorization = `Bearer ${tokens.access}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

export const logout = () => {
  clearInterval(updateFunc); // Очистка интервала при выходе
  localStorage.removeItem("user");
  localStorage.removeItem("tokens");
};
