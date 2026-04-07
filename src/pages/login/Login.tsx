import { FcGoogle } from "react-icons/fc";
import { FiUsers } from "react-icons/fi";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase/firebaseConfig";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { toast } from "sonner";
import api from "../../api/api";

export function Login() {
    const user = useAuthStore((state) => state.user);
    const setCheckingAuth = useAuthStore((state) => state.setCheckingAuth);

    if (user) {
        return <Navigate to="/" replace />;
    }

    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    const handleLogin = async () => {
        try {
            setCheckingAuth(true);
            await signInWithPopup(auth, provider);
            await api.get("/auth/me");
            toast.success('Login realizado com sucesso!');
        } catch (error) {
            console.log('ERRO: ', error);
        } finally {
            setCheckingAuth(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-gray-100 to-blue-100">
            {/* Card */}
            <div className="w-full h-64 max-w-md flex flex-col justify-center gap-2 bg-white rounded-2xl shadow-lg overflow-hidden">

                <div className="flex items-center justify-center gap-3 px-6">
                    <div className="bg-(--color-primary) text-white p-2 rounded-lg">
                        <FiUsers size={22} />
                    </div>
                    <span className="font-bold text-lg text-gray-700">
                        ConsigGestorCRM
                    </span>
                </div>

                {/* Body */}
                <div className="px-6 pt-8 text-center">
                    <p className="text-gray-600 mb-6">
                        Faça login em sua conta para acessar o sistema
                    </p>

                    {/* Botão */}
                    <button
                        onClick={handleLogin}
                        className="hover:opacity-80 active:opacity-0 cursor-pointer w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-3 text-gray-700 font-medium hover:bg-gray-50 transition shadow-sm"
                    >
                        <FcGoogle size={22} />
                        Entrar com Google
                    </button>
                </div>
            </div>
        </div>
    );
}