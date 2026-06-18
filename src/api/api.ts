import axios from "axios";
import { app } from "../firebase/firebaseConfig";
import { getAuth, signOut } from "firebase/auth";
import { useAuthStore } from "../store/authStore";
import { toast } from "sonner";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

api.interceptors.request.use(
  async (config) => {
    const auth = getAuth(app);
    const user = auth.currentUser;

    if (user) {
      const token = await user.getIdToken();
      config.headers.Authorization = `Bearer ${token}`;
    }

    config.headers['ngrok-skip-browser-warning'] = 'true';

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error?.response?.status;

    // 🔥 TRATAMENTO GLOBAL
    if (status === 401 || status === 403) {
      const auth = getAuth(app);

      try {
        await signOut(auth);
      } catch (e) {
        console.log("Erro ao deslogar:", e);
      }

      useAuthStore.getState().setUser(null);
      toast.error(error?.response?.data?.message || 'Não autorizado!');
    }

    const message =
      error?.response?.data?.message || "Erro inesperado!";

    error.message = message;
    return Promise.reject(error);
  }
);

export default api;