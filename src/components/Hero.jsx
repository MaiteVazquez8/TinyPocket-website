import { useI18n } from '../i18n/I18nProvider.jsx';
import { EXTERNAL_LINK_PROPS, REPO_URL, SECTION_IDS } from '../data/site.js';
import Reveal from './Reveal.jsx';
import SectionLabel from './SectionLabel.jsx';
import ConsoleDevice from './visuals/ConsoleDevice.jsx';
import { ArrowDownIcon, GitHubIcon } from './Icons.jsx';

export default function Hero() {
  const { t, dict } = useI18n();
  const menuItems = dict.games.items.map((item) => item.name);

  return (
    <section className="hero" id="top">
      <div className="shell hero__content">
        <Reveal>
          <SectionLabel>{t('hero.eyebrow')}</SectionLabel>
        </Reveal>

        <Reveal delay={90}>
          <h1 className="hero__title">
            <span className="hero__title-name">TinyPocket</span>
            <span className="hero__title-line">
              {t('hero.titleLead')}{' '}
              <span className="serif-accent">{t('hero.titleAccent')}</span>
            </span>
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <p className="hero__desc">{t('hero.description')}</p>
        </Reveal>

        <Reveal delay={250} className="hero__actions">
          <a className="btn btn--primary" href={REPO_URL} {...EXTERNAL_LINK_PROPS}>
            <GitHubIcon size={16} />
            {t('hero.primaryCta')}
          </a>
          <a className="btn" href={`#${SECTION_IDS.about}`}>
            {t('hero.secondaryCta')}
            <ArrowDownIcon size={15} />
          </a>
        </Reveal>

        <Reveal delay={320}>
          <ul className="hero__chips">
            {t('hero.chips').map((chip) => (
              <li className="hero__chip" key={chip}>
                {chip}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={380} className="hero__visual">
          <span className="aurora" aria-hidden="true" />
          <div aria-hidden="true">
            <ConsoleDevice device={t('hero.device')} menuItems={menuItems} />
          </div>
        </Reveal>

        <Reveal delay={430}>
          <a className="hero__scroll" href={`#${SECTION_IDS.about}`}>
            <ArrowDownIcon size={15} />
            {t('hero.scroll')}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
