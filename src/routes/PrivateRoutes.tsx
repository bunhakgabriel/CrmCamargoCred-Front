// src/routes/PrivateRoute.tsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export function PrivateRoute() {
  const user = useAuthStore((state) => state.user);
  const loading = useAuthStore((state) => state.loading);
  const checkingAuth = useAuthStore((state) => state.checkingAuth);

  if (loading || checkingAuth) {
    return <div>Carregando...</div>; // pode melhorar depois
  }

  return user && !checkingAuth ? <Outlet /> : <Navigate to="/login" />;
}