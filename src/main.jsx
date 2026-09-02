import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
import ProdutoPage from './pages/ProdutoPage.jsx';
import ContatoPage from './pages/ContatoPage.jsx';

const waze = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/produtos",
    element: <ProdutoPage />,
  },
  {
    path: "/contatos",
    element: <ContatoPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={waze} />,
  </StrictMode>,
)
