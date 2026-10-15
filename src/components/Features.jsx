import { useI18n } from '../i18n/I18nProvider.jsx';
import { SECTION_IDS } from '../data/site.js';
import Reveal from './Reveal.jsx';
import SectionLabel from './SectionLabel.jsx';

export default function Features() {
  const { t } = useI18n();
  const items = t('features.items');

  return (
    <section className="section" id={SECTION_IDS.features}>
      <span className="aurora-wrap aurora-wrap--band" aria-hidden="true">
        <span className="aurora aurora--soft" />
      </span>

      <div className="shell">
        <Reveal className="section-head">
          <SectionLabel>{t('features.eyebrow')}</SectionLabel>
          <h2 className="section-title">
            {t('features.title')} <span className="serif-accent">{t('features.accent')}</span>
          </h2>
          <p className="section-lead">{t('features.lead')}</p>
        </Reveal>

        <ul className="features__list">
          {items.map((item, index) => (
            <Reveal as="li" className="feature" delay={(index % 3) * 80} key={item.tag}>
              <div className="feature__media" aria-hidden="true">
                <span className="feature__glyph">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="feature__body">
                <h3 className="feature__title">{item.title}</h3>
                <p className="feature__text">{item.text}</p>
                <span className="feature__meta">
                  <span className={`scope scope--${item.scope}`}>{t(`scope.${item.scope}`)}</span>
                  <span className="tag">{item.tag}</span>
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
