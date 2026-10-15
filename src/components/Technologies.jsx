import { useI18n } from '../i18n/I18nProvider.jsx';
import { SECTION_IDS } from '../data/site.js';
import Reveal from './Reveal.jsx';
import SectionLabel from './SectionLabel.jsx';

export default function Technologies() {
  const { t } = useI18n();
  const items = t('technologies.items');

  return (
    <section className="section section--compact" id={SECTION_IDS.technologies}>
      <div className="shell">
        <Reveal className="section-head">
          <SectionLabel>{t('technologies.eyebrow')}</SectionLabel>
          <h2 className="section-title">
            {t('technologies.title')} <span className="serif-accent">{t('technologies.accent')}</span>
          </h2>
          <p className="section-lead">{t('technologies.lead')}</p>
        </Reveal>

        <ul className="tech">
          {items.map((item, index) => (
            <Reveal as="li" className="tech__item" delay={(index % 3) * 70} key={item.term}>
              <div className="tech__head">
                <span className={`tech__badge scope--${item.scope}`} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="tech__term">{item.term}</h3>
              </div>
              <p className="tech__text">{item.text}</p>
              <span className={`scope scope--${item.scope}`}>{t(`scope.${item.scope}`)}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
