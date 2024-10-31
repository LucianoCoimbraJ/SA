import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Router.jsx'; // Corrigido para a importação correta
import { GlobalContextProvider } from './contexts/GlobalContext.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <GlobalContextProvider>
            <RouterProvider router={router} />
        </GlobalContextProvider>
    </StrictMode>
);
