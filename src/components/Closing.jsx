import { useI18n } from '../i18n/I18nProvider.jsx';
import { EXTERNAL_LINK_PROPS, REPO_URL, TINKERED_URL } from '../data/site.js';
import Reveal from './Reveal.jsx';
import SectionLabel from './SectionLabel.jsx';
import { GitHubIcon } from './Icons.jsx';

export default function Closing() {
  const { t } = useI18n();

  return (
    <section className="closing">
      <span className="closing__bg" aria-hidden="true" />

      <div className="shell closing__inner">
        <Reveal>
          <SectionLabel>{t('closing.eyebrow')}</SectionLabel>
        </Reveal>

        <Reveal delay={90}>
          <h2 className="closing__title">{t('closing.title')}</h2>
        </Reveal>

        <Reveal delay={170}>
          <p className="closing__text">{t('closing.text')}</p>
        </Reveal>

        <Reveal delay={240} className="closing__actions">
          <a className="btn btn--primary" href={REPO_URL} {...EXTERNAL_LINK_PROPS}>
            <GitHubIcon size={16} />
            {t('closing.ctaPrimary')}
          </a>
          <a className="btn" href={TINKERED_URL} {...EXTERNAL_LINK_PROPS}>
            {t('closing.ctaSecondary')}
          </a>
        </Reveal>

        <Reveal delay={300} className="closing__dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </Reveal>
      </div>
    </section>
  );
}
