import { useI18n } from '../i18n/I18nProvider.jsx';
import { SECTION_IDS } from '../data/site.js';
import Reveal from './Reveal.jsx';

export default function About() {
  const { t } = useI18n();
  const facts = t('about.facts');
  const paragraphs = t('about.paragraphs');

  return (
    <section className="section" id={SECTION_IDS.about}>
      <div className="about shell">
        <Reveal className="about__aside">
          <div>
            <p className="eyebrow">{t('about.eyebrow')}</p>
            <h2 className="section-title">{t('about.title')}</h2>
          </div>

          <dl className="about__facts">
            {facts.map((fact) => (
              <div className="about__fact" key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal className="about__body" delay={120}>
          <p className="section-lead">{t('about.lead')}</p>
          {paragraphs.map((paragraph, index) => (
            <p className={index === 0 ? 'about__dropcap' : undefined} key={paragraph.slice(0, 32)}>
              {paragraph}
            </p>
          ))}
          <p className="about__closing">{t('about.closing')}</p>
        </Reveal>
      </div>
    </section>
  );
}
