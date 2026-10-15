import { useI18n } from '../i18n/I18nProvider.jsx';
import { SECTION_IDS } from '../data/site.js';
import Reveal from './Reveal.jsx';
import SectionLabel from './SectionLabel.jsx';

export default function About() {
  const { t } = useI18n();
  const versions = t('versions.items');
  const shared = t('about.shared');
  const paragraphs = t('about.paragraphs');

  return (
    <section className="section" id={SECTION_IDS.about}>
      <span className="aurora-wrap aurora-wrap--band" aria-hidden="true">
        <span className="aurora aurora--violet aurora--soft" />
      </span>

      <div className="shell">
        <div className="about__top">
          <Reveal>
            <SectionLabel>{t('about.eyebrow')}</SectionLabel>
            <h2 className="about__title">
              {t('about.title')} <span className="serif-accent">{t('about.accent')}</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="about__lead">{t('about.lead')}</p>
          </Reveal>
        </div>

        <div className="about__grid">
          {paragraphs.map((paragraph, index) => (
            <Reveal delay={index * 90} key={paragraph.slice(0, 32)}>
              <p className={index === 0 ? 'about__dropcap' : undefined}>{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <h3 className="about__subhead">{t('about.versionsLabel')}</h3>
          <div className="versions">
            {versions.map((version, index) => (
              <article className="version-card" data-version={version.id} key={version.id}>
                <span className="version-card__board">
                  <CircuitBoard />
                  {version.board}
                </span>
                <h4 className="version-card__name">{version.name}</h4>
                <p className="version-card__text">{version.summary}</p>
                <ul className="version-card__list">
                  {version.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <p className="version-card__source">
                  <span>{version.source}</span>
                </p>
                {index === 0 && <span className="version-card__corner" aria-hidden="true" />}
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="shared">
            <h3 className="about__subhead">{t('about.sharedLabel')}</h3>
            <ul className="shared__list">
              {shared.map((item) => (
                <li className="shared__item" key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="about__closing">{t('about.closing')}</p>
        </Reveal>
      </div>
    </section>
  );
}

function CircuitBoard() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <rect x="6" y="6" width="12" height="12" rx="2" />
        <path d="M10 10h4v4h-4zM2 10h4M2 14h4M18 10h4M18 14h4M10 2v4M14 2v4M10 18v4M14 18v4" />
      </g>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m5 13 4 4L19 7" />
      </g>
    </svg>
  );
}
