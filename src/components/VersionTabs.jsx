/**
 * Selector de versión reutilizable.
 * Se usa en Modos de juego y en Hardware para no mezclar los datos
 * del ATtiny85 con los del Mega 2560.
 */
export default function VersionTabs({ label, options, value, onChange }) {
  return (
    <div className="ver-tabs">
      <span className="ver-tabs__label">{label}</span>
      <div className="ver-tabs__group" role="group" aria-label={label}>
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            className="ver-tabs__btn"
            data-version={option.id}
            aria-pressed={option.id === value}
            onClick={() => onChange(option.id)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
