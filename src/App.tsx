import { Outlet } from "react-router-dom";
import Header from "./componentes/header/Header";
import { useLoadingStore } from "./store/loadStore";
import { RingLoader } from "react-spinners";

function App() {
  const loading = useLoadingStore((state) => state.requests > 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="relative flex-1">
        <Outlet />

        {loading && (
          <div className="fixed inset-0 flex items-center justify-center bg-white/60 backdrop-blur-sm z-50">
            <RingLoader color="#193366" size={120} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;