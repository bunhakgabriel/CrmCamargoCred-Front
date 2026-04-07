import { create } from "zustand";
import type { User } from "firebase/auth";

type AuthStore = {
  user: User | null;
  loading: boolean;
  setUser: (value: User | null) => void;
  setLoading: (value: boolean) => void
  checkingAuth: boolean;
  setCheckingAuth: (value: boolean) => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  loading: true,
  checkingAuth: false,
  setUser: (value) => set({ user: value }),
  setLoading: (value) => set({ loading: value }),
  setCheckingAuth: (value) => set({ checkingAuth: value })
}));