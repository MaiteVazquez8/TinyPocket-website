import { useI18n } from '../i18n/I18nProvider.jsx';
import { EXTERNAL_LINK_PROPS, REPO_URL, SECTION_IDS } from '../data/site.js';
import Reveal from './Reveal.jsx';
import ConsoleDevice from './visuals/ConsoleDevice.jsx';
import { ArrowDownIcon, GitHubIcon } from './Icons.jsx';

export default function Hero() {
  const { t, dict } = useI18n();
  const menuItems = dict.games.items.map((item) => item.name);

  return (
    <section className="hero" id="top">
      <span className="hero__bg" aria-hidden="true" />
      <span className="hero__grid" aria-hidden="true" />

      <div className="hero__inner shell">
        <Reveal className="hero__content">
          <p className="eyebrow">{t('hero.eyebrow')}</p>

          <h1 className="hero__title">
            <span className="hero__title-name">TinyPocket</span>
            <span className="hero__title-line">
              {t('hero.titleLead')}{' '}
              <span className="hero__title-accent">{t('hero.titleAccent')}</span>
            </span>
          </h1>

          <p className="hero__desc">{t('hero.description')}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href={REPO_URL} {...EXTERNAL_LINK_PROPS}>
              <GitHubIcon size={17} />
              {t('hero.primaryCta')}
            </a>
            <a className="btn btn--ghost" href={`#${SECTION_IDS.about}`}>
              {t('hero.secondaryCta')}
              <ArrowDownIcon size={16} />
            </a>
          </div>

          <ul className="hero__chips">
            {t('hero.chips').map((chip) => (
              <li className="hero__chip" key={chip}>
                {chip}
              </li>
            ))}
          </ul>

          <a className="hero__scroll" href={`#${SECTION_IDS.about}`}>
            <ArrowDownIcon size={15} />
            {t('hero.scroll')}
          </a>
        </Reveal>

        <Reveal className="hero__visual" delay={140} aria-hidden="true">
          <ConsoleDevice device={t('hero.device')} menuItems={menuItems} />
        </Reveal>
      </div>
    </section>
  );
}
