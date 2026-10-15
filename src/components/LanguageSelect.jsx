import { useEffect, useRef, useState } from 'react';
import { useI18n } from '../i18n/I18nProvider.jsx';
import { CheckIcon } from './Icons.jsx';

export default function LanguageSelect() {
  const { lang, setLang, languages, t } = useI18n();
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const optionRefs = useRef([]);

  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (event) => {
      if (!containerRef.current?.contains(event.target)) setOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        event.stopPropagation();
      }
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    optionRefs.current[languages.findIndex((item) => item.code === lang)]?.focus();

    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, lang, languages]);

  const moveFocus = (event, offset) => {
    event.preventDefault();
    const currentIndex = languages.findIndex((item) => item.code === lang);
    const nextIndex = (currentIndex + offset + languages.length) % languages.length;
    optionRefs.current[nextIndex]?.focus();
  };

  const handleOptionKeyDown = (event, index) => {
    if (event.key === 'ArrowDown') moveFocus(event, 1);
    if (event.key === 'ArrowUp') moveFocus(event, -1);
    if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      const nextIndex = event.key === 'Home' ? 0 : languages.length - 1;
      optionRefs.current[nextIndex]?.focus();
    }
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setLang(languages[index].code);
      setOpen(false);
    }
    if (event.key === 'Tab') setOpen(false);
  };

  const current = languages.find((item) => item.code === lang) ?? languages[0];

  return (
    <div className="lang" ref={containerRef}>
      <button
        type="button"
        className="lang__trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t('meta.languageLabel')}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === 'ArrowDown') {
            event.preventDefault();
            setOpen(true);
          }
        }}
      >
        <span>{current.short}</span>
        <span className="lang__chevron" aria-hidden="true" />
      </button>

      {open && (
        <ul className="lang__menu" role="listbox" aria-label={t('meta.languageLabel')}>
          {languages.map((item, index) => (
            <li key={item.code} role="none">
              <button
                type="button"
                role="option"
                aria-selected={item.code === lang}
                tabIndex={item.code === lang ? 0 : -1}
                className="lang__option"
                ref={(node) => {
                  optionRefs.current[index] = node;
                }}
                onClick={() => {
                  setLang(item.code);
                  setOpen(false);
                }}
                onKeyDown={(event) => handleOptionKeyDown(event, index)}
              >
                <span className="lang__code">{item.short}</span>
                <span>{item.label}</span>
                {item.code === lang && <CheckIcon className="lang__check" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
