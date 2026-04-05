// src/AuthProvider.tsx
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuthStore } from "../../store/authStore";
import { app } from "../../firebase/firebaseConfig";


export function AuthProvider({ children }: { children: React.ReactNode }) {
  const setUser = useAuthStore((state) => state.setUser);
  const setLoading = useAuthStore((state) => state.setLoading);

  useEffect(() => {
    const auth = getAuth(app);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }

      setLoading(false); 
    });

    return () => unsubscribe();
  }, []);

  return <>{children}</>;
}