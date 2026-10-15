import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.js';

/**
 * Decorative, CSS-only rendering of the device: a 16×2 character LCD,
 * three buttons and a few status LEDs. All information it shows is also
 * available as real text elsewhere on the page, so it is hidden to AT.
 */
export default function ConsoleDevice({ device, menuItems }) {
  const reducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reducedMotion || menuItems.length === 0) return undefined;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % menuItems.length);
    }, 1900);
    return () => window.clearInterval(id);
  }, [reducedMotion, menuItems.length]);

  const label = menuItems[index] ?? '';
  const padded = label.padEnd(14, ' ');

  return (
    <div className="device">
      <span className="device__glow" aria-hidden="true" />

      <div className="device__topbar">
        <span className="device__board-label">{device.boardLabel}</span>
        <span className="device__leds">
          {device.leds.map((led) => (
            <span className="device__led" key={led}>
              {led}
            </span>
          ))}
        </span>
      </div>

      <div className="device__bezel">
        <div className="device__screen">
          <div className="device__screen-inner">
            <span className="device__screen-row device__screen-row--brand">
              <span>TinyPocket</span>
              <span aria-hidden="true">{device.cursor}</span>
            </span>
            <span className="device__screen-row">
              <span>{`> ${padded}`}</span>
              <span className="device__cursor" aria-hidden="true">
                {device.cursor}
              </span>
            </span>
          </div>
          <span className="device__screen-hint" aria-hidden="true">
            {device.screenLabel} · {device.prompt}
          </span>
        </div>
      </div>

      <div className="device__controls">
        <span className="device__btn">
          <span className="device__btn-cap" aria-hidden="true">
            &#9664;
          </span>
          <span className="device__btn-label">{device.buttons.left}</span>
        </span>
        <span className="device__btn device__btn--ok">
          <span className="device__btn-cap" aria-hidden="true">
            &#9679;
          </span>
          <span className="device__btn-label">{device.buttons.ok}</span>
        </span>
        <span className="device__btn">
          <span className="device__btn-cap" aria-hidden="true">
            &#9654;
          </span>
          <span className="device__btn-label">{device.buttons.right}</span>
        </span>
      </div>

      <div className="device__footer" aria-hidden="true">
        <span>{device.boardLabel}</span>
        <span className="device__vents">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </span>
        <span>TP</span>
      </div>
    </div>
  );
}
