import { useI18n } from '../i18n/I18nProvider.jsx';
import { SECTION_IDS } from '../data/site.js';
import Reveal from './Reveal.jsx';
import SectionLabel from './SectionLabel.jsx';

export default function About() {
  const { t } = useI18n();
  const facts = t('about.facts');
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
          <ul className="about__facts">
            {facts.map((fact) => (
              <li className="about__fact" key={fact.label}>
                <span className="about__fact-label">{fact.label}</span>
                <span className="about__fact-value">{fact.value}</span>
              </li>
            ))}
          </ul>

          <p className="about__closing">{t('about.closing')}</p>
        </Reveal>
      </div>
    </section>
  );
}
