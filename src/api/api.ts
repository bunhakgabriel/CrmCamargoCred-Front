import axios from "axios";
import { app } from "../firebase/firebaseConfig";
import { getAuth, signOut } from "firebase/auth";
import { useAuthStore } from "../store/authStore";
import { toast } from "sonner";
import { useLoadingStore } from "../store/loadStore";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

const MIN_LOADING_TIME = 1200;

api.interceptors.request.use(
  async (config) => {
    useLoadingStore.getState().startLoading();

    config.metadata = {
      startTime: Date.now(),
    };

    const auth = getAuth(app);
    const user = auth.currentUser;

    if (user) {
      const token = await user.getIdToken();
      config.headers.Authorization = `Bearer ${token}`;
    }

    config.headers['ngrok-skip-browser-warning'] = 'true';

    return config;
  },
  (error) => {
    useLoadingStore.getState().stopLoading();
    return Promise.reject(error)
  }
);

api.interceptors.response.use(
  async (response) => {
    const start = response.config.metadata?.startTime ?? Date.now();
    const elapsed = Date.now() - start;

    if (elapsed < MIN_LOADING_TIME) {
      await new Promise((resolve) =>
        setTimeout(resolve, MIN_LOADING_TIME - elapsed)
      );
    }

    useLoadingStore.getState().stopLoading();

    return response;
  },
  async (error) => {
    const start = error.config?.metadata?.startTime ?? Date.now();
    const elapsed = Date.now() - start;

    if (elapsed < MIN_LOADING_TIME) {
      await new Promise((resolve) =>
        setTimeout(resolve, MIN_LOADING_TIME - elapsed)
      );
    }

    useLoadingStore.getState().stopLoading();

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
      toast.error(error?.response?.data?.message || "Não autorizado!");
    }

    const message =
      error?.response?.data?.message || "Erro inesperado!";

    error.message = message;
    return Promise.reject(error);
  }
);

export default api;