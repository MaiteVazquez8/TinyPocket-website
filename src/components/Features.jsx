import { useI18n } from '../i18n/I18nProvider.jsx';
import { SECTION_IDS } from '../data/site.js';
import Reveal from './Reveal.jsx';
import { CircuitIcon } from './Icons.jsx';

export default function Features() {
  const { t } = useI18n();
  const items = t('features.items');

  return (
    <section className="section section--tint" id={SECTION_IDS.features}>
      <div className="shell">
        <Reveal className="section-head">
          <p className="eyebrow">{t('features.eyebrow')}</p>
          <h2 className="section-title gradient-text">{t('features.title')}</h2>
          <p className="section-lead">{t('features.lead')}</p>
        </Reveal>

        <ul className="features__grid">
          {items.map((item, index) => (
            <Reveal as="li" className="feature" delay={(index % 4) * 70} key={item.tag}>
              <span className="feature__top">
                <span className="feature__icon" aria-hidden="true">
                  <CircuitIcon size={16} />
                </span>
                <span className="tag">{item.tag}</span>
              </span>
              <h3 className="feature__title">{item.title}</h3>
              <p className="feature__text">{item.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
