import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json"
  }
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    debugger
    const message =
      error?.response?.data?.message || "Erro inesperado!";

    error.message = message; 
    return Promise.reject(error);
  }
);

export default api;