import { useI18n } from '../i18n/I18nProvider.jsx';
import { EXTERNAL_LINK_PROPS, NAV_SECTIONS, REPO_URL, SECTION_IDS, TINKERED_URL } from '../data/site.js';
import { ArrowUpIcon, ExternalIcon, GitHubIcon } from './Icons.jsx';

export default function Footer() {
  const { t } = useI18n();
  const projectLinks = NAV_SECTIONS.filter((section) => section.id !== SECTION_IDS.links);

  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__top">
          <div>
            <p className="footer__brand">
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
              TinyPocket
            </p>
            <p className="footer__text">{t('footer.description')}</p>
          </div>

          <div>
            <h2 className="footer__col-title">{t('footer.projectColumn')}</h2>
            <ul className="footer__list">
              {projectLinks.map((section) => (
                <li key={section.id}>
                  <a className="footer__link" href={`#${section.id}`}>
                    {t(`nav.${section.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="footer__col-title">{t('footer.resourcesColumn')}</h2>
            <ul className="footer__list">
              <li>
                <a className="footer__link" href={REPO_URL} {...EXTERNAL_LINK_PROPS}>
                  <GitHubIcon size={14} />
                  {t('footer.repository')}
                </a>
              </li>
              <li>
                <a className="footer__link" href={TINKERED_URL} {...EXTERNAL_LINK_PROPS}>
                  <ExternalIcon size={14} />
                  {t('footer.simulation')}
                </a>
              </li>
              <li>
                <a className="footer__link" href="#top">
                  {t('footer.top')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__note">{t('footer.note')}</span>
          <a className="footer__top-link" href="#top">
            <ArrowUpIcon size={14} />
            {t('footer.top')}
          </a>
        </div>
      </div>
    </footer>
  );
}
