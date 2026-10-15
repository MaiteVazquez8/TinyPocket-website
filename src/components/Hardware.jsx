import { useState } from 'react';
import { useI18n } from '../i18n/I18nProvider.jsx';
import { SECTION_IDS } from '../data/site.js';
import Reveal from './Reveal.jsx';
import SectionLabel from './SectionLabel.jsx';
import VersionTabs from './VersionTabs.jsx';
import { AlertIcon, CircuitIcon } from './Icons.jsx';

const PIN_LEGEND = [
  { kind: 'i2c', className: '' },
  { kind: 'button', className: 'legend-button' },
];

const VERSIONS = [
  { id: 'attiny85', label: 'ATtiny85 · LCD 16×2' },
  { id: 'mega2560', label: 'Mega 2560 · OLED 128×64' },
];

function WiringTable({ title, headers, rows }) {
  return (
    <>
      <p className="panel__title">{title}</p>
      <table className="wiring__table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th scope="col" key={header}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={`${row.pin}-${row.role}`}>
              <td>{row.pin}</td>
              <td>{row.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default function Hardware() {
  const { t } = useI18n();
  const [version, setVersion] = useState('attiny85');
  const data = t(`hardware.${version}`);

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

        <Reveal delay={80} className="section-tabs">
          <VersionTabs
            label={t('hardware.versionLabel')}
            options={VERSIONS}
            value={version}
            onChange={setVersion}
          />
        </Reveal>

        <div className="hardware__layout">
          <Reveal className="bom">
            <div className="bom__row bom__head">
              <strong>{t('hardware.componentsLabel')}</strong>
              <span className="bom__qty">{t('hardware.quantityLabel')}</span>
            </div>
            {data.components.map((component) => (
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
              <WiringTable
                title={data.screenTitle}
                headers={[t('hardware.pinColumn'), t('hardware.deviceColumn')]}
                rows={data.screenRows}
              />
              <WiringTable
                title={data.buttonsTitle}
                headers={[t('hardware.pinColumn'), t('hardware.functionColumn')]}
                rows={data.buttonRows}
              />
            </div>

            <div className="panel">
              <p className="panel__title">{data.pinMapLabel}</p>
              <div className="pinmap__grid">
                {data.pinMap.map((pin) => (
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
                <p className="notice__title">{data.noteTitle}</p>
                <p className="notice__text">{data.note}</p>
              </div>
            </div>

            <p className="notice notice--muted">
              <CircuitIcon />
              <span>{t('hardware.sharedNote')}</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
