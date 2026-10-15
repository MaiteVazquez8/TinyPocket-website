import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import es from './es.js';
import en from './en.js';
import pt from './pt.js';

export const LANGUAGES = [
  { code: 'es', short: 'ES', label: 'Español' },
  { code: 'en', short: 'EN', label: 'English' },
  { code: 'pt', short: 'PT', label: 'Português' },
];

export const DEFAULT_LANG = 'es';
export const LANGUAGE_STORAGE_KEY = 'tp-lang';

const DICTIONARIES = { es, en, pt };

function isSupported(code) {
  return Object.prototype.hasOwnProperty.call(DICTIONARIES, code);
}

function readStoredLang() {
  try {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return isSupported(stored) ? stored : null;
  } catch {
    return null;
  }
}

function resolveInitialLang() {
  const stored = typeof window !== 'undefined' ? readStoredLang() : null;
  if (stored) return stored;
  if (typeof window !== 'undefined') {
    const nav = window.navigator?.language ?? '';
    const base = nav.slice(0, 2).toLowerCase();
    if (isSupported(base)) return base;
  }
  return DEFAULT_LANG;
}

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(resolveInitialLang);

  useEffect(() => {
    const root = document.documentElement;
    const dictionary = DICTIONARIES[lang];
    root.setAttribute('lang', dictionary.meta.htmlLang);
    root.setAttribute('data-lang', dictionary.meta.htmlLang);
    document.title = dictionary.meta.documentTitle;
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    } catch {
      /* storage unavailable: language still works for the session */
    }
  }, [lang]);

  const setLang = useCallback((next) => {
    if (isSupported(next)) setLangState(next);
  }, []);

  const value = useMemo(() => {
    const dict = DICTIONARIES[lang];
    const resolve = (source, path) =>
      path.split('.').reduce((acc, key) => (acc == null ? undefined : acc[key]), source);

    const t = (path) => {
      const current = resolve(dict, path);
      if (current !== undefined && current !== null) return current;
      const fallback = resolve(es, path);
      if (fallback !== undefined && fallback !== null) return fallback;
      return path;
    };

    return { lang, setLang, t, dict, languages: LANGUAGES };
  }, [lang, setLang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useI18n must be used inside an I18nProvider');
  return context;
}
