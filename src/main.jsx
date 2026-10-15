import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { I18nProvider } from './i18n/I18nProvider.jsx';
import { ThemeProvider } from './hooks/useTheme.jsx';

import './styles/tokens.css';
import './styles/layout.css';
import './styles/sections.css';
import './styles/visuals.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <I18nProvider>
        <App />
      </I18nProvider>
    </ThemeProvider>
  </StrictMode>,
);
