import { useI18n } from '../i18n/I18nProvider.jsx';
import { SECTION_IDS } from '../data/site.js';
import Reveal from './Reveal.jsx';
import SectionLabel from './SectionLabel.jsx';
import { BlackjackVisual, PetVisual, PingPongVisual, SnakeVisual } from './visuals/ModeVisuals.jsx';
import { TargetIcon } from './Icons.jsx';

const MODE_VISUALS = {
  pingpong: PingPongVisual,
  mascota: PetVisual,
  blackjack: BlackjackVisual,
  snake: SnakeVisual,
};

export default function GameModes() {
  const { t } = useI18n();
  const items = t('games.items');
  const visualLabels = t('games.visual');
  const controlKeys = ['left', 'right', 'ok'];

  return (
    <section className="section" id={SECTION_IDS.games}>
      <div className="shell">
        <Reveal className="section-head">
          <SectionLabel>{t('games.eyebrow')}</SectionLabel>
          <h2 className="section-title">
            {t('games.title')} <span className="serif-accent">{t('games.accent')}</span>
          </h2>
          <p className="section-lead">{t('games.lead')}</p>
        </Reveal>

        <div className="modes">
          {items.map((mode, index) => {
            const Visual = MODE_VISUALS[mode.id];

            return (
              <Reveal className="mode" key={mode.id} data-mode={mode.id}>
                <div className="mode__visual" aria-hidden="true">
                  <Visual labels={visualLabels} />
                </div>

                <div className="mode__body">
                  <div className="mode__head">
                    <span className="mode__index">{String(index + 1).padStart(2, '0')}</span>
                    <h3 className="mode__name">{mode.name}</h3>
                  </div>
                  <span className="mode__tagline">{mode.tagline}</span>
                  <p className="mode__desc">{mode.description}</p>

                  <p className="mode__goal">
                    <TargetIcon />
                    <span>{mode.goal}</span>
                  </p>

                  <div className="mode__controls">
                    <span className="mode__controls-title">{t('games.controlsLabel')}</span>
                    <div className="mode__controls-list">
                      {controlKeys.map((key) => (
                        <span className="key" key={key}>
                          <b>{t(`games.controls.${key}`)}</b>
                          {mode.controls[key]}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
