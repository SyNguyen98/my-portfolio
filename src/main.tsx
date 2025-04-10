import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "./translation/i18n.tsx";
import {LanguageProvider} from "./providers/LanguageProvider.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <LanguageProvider>
            <App/>
        </LanguageProvider>
    </StrictMode>,
)
