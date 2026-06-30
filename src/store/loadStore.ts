import { create } from "zustand";

interface LoadingStore {
  requests: number;
  startLoading: () => void;
  stopLoading: () => void;
}

export const useLoadingStore = create<LoadingStore>((set) => ({
  requests: 0,

  startLoading: () =>
    set((state) => ({
      requests: state.requests + 1,
    })),

  stopLoading: () =>
    set((state) => ({
      requests: Math.max(0, state.requests - 1),
    })),
}));