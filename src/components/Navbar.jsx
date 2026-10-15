import { useEffect, useState } from 'react';
import { EXTERNAL_LINK_PROPS, NAV_SECTIONS, REPO_URL } from '../data/site.js';
import { useI18n } from '../i18n/I18nProvider.jsx';
import { useScrollSpy } from '../hooks/useScrollSpy.js';
import LanguageSelect from './LanguageSelect.jsx';
import ThemeToggle from './ThemeToggle.jsx';
import { GitHubIcon } from './Icons.jsx';

const SECTION_ID_LIST = NAV_SECTIONS.map((section) => section.id);

export default function Navbar() {
  const { t } = useI18n();
  const activeId = useScrollSpy(SECTION_ID_LIST);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const renderLinks = (onNavigate) =>
    NAV_SECTIONS.map((section) => (
      <li key={section.id}>
        <a
          className="nav__link"
          href={`#${section.id}`}
          aria-current={activeId === section.id ? 'true' : undefined}
          onClick={onNavigate}
        >
          {t(`nav.${section.key}`)}
        </a>
      </li>
    ));

  return (
    <header className="nav" data-scrolled={scrolled}>
      <div className="nav__inner shell">
        <a className="nav__brand" href="#top">
          <span className="nav__mark" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </span>
          <span>
            Tiny<em>Pocket</em>
          </span>
        </a>

        <nav aria-label={t('meta.mainNavigation')}>
          <ul className="nav__links">{renderLinks(undefined)}</ul>
        </nav>

        <div className="nav__actions">
          <LanguageSelect />
          <ThemeToggle />
          <a className="nav__github" href={REPO_URL} {...EXTERNAL_LINK_PROPS}>
            <GitHubIcon size={17} />
            <span>{t('nav.github')}</span>
          </a>
          <button
            type="button"
            className="nav__toggle"
            aria-expanded={menuOpen}
            aria-controls="nav-panel"
            aria-label={menuOpen ? t('meta.closeMenu') : t('meta.openMenu')}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span className="nav__toggle-bars" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="nav__panel" id="nav-panel" data-open={menuOpen}>
        <nav aria-label={t('meta.mainNavigation')}>
          <ul>{renderLinks(() => setMenuOpen(false))}</ul>
        </nav>
        <a
          className="btn btn--primary"
          href={REPO_URL}
          {...EXTERNAL_LINK_PROPS}
          onClick={() => setMenuOpen(false)}
        >
          <GitHubIcon size={17} />
          {t('hero.primaryCta')}
        </a>
      </div>
    </header>
  );
}
