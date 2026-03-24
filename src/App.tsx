import { Outlet } from "react-router-dom";
import Header from "./componentes/header/Header";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <Header />
      <Outlet />
    </>
  )
}

export default App
