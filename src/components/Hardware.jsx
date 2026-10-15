import { useI18n } from '../i18n/I18nProvider.jsx';
import { SECTION_IDS } from '../data/site.js';
import Reveal from './Reveal.jsx';
import SectionLabel from './SectionLabel.jsx';
import { AlertIcon } from './Icons.jsx';

const PIN_LEGEND = [
  { kind: 'i2c', className: '' },
  { kind: 'button', className: 'legend-button' },
  { kind: 'idle', className: 'legend-idle' },
];

const POWER_ROWS = [
  { pin: 'VCC', role: 'VCC' },
  { pin: 'GND', role: 'GND' },
];

export default function Hardware() {
  const { t } = useI18n();
  const components = t('hardware.components');
  const pins = t('hardware.pinMap');
  const lcdPins = [...pins.filter((pin) => pin.kind === 'i2c'), ...POWER_ROWS];
  const buttonPins = pins.filter((pin) => pin.kind === 'button');

  return (
    <section className="section" id={SECTION_IDS.hardware}>
      <div className="shell">
        <Reveal className="section-head">
          <SectionLabel>{t('hardware.eyebrow')}</SectionLabel>
          <h2 className="section-title">
            {t('hardware.title')} <span className="serif-accent">{t('hardware.accent')}</span>
          </h2>
          <p className="section-lead">{t('hardware.lead')}</p>
        </Reveal>

        <div className="hardware__layout">
          <Reveal className="bom">
            <div className="bom__row bom__head">
              <strong>{t('hardware.componentsLabel')}</strong>
              <span className="bom__qty">{t('hardware.quantityLabel')}</span>
            </div>
            {components.map((component) => (
              <div className="bom__row" key={component.name}>
                <span className="bom__name">
                  {component.name}
                  <span className="bom__note">{component.note}</span>
                </span>
                <span className="bom__qty">{component.qty}</span>
              </div>
            ))}
          </Reveal>

          <Reveal className="hardware__side" delay={120}>
            <div className="panel">
              <p className="panel__title">{t('hardware.lcdTitle')}</p>
              <table className="wiring__table">
                <thead>
                  <tr>
                    <th scope="col">{t('hardware.pinColumn')}</th>
                    <th scope="col">{t('hardware.deviceColumn')}</th>
                  </tr>
                </thead>
                <tbody>
                  {lcdPins.map((pin) => (
                    <tr key={pin.pin}>
                      <td>{pin.pin}</td>
                      <td>{pin.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <p className="panel__title">{t('hardware.buttonsTitle')}</p>
              <table className="wiring__table">
                <thead>
                  <tr>
                    <th scope="col">{t('hardware.pinColumn')}</th>
                    <th scope="col">{t('hardware.functionColumn')}</th>
                  </tr>
                </thead>
                <tbody>
                  {buttonPins.map((pin) => (
                    <tr key={pin.pin}>
                      <td>{pin.pin}</td>
                      <td>{pin.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="panel">
              <p className="panel__title">{t('hardware.pinMapLabel')}</p>
              <div className="pinmap__grid">
                {pins.map((pin) => (
                  <span className="pin" data-kind={pin.kind} key={pin.pin}>
                    <span className="pin__id">{pin.pin}</span>
                    <span className="pin__role">{pin.role}</span>
                  </span>
                ))}
              </div>
              <div className="pinmap__legend">
                {PIN_LEGEND.map((legend) => (
                  <span className={legend.className} key={legend.kind}>
                    <i aria-hidden="true" />
                    {t(`hardware.pinLegend.${legend.kind}`)}
                  </span>
                ))}
              </div>
            </div>

            <div className="notice">
              <AlertIcon />
              <div>
                <p className="notice__title">{t('hardware.noteTitle')}</p>
                <p className="notice__text">{t('hardware.note')}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
