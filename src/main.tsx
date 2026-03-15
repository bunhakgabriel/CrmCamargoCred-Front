import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//configurando router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//objeto de rotas definidas
import routes from './routes/routes.tsx'

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
