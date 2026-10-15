import { useI18n } from '../i18n/I18nProvider.jsx';
import { SECTION_IDS } from '../data/site.js';
import Reveal from './Reveal.jsx';
import { BlackjackVisual, PetVisual, PingPongVisual, SnakeVisual } from './visuals/ModeVisuals.jsx';
import { TargetIcon } from './Icons.jsx';

const MODE_ACCENTS = {
  pingpong: ['#8b5cf6', '#3b82f6'],
  mascota: ['#ec4899', '#a855f7'],
  blackjack: ['#22d3ee', '#4f46e5'],
  snake: ['#2dd4bf', '#22d3ee'],
};

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
          <p className="eyebrow">{t('games.eyebrow')}</p>
          <h2 className="section-title gradient-text">{t('games.title')}</h2>
          <p className="section-lead">{t('games.lead')}</p>
        </Reveal>

        <div className="modes">
          {items.map((mode, index) => {
            const Visual = MODE_VISUALS[mode.id];
            const [accentA, accentB] = MODE_ACCENTS[mode.id] ?? MODE_ACCENTS.pingpong;

            return (
              <Reveal
                className="mode"
                key={mode.id}
                style={{ '--mode-a': accentA, '--mode-b': accentB }}
              >
                <div className="mode__visual" aria-hidden="true">
                  <Visual labels={visualLabels} />
                </div>

                <div className="mode__body">
                  <span className="mode__head">
                    <span className="mode__index">{String(index + 1).padStart(2, '0')}</span>
                    <h3 className="mode__name">{mode.name}</h3>
                  </span>
                  <span className="mode__tagline">{mode.tagline}</span>
                  <p className="mode__desc">{mode.description}</p>

                  <p className="mode__goal">
                    <TargetIcon />
                    <span>{mode.goal}</span>
                  </p>

                  <dl className="mode__controls">
                    <dt className="mode__controls-title">{t('games.controlsLabel')}</dt>
                    <dd className="mode__controls-list">
                      {controlKeys.map((key) => (
                        <span className="key" key={key}>
                          <b>{t(`games.controls.${key}`)}</b>
                          {mode.controls[key]}
                        </span>
                      ))}
                    </dd>
                  </dl>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
