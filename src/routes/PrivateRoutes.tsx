// src/routes/PrivateRoute.tsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export function PrivateRoute() {
  const user = useAuthStore((state) => state.user);
  const loading = useAuthStore((state) => state.loading);

  if (loading) {
    return <div>Carregando...</div>; // pode melhorar depois
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
}