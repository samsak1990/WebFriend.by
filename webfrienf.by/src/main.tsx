import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routes } from './data/Routes/routes'
import './reset.css'
import './index.css'


createRoot(document.getElementById('root')!).render(
    <RouterProvider router={routes} />
)
