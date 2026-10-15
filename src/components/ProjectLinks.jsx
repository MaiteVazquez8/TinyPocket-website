import { useI18n } from '../i18n/I18nProvider.jsx';
import { EXTERNAL_LINK_PROPS, REPO_URL, SECTION_IDS, TINKERED_URL } from '../data/site.js';
import Reveal from './Reveal.jsx';
import SectionLabel from './SectionLabel.jsx';
import { GitHubIcon, InfoIcon } from './Icons.jsx';

export default function ProjectLinks() {
  const { t } = useI18n();
  const github = t('links.github');
  const tinkered = t('links.tinkered');

  return (
    <section className="section" id={SECTION_IDS.links}>
      <div className="shell">
        <Reveal className="section-head">
          <SectionLabel>{t('links.eyebrow')}</SectionLabel>
          <h2 className="section-title">
            {t('links.title')} <span className="serif-accent">{t('links.accent')}</span>
          </h2>
          <p className="section-lead">{t('links.lead')}</p>
        </Reveal>

        <div className="links">
          <Reveal className="link-card">
            <div>
              <h3 className="link-card__title">{github.title}</h3>
              <span className="link-card__handle">{github.handle}</span>
            </div>
            <p className="link-card__text">{github.text}</p>
            <a className="btn btn--primary" href={REPO_URL} {...EXTERNAL_LINK_PROPS}>
              <GitHubIcon size={16} />
              {github.cta}
            </a>
          </Reveal>

          <Reveal className="link-card link-card--alt" delay={110}>
            <div>
              <h3 className="link-card__title">{tinkered.title}</h3>
              <span className="link-card__handle">{tinkered.handle}</span>
            </div>
            <p className="link-card__text">{tinkered.text}</p>
            <a className="btn" href={TINKERED_URL} {...EXTERNAL_LINK_PROPS}>
              {tinkered.cta}
            </a>
          </Reveal>
        </div>

        <Reveal>
          <p className="links__notice">
            <InfoIcon />
            {t('links.externalNotice')}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
